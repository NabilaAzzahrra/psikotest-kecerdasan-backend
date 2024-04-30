const express = require('express');
const router = express.Router();
const { Question, Type } = require('../models');

router.get('/', async (req, res) => {
    const questions = await Question.findAll({
      include: [{model: Type}]
    });
    return res.json(questions);
  });

router.get('/:id', async (req, res) => {
    const questions = await Question.findOne({
        where: {
            id: req.params.id
        }
    });
    return res.json(questions);
});

router.post('/', async (req, res) => {
    const data = {
        id_type: req.body.id_type,
        question: req.body.question,
    }
    const question = await Question.create(data);
    return res.json({
        message: 'Berhasil disimpan',
        data: question
    });
});

router.patch('/:id', async (req, res) => {
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
    return res.json({
        message: 'Berhasil diubah',
        data: question
    });
});

router.delete('/:id', async (req, res) => {
    await Question.destroy({
        where: {
            id: req.params.id
        }
    });
    return res.json({
        message: 'BERHASIL DIHAPUS'
    });
});

module.exports = router;
