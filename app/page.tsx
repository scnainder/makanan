'use client'

import Link from 'next/link'

const REGISTRATION_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSfPDGUgv7CMl2EYmjkyiTdEnBHYWwInQC0OFqywG7ZIR3z_2w/viewform'

export default function Home() {
  const coreDuties = [
    {
      title: 'Mengolah bahan makanan non-halal',
      text: 'Menyentuh, mengolah, mencicipi, memakan, hingga menelan bahan baku makanan yang mengandung unsur non-halal, sesuai standar kerja dapur/restoran di Jepang.',
    },
    {
      title: 'Jam kerja dapur yang padat',
      text: 'Jadwal operasional dapur/layanan makanan bersifat kontinu, sehingga peserta perlu bersedia tidak menjalankan ibadah puasa selama jam kerja berlangsung.',
    },
    {
      title: 'Seragam kerja standar dapur',
      text: 'Standar keselamatan dan higienitas dapur mewajibkan seragam kerja tanpa penutup kepala/hijab selama bertugas.',
    },
  ]

  const requirements = [
    {
      category: 'Umum',
      items: [
        'Usia 17-28 tahun (WAJIB genap 18 tahun pada bulan April 2027)',
        'Sehat jasmani dan rohani',
      ],
    },
    {
      category: 'Pendidikan',
      items: [
        'Minimal lulusan SMA/SMK/sederajat',
        'Ijazah asli pendidikan terakhir tidak sedang ditahan atau hilang',
      ],
    },
    {
      category: 'Status Pekerjaan & Pendidikan',
      items: [
        'Tidak sedang bekerja',
        'Tidak memiliki status pendidikan aktif dalam bentuk apa pun (termasuk sekolah, pelatihan, kuliah online, maupun cuti akademik)',
      ],
    },
    {
      category: 'Kesehatan & Penampilan',
      items: [
        'Tidak memiliki tato',
        'Tidak buta warna total/parsial',
      ],
    },
    {
      category: 'Komitmen & Izin',
      items: [
        'Diizinkan oleh orang tua/wali',
        'Bersedia mengikuti pelatihan selama 7 bulan atau lebih',
      ],
    },
  ]

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <p className="uppercase tracking-wide text-orange-200 font-semibold mb-2">OUR Blooming Academy</p>
          <h1 className="text-4xl md:text-5xl font-bold">Persyaratan Layanan Makanan</h1>
          <p className="text-xl text-orange-100 mt-4">
            Program pelatihan bidang Layanan Makanan untuk bekerja di Jepang — Batch 6, pelatihan dimulai 2 November 2026
          </p>
        </div>
      </section>

      {/* Tentang OUR Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tentang OUR</h2>
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg border-l-4 border-orange-600 mb-12">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Arti OUR (Onodera User Run)</h3>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              <span className="font-bold text-orange-600">OUR = Kami, Keluarga</span> - Merepresentasikan sikap kami dalam menjalankan bisnis dengan perasaan yang sama seperti keluarga terhadap peserta program, perusahaan penerima, dan fasilitas penerima di Jepang.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Kami membina SDM asing berbakat dari seluruh dunia dan mendukung mereka untuk berperan aktif di Jepang, di berbagai bidang kerja — termasuk <span className="font-bold">Layanan Makanan</span>. <span className="font-bold">Impian kami adalah berkontribusi demi kebahagiaan semua orang.</span>
            </p>
          </div>

          {/* 5 Konsep SDM */}
          <h3 className="text-2xl font-bold text-center mb-8">5 Konsep SDM yang Kami Harapkan</h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-4">
            {[
              { num: '❶', text: 'Tidak berhenti bekerja 5 tahun' },
              { num: '❷', text: 'Serius dalam pekerjaan' },
              { num: '❸', text: 'Mampu berbahasa Jepang' },
              { num: '❹', text: 'Pendidikan profesional' },
              { num: '❺', text: 'Berambisi & mimpi besar' }
            ].map((item, i) => (
              <div key={i} className="bg-red-50 p-6 rounded-lg border-t-4 border-red-600 text-center">
                <div className="text-4xl font-bold mb-2">{item.num}</div>
                <p className="text-gray-800 font-semibold text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yang GRATIS dari OUR */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">🎉 Yang GRATIS dari OUR</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Pelatihan Bahasa', desc: 'Gratis' },
              { icon: '🍳', title: 'Pelatihan Layanan Makanan', desc: 'Gratis 100%' },
              { icon: '🏠', title: 'Asrama', desc: 'Gratis (perempuan)' },
              { icon: '✈️', title: 'Tiket Pesawat', desc: 'Gratis ke Jepang' },
              { icon: '📋', title: 'Visa', desc: 'Tokutei Ginou gratis' },
              { icon: '🤝', title: 'Wawancara', desc: 'Persiapan gratis' },
              { icon: '📚', title: 'Pra-Berangkat', desc: 'Program gratis' },
              { icon: '👨‍💼', title: 'Dukungan 5 Tahun', desc: 'Gratis berkelanjutan' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600 text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job nature intro */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-700">Tentang Bidang Layanan Makanan</h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Layanan Makanan adalah posisi kerja di industri restoran/dapur Jepang dengan tugas dan lingkungan
              kerja tertentu yang bersifat wajib bagi seluruh pekerja di posisi ini, tanpa terkecuali. Silakan
              baca dengan cermat tugas inti pekerjaan di bawah ini sebelum mendaftar, untuk memastikan bidang ini
              sesuai dengan kondisi dan kesiapan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Core duties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-700">Tugas & Ketentuan Kerja Utama</h2>
            <div className="space-y-6">
              {coreDuties.map((duty, idx) => (
                <div key={idx} className="p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <p className="font-bold text-red-700 text-lg mb-2">{duty.title}</p>
                  <p className="text-gray-800">{duty.text}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Ketiga poin di atas adalah bagian tetap dari pekerjaan dan tidak dapat dinegosiasikan atau
              dikecualikan bagi siapa pun yang mengambil posisi Layanan Makanan.
            </p>
          </div>
        </div>
      </section>

      {/* Alternative program box */}
      <section className="py-12 bg-blue-50 border-y-4 border-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3">
              Tugas kerja di atas tidak sesuai dengan kondisi Anda?
            </h3>
            <p className="text-blue-900 mb-6">
              Tidak masalah — OUR juga membuka program pelatihan <strong>Perawat Lansia (KAIGO)</strong> dengan
              persyaratan yang berbeda. Hubungi kami untuk mendaftar di program tersebut sebagai alternatif.
            </p>
            <a
              href="tel:+6281168888844"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Hubungi WhatsApp Perawat Lansia →
            </a>
          </div>
        </div>
      </section>

      {/* Full requirements list */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-orange-700 text-center">
              Persyaratan Lengkap Pendaftar
            </h2>
            {requirements.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{section.category}</h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg border-l-4 border-orange-500 shadow-sm"
                    >
                      <div className="text-2xl mt-1">✓</div>
                      <p className="text-lg text-gray-800 flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-orange-50 border-l-4 border-orange-600 p-6 rounded">
            <p className="text-orange-900 font-semibold mb-1">Jadwal Pelatihan</p>
            <p className="text-orange-800">Batch 6 — Pelatihan dimulai 2 November 2026</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Mendaftar Bidang Layanan Makanan?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Pastikan Anda memenuhi semua syarat di atas sebelum mengisi formulir pendaftaran Batch 6.
          </p>
          <Link
            href={REGISTRATION_LINK}
            target="_blank"
            className="inline-block px-10 py-4 bg-yellow-400 text-red-900 font-bold rounded-lg hover:bg-yellow-300 transition text-lg"
          >
            Daftar Sekarang →
          </Link>
        </div>
      </section>
    </main>
  )
}
