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
        
        sheet.addRow(['No.', 'Sekolah', 'Kelas', 'Nama Lengkap', 'No. Telpon', 'Kecerdasan']);
        
        const groupedResults = [];
        
        results.forEach((result) => {
            const hasil = groupedResults.find((group) => group.id_user == result.id_user);
            if (hasil) {
                hasil.agilities.push({
                    jenis_kecerdasan: result.jenis_kecerdasan,
                });
        
                // Assuming you want to keep only the first intelligence type
                hasil.agilities = [hasil.agilities[0]];
        
            } else {
                groupedResults.push({
                    id_user: result.id_user,
                    name: result.name_user,
                    phone: result.phone,
                    school: result.school,
                    classes: result.classes,
                    agilities: [{
                        jenis_kecerdasan: result.jenis_kecerdasan,
                    }],
                });
            }
        });
        
        groupedResults.forEach((groupedResult, index) => {
            sheet.addRow([
                index + 1,
                `${groupedResult.school}`,
                `${groupedResult.classes}`,
                `${groupedResult.name}`,
                `${groupedResult.phone}`,
                `${groupedResult.agilities[0].jenis_kecerdasan}`,
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
        const hasils = await Hasil.findOne({
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
