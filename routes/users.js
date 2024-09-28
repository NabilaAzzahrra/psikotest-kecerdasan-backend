const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { default: axios } = require('axios');

router.get('/', async (req, res) => {
    try {
        const response = await User.findAll();
        return res.status(200).json(response);
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.get('/sync', async (req, res) => {
    try {
        const users = await User.findAll();
        const responseClasses = await axios.get(`http://localhost:3000/users/class`);
        const applicants = responseClasses.data;
        users.forEach(async (user) => {
            const result = applicants.find((applicant) => applicant.id == user.id_user);
            if (result) {
                await User.update({
                    classes: result.class
                }, {
                    where: {
                        id_user: user.id_user
                    }
                })
                console.log(result.class);
            }
        });
        return res.status(200).json({
            users: users,
        });
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.get('/:idUser', async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id_user: req.params.idUser
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
            id_user: req.body.id_user,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            school: req.body.school,
            classes: req.body.classes,
        }
        const user = await User.create(data);
        return res.status(200).json({
            message: 'Berhasil disimpan',
            data: user
        });
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.patch('/:idUser', async (req, res) => {
    try {
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
        return res.status(200).json({
            message: 'Berhasil diubah',
            data: user
        });
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.delete('/:idUser', async (req, res) => {
    try {
        await User.destroy({
            where: {
                id_user: req.params.idUser
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
