const express = require('express');
const router = express.Router();
const { Question, Type } = require('../models');

router.get('/', async (req, res) => {
    let questions = await Question.findAll({
      include: [{model: Type}]
    });
    return res.json(questions);
  });

router.get('/:id', async (req, res) => {
    let questions = await Question.findOne({
        where: {
            id: req.params.id
        }
    });
    return res.json(questions);
});

router.post('/', async (req, res) => {
    let data = {
        id_type: req.body.id_type,
        question: req.body.question,
    }
    let question = await Question.create(data);
    return res.json({
        message: 'Berhasil disimpan',
        data: question
    });
});

router.patch('/:id', async (req, res) => {
    let data = {
        id_type: req.body.id_type,
        question: req.body.question,
    }
    await Question.update(data, {
        where: {
            id: req.params.id
        }
    });
    let question = await Question.findOne({
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
