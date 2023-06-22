const { error } = require('console');
const fs = require('fs');
const { get } = require('http');
const SpotifyWebApi = require('spotify-web-api-node');
//let token = "BQCmomJR7IVNIuil9n0LaQ9p1cyVtQLEj01ULgYJHOxT9zOC5MIlngbhk7xafqw24h8XSiSP-ZFDnfjMdbHzLhmmeci-end5We-hUtPSHnBMDdX5Nm2EhmyqUImOHUWFRckUlPqgG5pZxPos35k6J1xzNWUWhzCMBzhGBueSCtfkEhUPw0ufdVU-kcEqyz-psOB5KwwKA0AJAfzuicg8WRGEHa3u3yG7xiw21hWoj1n62UXN84DX0nAecQfJlfzLwquklFvZmohmJzH5nwxRvi_qnMEabU5KNiAV7Fdq2DQP7_mo5YqBJbBLUnAryYuxd0Qo1A3SmyEkTQuQk9fA";

const spotifyApi = new SpotifyWebApi();



function setAccessToken(accesstoken){
    spotifyApi.setAccessToken(accesstoken);
}

//LIST OF FUNCTIONS

//getMyId();
//getMyEmail();
//getMyUserName();
//getUserPlaylists(userId);
//getListOfCategories();
//getPlaylistsForCategory(id_category);
//getPlaylistTracks(playlistId);
//getMyTopTracks();
//getMyTopArtists();
//searchTracks(input);
//searchArtists(input);
//searchPlaylists(input);
//getRecommendationsBasedOnSeeds(seed_artists, min_energy, min_popularity)

//-------------------------------------------------------------------------



//GET MY PROFILE DATA
async function getMyId() {
  const data = await spotifyApi.getMe()
  return data.body.id
}

async function getMyEmail() {
  const data = await spotifyApi.getMe()
  //console.log(data.body.email)
  return data.body.email
}

async function getMyUserName() {
  const data = await spotifyApi.getMe()
  return data.body.userName
}
 // +++++++++++++++++++



 // GET INFORMATION ABOUT USER MUSIC

async function getUserPlaylists(userId) {
  const data = await spotifyApi.getUserPlaylists(userId)

  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist)
    playlists.push(playlist)    
  }
  return playlists              // palylist.name ;  palylist.id ; playlist.tracks.total (number)
}                              //(to get traks from playlist use: getPlaylistTracks(playlistid)

// Get list of all categories
async function getListOfCategories() {
  const data = await spotifyApi.getCategories()

  let categories = []

 for (let category of data.body.categories.items) {
    //console.log(category)
    categories.push(category)
  }
  return categories // category.name ; category.id
}


// Get playlists for category by id
async function getPlaylistsForCategory(id_category) {
  const data = await spotifyApi.getPlaylistsForCategory(id_category)

  let playlists = []

 for (let playlist of data.body.playlists.items) {
    playlists.push(playlist)
  }
  return playlists // playlist.name ; playlist.id
}

//Ger tracks from playlist
async function getPlaylistTracks(playlistId) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
  }
  return tracks;
}

// Get current user top 20 traks
async function getMyTopTracks() {
  const data = await spotifyApi.getMyTopTracks()
  let tracks = []

 for (let track of data.body.items) {
    con
    tracks.push(track) 
  }
  return tracks  // track.name ; track.id ; track.popularity (spotify rating) ; track.artists[0].name
}

// Get current user top 20 artists
async function getMyTopArtists() {
  const data = await spotifyApi.getMyTopArtists()
  let artists = []

 for (let artist of data.body.items) {
    artists.push(artist)
  }
  return artists // artist.name ; artist.id
}
// +++++++++++++++++++++++++++++++++++++++++

// SEARCH

// Search tracks whose name, album or artist contains {input} limit: 20
async function searchTracks(input) {
  const data = await spotifyApi.searchTracks(input).catch(function(error){
    console.log(error)
  })
  if(data == null){
    return null
  }
  let tracks = []
  
  for (let track of data.body.tracks.items) {
    console.log(track.name)
    tracks.push(track) 
  }
  return tracks  // track.name ; track.id ; track.popularity (spotify rating) ; track.artists[0].name
}


// Search artists whose name contains {input} limit: 20
async function searchArtists(input) {
  const data = await spotifyApi.searchArtists(input).catch(function(error){
    console.log(error)
  })
  let artists = []
  if(data == null){
    return null
  }
  for (let artist of data.body.tracks.items) {
    console.log(artist.name)
    artists.push(artist) 
  }
  return artists  // artist.name ; artist.id
}

// Search playlists whose name or description contains {input} limit: 20
async function searchPlaylists(input) {
  const data = await spotifyApi.searchPlaylists(input).catch(function(error){
    console.log(error)
  })
  if(data == null){
    return null
  }
  let playlists = []

  for (let playlist of data.body.tracks.items) {
    console.log(playlist.name)
    playlists.push(playlist) 
  }
  return playlists  // playlist.name ; playlist.id
}

async function getRecommendationsBasedOnSeeds(seed_artists, min_energy, min_popularity) {
  const data = await spotifyApi.getRecommendations({
    min_energy: min_energy, // energy value can be from 0 to 1 (decimal)
    seed_artists: seed_artists,
    min_popularity: min_popularity // popularity value can be from 0 to 100 (int)
  })
  
  let recom_tracks = [];

  for (let track of data.body.tracks) {
    recom_tracks.push(track);
    console.log(track.name)
  }
  return recom_tracks // track.name ; track.id; track.artists[0] ; track.popularity ; track.energy
  
}

// HOW TO GET INFO FROM THIS FUNCTIONS

// let email = getMyEmail()
// email.then(function(mail){
//   console.log(mail)
// })

// let userId = getMyId()
// userId.then(function(data){
//   console.log(data)
// })

// let userName = getMyUserName()
// userName.then(function(data){
//   console.log(data)
// })

// let playlistId = ''
// let userPlaylists = getUserPlaylists(playlistId)
// userPlaylists.then(function(data){
//   for(i = 0; i< data.length; i++){
//     console.log(data[i].name)
//   }
// })

// let listOfCategories = getListOfCategories()
// listOfCategories.then(function(data){
//   for(i = 0; i< data.length; i++){
//     console.log(data[i].name)
//   }
// })

//getRecommendationsBasedOnSeeds(['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'], 0.4, 50)

// module.exports = {
//   setAccessToken,
//   getMyId,
//   getMyEmail,
//   getMyUserName,
//   getUserPlaylists, getListOfCategories,
//    getPlaylistsForCategory, getPlaylistTracks, getMyTopTracks, getMyTopArtists
// };
