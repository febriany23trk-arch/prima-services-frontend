export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-16 text-slate-700 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
        Prima Services
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Kebijakan Privasi
      </h1>
      <p className="mt-4 text-sm text-slate-500">
        Informasi tentang data yang dicatat saat Anda menggunakan website kami.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Statistik kunjungan</h2>
        <p className="leading-7">
          Untuk memahami halaman yang dikunjungi dan meningkatkan website, sistem secara
          otomatis mencatat alamat IP, alamat halaman, serta tanggal dan waktu kunjungan
          ketika halaman publik dibuka. Anda tidak perlu mengisi formulir kontak untuk
          pencatatan statistik ini.
        </p>
        <p className="leading-7">
          Data kunjungan disimpan paling lama 30 hari, lalu dihapus saat sistem melakukan
          pembersihan berkala. Catatan hanya dapat dilihat oleh admin yang telah masuk ke
          dashboard dan tidak digunakan untuk mengidentifikasi pengunjung melalui layanan
          pihak ketiga.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Pesan melalui formulir kontak</h2>
        <p className="leading-7">
          Jika Anda mengirim formulir kontak, informasi yang Anda berikan dipakai untuk
          menanggapi permintaan dan dikelola sesuai keperluan layanan.
        </p>
      </section>

      <p className="mt-10 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
        Untuk pertanyaan mengenai kebijakan privasi ini, silakan hubungi Prima Services
        melalui informasi kontak yang tersedia di website.
      </p>
    </article>
  );
}
