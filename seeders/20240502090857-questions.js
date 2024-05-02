'use strict';

/** @type {import('sequelize-cli')Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      [
        {
           id_type: 7,
            question: "Saya senang belajar tentang diri sendiri untuk mengetahui 'Who Am I?'"
        },
        {
           id_type: 3,
            question: "Saya bisa memainkan alat musik"
        },
        {
           id_type: 4,
            question: "Saya paling mudah menyelesaikan masalah ketika melakukan sesuatu secara fisik, seperti memukul, melempar atau banting sesuatu"
        },
        {
           id_type: 3,
            question: "Saya seringkali mendengar lagu atau musik dalam pikiran/benak saya"
        },
        {
           id_type: 2,
            question: "Menurut saya, menganggarkan dan mengatur keuangan sendiri itu mudah"
        },
        {
           id_type: 1,
            question: "Saya mudah membuat cerita"
        },
        {
           id_type: 4,
            question: "Koordinasi fisik saya selalu bagus"
        },
        {
           id_type: 1,
            question: "Ketika bicara dengan orang, saya cenderung mendengarkan kata per kata yang mereka gunakan, bukan hanya pada apa yang mereka maksud"
        },
        {
           id_type: 1,
            question: "Saya senang mengisi TTS dan bermain mencari kata atau permainan lain yang menggunakan kata"
        },
        {
           id_type: 2,
            question: "Saya tidak suka hal-hal yang rancu (gaje), saya menyukai segala hal yang jelas"
        },
        {
           id_type: 2,
            question: "Saya menyukai teka-teki logis seperti 'sudoku'"
        },
        {
           id_type: 7,
            question: "Saya senang bermeditasi/bertafakur untuk menjernihkan pikiran agar merasa lebih tenang, nyaman & produktif"
        },
        {
           id_type: 3,
            question: "Musik sangat penting bagiku"
        },
        {
           id_type: 1,
            question: "Saya jago berbohong"
        },
        {
           id_type: 4,
            question: "Saya senang berolahraga atau menari"
        },
        {
           id_type: 7,
            question: "Saya sangat tertarik dengan psikometri (uji kepribadian) dan tes IQ"
        },
        {
           id_type: 2,
            question: "Orang yang bertindak irasional (tidak logis) mengesalkan saya karena tiba-tiba ia marah/komplain"
        },
        {
           id_type: 3,
            question: "Saya menyadari bahwa musik yang saya sukai seringkali memiliki basis yang sesuai dengan emosi saya"
        },
        {
           id_type: 6,
            question: "Saya orang yang sangat ramah dan saya senang berkumpul dengan orang lain"
        },
        {
           id_type: 2,
            question: "Saya senang bersikap sistematis dan teliti"
        },
        {
           id_type: 5,
            question: "Saya anggap membaca  grafik dan tabel itu mudah dan dimengerti"
        },
        {
           id_type: 4,
            question: "Saya jago melempar - dart, batu kerikil di atas air (permainan aclok bangkong, frisbee (seperti boomerang/lempar piring)"
        },
        {
           id_type: 1,
            question: "Saya mudah mengingat kutipan atau kalimat"
        },
        {
           id_type: 5,
            question: "Saya selalu mengenali tempat-tempat yang pernah saya datangi, bahkan tempat yang sudah lama tidak saya datangi atau tempat yang saya datangi ketika masih kecil"
        },
        {
           id_type: 3,
            question: "Saya menikmati berbagai jenis musik"
        },
        {
           id_type: 5,
            question: "Ketika sedang berkonsentrasi, saya cenderung mencorat-coret/menggambar"
        },
        {
           id_type: 6,
            question: "Jika mau, saya dapat memanipulasi orang agar mereka mengikuti apa yang saya inginkan"
        },
        {
           id_type: 7,
            question: "Saya dapat meramal/memprediksikan  perasaan dan perilaku saya dalam berbagai situasi secara akurat"
        },
        {
           id_type: 2,
            question: "Menurut saya, aritmatika mental itu mudah Aritmatika mental adalah proses melakukan perhitungan matematis di kepala tanpa penggunaan metode mental, seperti visualisasi, menghafal, dan pengenalan pola untuk memecahkan masalah matematika"
        },
        {
           id_type: 3,
            question: "Saya dapat mengidentifikasikan banyak bunyi tanpa perlu melihat benda yang menimbulkannya"
        },
        {
           id_type: 1,
            question: "Waktu di sekolah, salah satu pelajaran kesukaan saya adalah pelajaran bahasa"
        },
        {
           id_type: 2,
            question: "Saya suka memikirkan suatu masalah secara mendalam, dengan mempertimbangkan segala konsekuensinya"
        },
        {
           id_type: 1,
            question: "Saya menikmati debat dan diskusi"
        },
        {
           id_type: 4,
            question: "Saya sangat menyukai olahraga adrenalin dan wahana yang menakutkan"
        },
        {
           id_type: 7,
            question: "Saya paling menyukai olahraga individual"
        },
        {
           id_type: 6,
            question: "Saya perduli perasaan orang-orang di sekitar saya"
        },
        {
           id_type: 5,
            question: "Rumah saya penuh foto dan lukisan"
        },
        {
           id_type: 4,
            question: "Saya senang dan jago membuat barang kerajinan – tangan saya ahli"
        },
        {
           id_type: 3,
            question: "Saya senang memutar musik ketika mengerjakan kegiatan apapun"
        },
        {
           id_type: 2,
            question: "Saya mudah menghapal nomor telepon"
        },
        {
           id_type: 7,
            question: "Saya menetapkan tujuan dan rencana ke depan"
        },
        {
           id_type: 4,
            question: "Saya adalah orang yang sangat suka menyentuh dan meraba"
        },
        {
           id_type: 6,
            question: "Saya mudah mengetahui apakah seseorang menyukai saya atau tidak"
        },
        {
           id_type: 5,
            question: "Saya dapat dengan mudah membayangkan bagaimana terlihatnya suatu objek dari perspektif / sudut pandang lain"
        },
        {
           id_type: 4,
            question: "Saya tidak pernah menggunakan instruksi untuk mebel flat-pack yang perlu dirakit"
        },
        {
           id_type: 6,
            question: "Saya mudah bicara dengan orang baru"
        },
        {
           id_type: 4,
            question: "Untuk belajar hal baru, saya cukup mencobanya langsung"
        },
        {
           id_type: 5,
            question: "Saya seringkali melihat citra/gambar yang nyata ketika menutup mata"
        },
        {
           id_type: 2,
            question: "Saya tidak menggunakan jari kalau menghitung"
        },
        {
           id_type: 1,
            question: "Saya seringkali bicara dengan diri sendiri – dengan suara keras ataupun hanya dalam hati saja"
        },
        {
           id_type: 3,
            question: "Di sekolah, saya menyukai pelajaran musik"
        },
        {
           id_type: 1,
            question: "Ketika berada di luar negeri, sepertinya saya akan mudah belajar dasar-dasar bahasa negeri tersebut"
        },
        {
           id_type: 4,
            question: "Menurut saya, permainan yang menggunakan bola itu mudah dan menyenangkan"
        },
        {
           id_type: 2,
            question: "Pelajaran kesayangan saya di sekolah adalah matematika"
        },
        {
           id_type: 7,
            question: "Saya selalu tahu perasaan saya sendiri"
        },
        {
           id_type: 7,
            question: "Saya realistis mengenai kekuatan dan kelemahan diri sendiri"
        },
        {
           id_type: 7,
            question: "Saya punya catatan harian/diary"
        },
        {
           id_type: 6,
            question: "Saya sangat menyadari bahasa tubuh orang lain"
        },
        {
           id_type: 5,
            question: "Pelajaran kesayangan saya di sekolah adalah kesenian"
        },
        {
           id_type: 1,
            question: "Saya senang membaca"
        },
        {
           id_type: 5,
            question: "Saya mudah membaca peta"
        },
        {
           id_type: 6,
            question: "Saya gelisah jika melihat seseorang menangis dan tidak bisa membantunya"
        },
        {
           id_type: 6,
            question: "Saya jago menyelesaikan perselisihan orang lain"
        },
        {
           id_type: 3,
            question: "Saya selalu berkhayal menjadi musisi atau penyanyi"
        },
        {
           id_type: 6,
            question: "Saya lebih menyukai olahraga kelompok, seperti sepak bola, basket, dan lainnya"
        },
        {
           id_type: 3,
            question: "Menyanyi membuatku sangat bahagia"
        },
        {
           id_type: 5,
            question: "Saya tidak pernah tersasar ketika berada di tempat baru sendirian"
        },
        {
           id_type: 5,
            question: "Jika saya belajar melakukan sesuatu, saya ingin melihat gambar dan diagram cara melakukannya"
        },
        {
           id_type: 7,
            question: "Saya senang menghabiskan waktu sendirian"
        },
        {
           id_type: 6,
            question: "Teman-teman saya selalu mendatangi saya untuk dukungan emosional ataupun nasehat"
        }
    ]
    
    ], {});
  },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Questions', null, {});
    }
};
