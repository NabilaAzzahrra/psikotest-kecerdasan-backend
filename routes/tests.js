const express = require('express');
const router = express.Router();
const { Test, Question, Type } = require('../models');

router.get('/', async (req, res) => {
  const tests = await Test.findAll({
    include: [
      {
        model: Question,
        include: [
          { model: Type }
        ]
      },
    ],
  });
  return res.json(tests);
});

router.get('/:id', async (req, res) => {
  const tests = await Test.findOne({
    where: {
      id: req.params.id
    }
  });
  return res.json(tests);
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
    return res.json({
      message: 'heuheuheuheu',
      data: data
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Gagal menyimpan data' });
  }
});



router.patch('/:id', async (req, res) => {
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
  const test = await Test.findOne({
    where: {
      id: req.params.id
    }
  });
  return res.json({
    message: 'Berhasil diubah',
    data: test
  });
});

router.delete('/:id', async (req, res) => {
  await Test.destroy({
    where: {
      id: req.params.id
    }
  });
  return res.json({
    message: 'BERHASIL DIHAPUS'
  });
});

module.exports = router;
