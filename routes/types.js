const express = require('express');
const router = express.Router();
const { Type } = require('../models');

router.get('/', async (req, res) => {
  try {
    const response = await Type.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const response = await Type.findOne({
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
      jenis_kecerdasan: req.body.jenis_kecerdasan,
      keterangan: req.body.keterangan,
      jurusan: req.body.jurusan
    }
    const response = await Type.create(data);
    return res.status(200).json({
      message: 'Berhasil disimpan',
      data: response
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
      jenis_kecerdasan: req.body.jenis_kecerdasan,
      keterangan: req.body.keterangan,
      jurusan: req.body.jurusan
    }
    await Type.update(data, {
      where: {
        id: req.params.id
      }
    });
    const response = await Type.findOne({
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
    await Type.destroy({
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
