const pool = require('../../db')


const list = async(req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM board')
        res.render('board/list', {
        items:result,
    })
    } catch(e) {

    }
}

const view = async(req, res) => {
    const [result] = await pool.query('SELECT * FROM board')
    res.render('board/view', {
        items:result
    })
}

const write = (req, res) => {
    res.render('board/write')
}

const update = (req, res) => {
    res.render('board/update')
}

const writeAction = async(req, res) => {
    let subject = req.body.subject;
    let name = req.body.name;
    let content = req.body.content;
    const [result] = await pool.query(`INSERT INTO board(subject,content,name)VALUES(${subject},${content},${name})`)
    res.redirect(`/board/list`)
}
module.exports = {
    list, view, write, update, writeAction
}