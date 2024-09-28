const express = require('express');
const router = express.Router();
const { Test, Question, Type } = require('../models');

router.get('/', async (req, res) => {
  try {
    const response = await Test.findAll({
      include: [
        {
          model: Question,
          include: [
            { model: Type }
          ]
        },
      ],
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
    const response = await Test.findOne({
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
    const answers = req.body.answers;
    let data = [];
    answers.forEach(answer => {
      data.push({
        id_question: answer.id_question,
        score: parseInt(answer.answer),
        id_user: answer.user
      });
    });
    await Test.bulkCreate(data);
    return res.status(200).json({
      message: 'Create succesfully',
      data: data
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
      id_question: req.body.id_question,
      score: req.body.score,
      id_user: req.body.id_user,
    }
    await Test.update(data, {
      where: {
        id: req.params.id
      }
    });
    const response = await Test.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      message: 'Berhasil diubah',
      data: response
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Test.destroy({
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
