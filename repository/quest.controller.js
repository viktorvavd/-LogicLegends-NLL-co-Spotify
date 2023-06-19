const db = require('../db')

class QuestController {
    async getQuests(req, res) {
        const quests = await db.query('select * from quest')
        res.json(quests.rows)
    }

    async getQuestionsForQuest(req, res) {
        const id = req.params.questId
        const questions = await db.query('select * from question where id_quest = $1', [id])
        res.json(questions.rows)
    }

    async getAnswerForQuestion(req, res) {
        const id = req.params.questionId
        const questions = await db.query('select * from answer where id_question = $1', [id])
        res.json(questions.rows)
    }

    async getFinalsForQuest(req, res) {
        const id = req.params.questId
        const questions = await db.query('select * from final where id_quest = $1', [id])
        res.json(questions.rows)
    }

}

module.exports = new QuestController()