'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {
        jenis_kecerdasan: 'Linguistik',
        keterangan: 'Gambaran Kecerdasan: Kata dan bahasa, bagus dalam menulis dan bicara, daya ingat bagus, penerjemahan dan penjelasan ide dan informasi melalui bahasa, mengerti hubungan antara komunikasi dan arti. Peran, kecenderungan dan potensi khusus: Penulis, pengacara, jurnalis, pembicara, trainer, penerjemah, pengajar bahasa, pengarang, editor, ahli bahasa, konsultan PR, konsultan media, presenter TV dan radio, artis pengisi suara. Tugas, kegiatan, atau test yang sesuai: Menulis instruksi, berbicara tentang suatu masalah, mengedit sebuah tulisan, menulis sebuha pidato, memberi komentar sebuah event, menambahkan hal positif atau negative. Gaya belajar yang dipilih: Kata dan bahasa.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        jenis_kecerdasan: 'Logis-Matematis',
        keterangan: 'Gambaran Kecerdasan: Berpikir logis, mendeteksi bentuk, alasan dan dan pengambilan yang ilmiah, menganalisas masalah, pandai dalam penghitungan, mengerti hubungan antara sebab dan akibat terhadap hasil nyata. Peran, kecenderungan dan potensi khusus: Ilmuwan, insinyur, ahli computer, akuntan, ahli statistic, peneliti, alalis, padagang, broker asuransi, negosiator, direktur. Tugas, kegiatan, atau test yang sesuai: Menunjukan kalkulasi arithmetika, membuat sebuah proses untuk menghitung sesuatu yang susah, menganalisa bagimana mesin bekerja, membuat sebuah proses, membuat strategi untuk mencapai tujuan, mengukur nilai sebuah bisnis. Gaya belajar yang dipilih: Nomor-nomor dan logika.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jenis_kecerdasan: 'Musikal',
        keterangan: 'Gambaran Kecerdasan: Kemampuan musik, kesadaran, penghargaan dan penggunaan suara, mengenal bentuk-bentuk suara dan ritme, memahami hubngan antara suara dan perasaan. Peran, kecenderungan dan potensi khusus: musisi, penyanyi, pengarang lagu, DJ, produser musik, pemain piano, tehnisi akusitk, entertainer, perencana pesta, penasehat penyanyi, pelatih suara. Tugas, kegiatan, atau test yang sesuai: Mempertunjukan kemampuan bermain musik, menyanyi, mereview karya musik, melatih orang bermain musik, mendesain music untuk system telephone dan resepsionis. Gaya belajar yang dipilih: musik, suara, ritme.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jenis_kecerdasan: 'Fisik-Kinestetik',
        keterangan: 'Gambaran Kecerdasan: Pengontrolan gerakan tubuh, keluwesan gerak tubuh, keseimbangan tubuh, koordinasi mata dan tubuh. Peran, kecenderungan dan potensi khusus: penari, peraga, aktor, atlit, penyelam, olahragawan, tentara, pemadam kebakaran, guru olahraga, artis sandiwara, ahli patah tulang, nelayan, supir, pengrajin, tukang kebun, juru masak, ahli akupunktur, paranormal, petualang. Tugas, kegiatan, atau test yang sesuai: Melakukan gerakan, mendemokan tehnikk olahraga, membuat gerakan untuk menjelaskan sesuatu, memainkana layang-layang, melatih gerakan tubuh saat kerja, mendesaian gerakan kerja yang efektif dan nyaman. Gaya belajar yang dipilih: Pengalaman fisik dan gerakan, meraba dan merasakan.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jenis_kecerdasan: 'Spasial-Visual',
        keterangan: 'Gambaran Kecerdasan: Persepsi visual dan spatial, interpretasi dan pembuatan gambar visual, expresi gambar dan imajinasi, mengerti hubungan antara gambar dan pengertian, dan ruang. Peran, kecenderungan dan potensi khusus: artis, desainer, kartunis, penggambar cerita, arsitek, fotografer, pengukir, perencana kota, perencana, penemu, insinyur, konsultan kosmetik dan kecantikan. Tugas, kegiatan, atau test yang sesuai: Mendesain kostum, menerjemahkan lukisan, membuat layout ruangan, membuat logo perusahaan, mendesain bangunan, mengepak koper atau bagasi mobil. Gaya belajar yang dipilih: Gambar, bentuk, gambar 3 .',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        jenis_kecerdasan: 'Interpersonal',
        keterangan: 'Gambaran Kecerdasan: Persepsi terhadap perasaan orang lain, kemampuan berkomunikasi dengan orang lain, interpretasi sikap dan komunikasi, mengerti hubungan antara orang dan situasi mereka. Peran, kecenderungan dan potensi khusus: Ahli terapi, HR, mediator, pemimpin, penasehat, politisi, pendidik, penjual, penceramah agama, psikolog, guru, docter, organiser, professional iklan, pelatih dan mentor, (ada hubungan yang jelas antara tipe kecerdasan ini dengan kecerdasan emosional EQ). Tugas, kegiatan, atau test yang sesuai: Menerjemahkan mood dari ekspresi wajah, menunjukan perasaan melalui bahasa tubuh, mempengaruhi perasaan orang lain dengan cara terencana, melatih atau membimbing orang lain. Gaya belajar yang dipilih: Hubungan manusia, komunikasi, kerjasama tim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        jenis_kecerdasan: 'Intrapersonal',
        keterangan: 'Gambaran Kecerdasan: Kesadaran diri, perenungan diri, objektivitas diri, kemampuan untuk mengerti diri sendiri, hubungan diri sendiri dengan dunia dan kebutuhan dan reaksi terhadap perubahan. Peran, kecenderungan dan potensi khusus: Orang yang aktif dalam perubahan pemikiran, kepercayaan dan sikap dalam hubungannya dengan situasi dirinya, dan orang lain. Hal ini ada hubungannya dengan teori Maslow, tingkat aktualisasi diri dan hampir sama dengan kecerdasan emaosi EQ. Tugas, kegiatan, atau test yang sesuai: Merumuskan tujuan hidup dan perubahan pribadi untuk mencapai tujuan tersebut (biasanya tidak diungkapkan pada orang lain), mempertimbangkan Johari Window dirinya, dan pilihan untuk perbaikan diri, merumuskan hubungan dirinya dalam model kecerdasan emosi. Gaya belajar yang dipilih: Refleksi diri, penemuan jati diri.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  }
};
