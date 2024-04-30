const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});

router.get('/:id', async (req, res) => {
  const users = await User.findOne({
      where: {
          id: req.params.id
      }
  });
  return res.json(users);
});

router.post('/', async (req, res) => {
  const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      refresh_token: req.body.refresh_token,
  }
  const user = await User.create(data);
  return res.json({
      message: 'Berhasil disimpan',
      data: user
  });
});

router.patch('/:id', async (req, res) => {
  const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      refresh_token: req.body.refresh_token,
  }
  await User.update(data, {
      where: {
          id: req.params.id
      }
  });
  const user = await User.findOne({
      where: {
          id: req.params.id
      }
  });
  return res.json({
      message: 'Berhasil diubah',
      data: user
  });
});

router.delete('/:id', async (req, res) => {
  await User.destroy({
      where: {
          id: req.params.id
      }
  });
  return res.json({
      message:'BERHASIL DIHAPUS'
  });
});

module.exports = router;
