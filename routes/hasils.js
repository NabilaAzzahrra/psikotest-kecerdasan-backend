const express = require('express');
const router = express.Router();
const { Hasil } = require('../models');

router.get('/', async (req, res) => {
    try {
        const hasils = await Hasil.findAll({
            attributes: {
                exclude: "id",
            }
        });
        return res.json(hasils);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/:idUser', async (req, res) => {
    try {
        const hasils = await Hasil.findOne({
            attributes: {
                exclude: "id",
            },
            where: {
                id_user: req.params.idUser,
            },
            order: [['total', 'DESC']]
        });
        return res.json(hasils);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
