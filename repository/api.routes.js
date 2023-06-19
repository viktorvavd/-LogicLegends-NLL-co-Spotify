const Router = require('express')
const router = new Router()
const questController = require('./quest.controller')

router.get('/quest', questController.getQuests)
router.get('/question/:questId', questController.getQuestionsForQuest)
router.get('/answer/:questionId', questController.getAnswerForQuestion)
router.get('/final/:questId', questController.getFinalsForQuest)

module.exports = router