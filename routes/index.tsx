import { Head, asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page for Baroen Sudarman</title>
        <meta name="description" content="Home Page for Baroen Sudarman" />
        <meta property="og:image" content={asset("/international.png")} />
        <meta property="og:image:width" content="1240" />
        <meta property="og:image:height" content="901" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home Page for Baroen Sudarman" />
        <meta property="og:description" content="Home Page for Baroen Sudarman" />
        <meta property="og:url" content="https://baroen.xyz/" />
        <meta property="og:site_name" content="baroen.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page for Baroen Sudarman" />
        <meta name="twitter:description" content="Home Page for Baroen Sudarman" />
        <meta name="twitter:image" content={asset("/international.png")} />
        <meta name="twitter:image:width" content="1240" />
        <meta name="twitter:image:height" content="901" />
        <link rel="canonical" href="https://baroen.xyz/"></link>
      </Head>
      <div class="container mx-auto p-4">
        <div class="flex flex-col lg:flex-row lg:justify-between items-center">
          <div>
            <h1 class="text-xl font-bold text-black leading-6">Home Page for Baroen Sudarman</h1>
            <p class="text-lg font-semibold text-black leading-6">Selamat🎉</p>
          </div>
          <div>
            <img
              src={asset("/baroen-international.jpg")}
              alt="Baroen international"
              class="w-24 h-auto"
            />
          </div>
        </div>

        <div>
          <p class="text-sm font-medium text-black leading-6">Halo nama saya Baroen, saat ini tinggal dan berkerja di Gorontalo. Saya seorang programmer komputer. Saya bekerja untuk perusahaan saya sendiri, <a href="https://baroen.space/" target="_blank" class="text-blue-500 hover:text-pink-500">Baroen Space.</a></p>
        </div>

        <h3 class="text-lg text-black leading-6 font-medium mt-4">Other pages of interest</h3>
        <div class="pl-4">
          <ul class="text-sm text-black list-disc">
            <li>Baroen <a href="/contact-information" class="text-blue-500 hover:text-pink-500">contact information</a></li>
            <li>I am an alumnus of <a href="https://pddikti.kemdikbud.go.id/detail-pt/8ceUias00Y6wlXeKi7TLtKfoF3pEbblp4nLqfrDiQ6pzx8UaeGaGohiHwlX2lcC5oLeH3w==" class="text-blue-500 hover:text-pink-500">Sekolah Tinggi Manajemen Informatika dan Komputer Ichsan Gorontalo</a>, in the <a href="https://pddikti.kemdikbud.go.id/detail-mahasiswa/3mjCVtxUzle2OyznpsLxZTnf3t7oI9Rw-MQOYyglrX1E8QciC1lPEmvUBs5Qt8Q9Wpyxow==" class="text-blue-500 hover:text-pink-500">Sistem Informasi.</a> {`(S.Kom. 2018).`}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
