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
          <p class="my-6">
              <span className="font-bold">Baroen Sudarman</span>. Lahir di Gorontalo awal tahun 1995. Menempuh pendidikan S1 bidang Software Engineering STMIK ICHSAN Gorontalo dan selesai pada tahun 2018.
          </p>
        </div>
        <a className="text-blue-500 text-xs" target={`_blank`} href={`https://drive.google.com/file/d/10Yu_o_8mEoozkvaTu3DRvOgCMwj7Sqgi/view?usp=sharing`}>Download profile</a>
      </div>
    </>
  );
}
