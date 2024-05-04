const express = require('express');
const router = express.Router();
const ExcelJS = require('exceljs');
const { Hasil } = require('../models');

router.get('/', async (req, res) => {
    try {
        const results = await Hasil.findAll({
            attributes: {
                exclude: "id",
            }
        });
        return res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
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
            }
        });
        return res.json(hasils);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
