import { Head } from "$fresh/runtime.ts";

export default function Me() {
  return (
    <>
      <Head>
        <title>Halaman saya</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/photo_2023-04-09_15-08-52.jpg"
          class="w-32 h-32"
          alt="keluarga selamat 150"
        />
        <p class="my-6">
            <span className="font-bold">Baroen Sudarman</span>. Lahir di Gorontalo, awal tahun 1995-an. Menyelesaikan pendidikan dasar dan menengah di SD Inpres Tamboo dan SMP Negeri 1 Bonepantai. Menamatkan SMA di SMA Negeri 1 Bonepantai pada tahun 2013. Menempuh pendidikan S1 bidang Software Engineering di STMIK ICHSAN Gorontalo pada tahun 2013
        </p>
      </div>
    </>
  );
}
