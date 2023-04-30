import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Halaman saya</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h3 class="text-xl font-semibold text-center text-gray-700">Profil</h3>
        <div class="flex gap-3">
          <img
            src="/photo_2023-04-09_15-08-52.jpg"
            class="w-32 h-32 rounded-2xl shadow"
            alt="keluarga selamat 150"
          />
          <p class="my-6">
              <span className="font-bold">Baroen Sudarman</span>. Lahir di Gorontalo, awal tahun 1995-an. Menyelesaikan pendidikan dasar dan menengah di SD Inpres Tamboo dan SMP Negeri 1 Bonepantai. Menamatkan SMA di SMA Negeri 1 Bonepantai pada tahun 2013. Menempuh pendidikan S1 bidang Software Engineering di STMIK ICHSAN Gorontalo pada tahun 2013
          </p>
        </div>
        <a className="text-blue-500 text-xs" target={`_blank`} href={`https://drive.google.com/file/d/1us4Ifey5unmZZZnKjEGTLw8Sd1OjEMFj/view?usp=sharing`}>Download CV {`(PDF)`}</a>
      </div>
    </>
  );
}
