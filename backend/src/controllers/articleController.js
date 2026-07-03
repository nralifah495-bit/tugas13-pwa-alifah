const db = require('../config/db');

exports.getAllArticles = async (req, res) => {

    try {

        const [rows] = await db.query(
            'SELECT * FRsssssOM articles ORDER BY id DESC'
        );

        res.json({
            success: true,
            data: rows
        });

    } catch (err) {

    console.error(err);

    res.status(500).json({
        success: false,
        message: err.message
    });

}

};

exports.createArticle = async (req, res) => {

    try {

        const {
            title,
            content,
            author
        } = req.body;

        await db.query(

            `INSERT INTO articles
            (title, content, author)
            VALUES (?, ?, ?)`,

            [title, content, author]

        );

        res.json({
            success: true,
            message: 'Artikel berhasil ditambah'
        });

    } catch(err){

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};


exports.deleteArticle = async (req, res) => {

    try {

        const id = req.params.id;

        await db.query(

            'DELETE FROM articles WHERE id = ?',

            [id]

        );

        res.json({

            success: true,
            message: 'Artikel berhasil dihapus'

        });

    } catch(err){

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

