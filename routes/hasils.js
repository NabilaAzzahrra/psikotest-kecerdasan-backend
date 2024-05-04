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
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Hasil Kecerdasan');

        // Add some dummy data to the sheet
        sheet.addRow(['No.','Sekolah', 'Kelas', 'Nama Lengkap', 'No. Telpon', 'Kecerdasan']);

        results.forEach((result, index) => {
            sheet.addRow([
                index + 1,
                `${result.school}`,
                `${result.classes}`,
                `${result.name_user}`,
                `${result.phone}`,
                result.jenis_kecerdasan
            ]);
        });

        // Set content type and disposition
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="example.xlsx"');

        // Save workbook to a buffer
        const buffer = await workbook.xlsx.writeBuffer();

        // Send the buffer as response
        res.send(buffer);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/:idUser', async (req, res) => {
    try {
        const hasils = await Hasil.findOne({
            attributes: {
                exclude: "id",
            },
            where: {
                id_user: req.params.idUser,
            },
            order: [['total', 'DESC']]
        });
        return res.json(hasils);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
