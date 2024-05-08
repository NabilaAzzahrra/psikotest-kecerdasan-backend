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

router.get('/download', async (req, res) => {
    try {
        const results = await Hasil.findAll({
            attributes: {
                exclude: "id",
            }
        });

        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Hasil Kecerdasan');

        sheet.addRow(['No.', 'Sekolah', 'Kelas', 'Nama Lengkap', 'No. Telpon', 'Kecerdasan 1', 'Kecerdasan 2', 'Jurusan']);

        const resultOne = results[0];
        const resultTwo = results[1];

        const jurusanOne = resultOne.jurusan.split(',');
        const jurusanTwo = resultTwo.jurusan.split(',');

        let jurusan = null;

        if (jurusanOne.length == 1 || jurusanTwo.length == 1) {
            if (jurusanOne.length == 1) {
                jurusan = jurusanOne[0];
            }
            if (jurusanTwo.length == 1) {
                jurusan = jurusanTwo[0];
            }
        } else {
            let result = [];
            for (const jurusan of jurusanOne) {
                if (jurusanTwo.includes(jurusan)) {
                    result.push(jurusan);
                }
            }
            jurusan = result[0];
        }

        results.forEach((result, index) => {
            sheet.addRow([
                index + 1,
                `${result.school}`,
                `${result.classes}`,
                `${result.name_user}`,
                `${result.phone}`,
                resultOne.jenis_kecerdasan,
                resultTwo.jenis_kecerdasan,
                jurusan,
            ]);
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="example.xlsx"');

        const buffer = await workbook.xlsx.writeBuffer();
        res.send(buffer);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:idUser', async (req, res) => {
    try {
        const hasils = await Hasil.findAll({
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
