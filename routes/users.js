const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

router.get('/:idUser', async (req, res) => {
    const users = await User.findOne({
        where: {
            id_user: req.params.idUser
        }
    });
    return res.json(users);
});

router.post('/', async (req, res) => {
    const data = {
        id_user: req.body.id_user,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        school: req.body.school,
        classes: req.body.classes,
    }
    const user = await User.create(data);
    return res.json({
        message: 'Berhasil disimpan',
        data: user
    });
});

router.patch('/:idUser', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        school: req.body.school,
        classes: req.body.classes,
    }
    await User.update(data, {
        where: {
            id_user: req.params.idUser
        }
    });
    const user = await User.findOne({
        where: {
            id_user: req.params.idUser
        }
    });
    return res.json({
        message: 'Berhasil diubah',
        data: user
    });
});

router.delete('/:idUser', async (req, res) => {
    await User.destroy({
        where: {
            id_user: req.params.idUser
        }
    });
    return res.json({
        message: 'BERHASIL DIHAPUS'
    });
});

module.exports = router;
