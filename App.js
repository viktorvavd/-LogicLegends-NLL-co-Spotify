const express = require('express');
const apiRouter = require('./repository/api.routes')
const path = require('path');

const app = express();
const port = 8888;


//const {setAccessToken, getMyId , getMyEmail, getMyUserName, getUserPlaylists, getListOfCategories,
//   getPlaylistsForCategory, getPlaylistTracks, getMyTopTracks, getMyTopArtists} = require('./get_spotify_data')

var SpotifyWebApi = require('spotify-web-api-node');
const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
  ];
  
  var spotifyApi = new SpotifyWebApi({
    clientId: '464cde1927874338b59485ef848ed053',
    clientSecret: '61db482ac68f44d5806663145ebffba1',
    redirectUri: 'http://localhost:8888/callback'
  });
  

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'design')));

// Use api route for quest db
app.use('/api', apiRouter)

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'design', 'index.html'));
});
app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'design', 'register.html'));
});
app.get('/analitics', (req, res) => {
    res.sendFile(path.join(__dirname, 'design', 'analysis.html'));
});

app.get('/quest', (req, res) => {
    res.sendFile(path.join(__dirname, 'design', 'quest.html'));
});


// for login spotify user
app.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
  });
  
  app.get('/callback', (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;
  
    if (error) {
      console.error('Callback Error:', error);
      res.send(`Callback Error: ${error}`);
      return;
    }
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];
  
        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);
        //setAccessToken(access_token)
        //getMyEmail()  
        console.log('access_token:', access_token);
        console.log('refresh_token:', refresh_token);
  
        console.log(
          `Sucessfully retreived access token. Expires in ${expires_in} s.`
        );
         setInterval(async () => {
          const data = await spotifyApi.refreshAccessToken();
          const access_token = data.body['access_token'];
  
          console.log('The access token has been refreshed!');
          console.log('access_token:', access_token);

          spotifyApi.setAccessToken(access_token);
        }, expires_in / 2 * 1000);
        res.sendFile(path.join(__dirname, 'design', 'analysis.html'));   // retirect to analylis.html
      })
      .catch(error => {
        console.error('Error getting Tokens:', error);
        res.send(`Error getting Tokens: ${error}`);
      });
  });


// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
