'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">OUR Blooming Academy</h3>
            <p className="text-sm text-stone-400">Program pelatihan Layanan Makanan untuk bekerja di Jepang</p>
            <div className="mt-4 space-y-2">
              <a href="https://instagram.com/onoderauserrun.mdn" target="_blank" className="block text-sm hover:text-white transition">
                📸 @onoderauserrun.mdn
              </a>
              <a href="tel:+6281168888844" className="block text-sm hover:text-white transition">
                📱 0811 6888 8844
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Pendaftaran</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+6281168888844" className="hover:text-white transition">Hubungi WhatsApp</a></li>
              <li><a href="https://instagram.com/onoderauserrun.mdn" target="_blank" className="hover:text-white transition">Follow Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Lokasi</h4>
            <p className="text-sm text-stone-400 mb-3">Universitas Sari Mutiara Indonesia</p>
            <p className="text-sm text-stone-400">Jl. Kapten Muslim No.79, Helvetia Tengah, Medan Helvetia, Kota Medan, Sumatera Utara 20118</p>
            <a href="https://maps.google.com/?q=Universitas+Sari+Mutiara+Indonesia+Medan" target="_blank" className="inline-block mt-3 text-sm text-orange-400 hover:text-orange-300 transition">
              Lihat di Google Maps →
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h5 className="text-white font-semibold mb-3">Jam Belajar</h5>
              <p className="text-sm text-stone-400">Senin - Jumat: 08:00 - 17:00 WIB</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Dimulai</h5>
              <p className="text-sm text-stone-400">2 November 2026 (Batch 6)</p>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-400">
            <p>&copy; 2026 OUR Blooming Academy - ONODERA USER RUN Co., Ltd. All rights reserved.</p>
            <p className="mt-2 text-xs">Difasilitasi oleh ONODERA USER RUN Co., Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
