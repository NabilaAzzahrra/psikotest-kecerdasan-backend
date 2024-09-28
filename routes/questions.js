const express = require('express');
const router = express.Router();
const { Question, Type } = require('../models');

router.get('/', async (req, res) => {
    try {
        const response = await Question.findAll({
            include: [{ model: Type }]
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const response = await Question.findOne({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const data = {
            id_type: req.body.id_type,
            question: req.body.question,
        }
        const question = await Question.create(data);
        return res.status(200).json({
            message: 'Berhasil disimpan',
            data: question
        });
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const data = {
            id_type: req.body.id_type,
            question: req.body.question,
        }
        await Question.update(data, {
            where: {
                id: req.params.id
            }
        });
        const question = await Question.findOne({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({
            message: 'Berhasil diubah',
            data: question
        });
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Question.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({
            message: 'Berhasil dihapus'
        });
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

module.exports = router;
