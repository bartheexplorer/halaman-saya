import { asset, Head } from "$fresh/runtime.ts";

export default function ContactInformation() {
  return (
    <>
      <Head>
        <title>Contact Information for Baroen Sudarman</title>
        <meta name="description" content="Contact Information for Baroen Sudarman" />
        <meta property="og:image" content={asset("/international.png")} />
        <meta property="og:image:width" content="1240" />
        <meta property="og:image:height" content="901" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Information for Baroen Sudarman" />
        <meta property="og:description" content="Contact Information for Baroen Sudarman" />
        <meta property="og:url" content="https://baroen.xyz/" />
        <meta property="og:site_name" content="baroen.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Information for Baroen Sudarman" />
        <meta name="twitter:description" content="Contact Information for Baroen Sudarman" />
        <meta name="twitter:image" content={asset("/international.png")} />
        <meta name="twitter:image:width" content="1240" />
        <meta name="twitter:image:height" content="901" />
        <link rel="canonical" href="https://baroen.xyz/"></link>
      </Head>
      <div class="container mx-auto p-4">
        <div class="flex flex-col lg:flex-row lg:justify-between items-center">
          <div>
            <h1 class="text-xl font-bold text-black leading-6">Contact Information for Baroen Sudarman</h1>
            <p class="text-lg font-semibold text-black leading-6">Selamat🎉</p>
          </div>
          <div>
            <img
              src={asset("/baroen-s-international.png")}
              alt="Baroen S. international"
              class="w-40 h-auto rounded-xl shadow bg-center"
            />
          </div>
        </div>
        <div>
          <div class="text-sm text-black font-medium">{`+6282187617384 (Work)`}</div>
        </div>
        <h3 class="text-lg text-black leading-6 font-medium mt-4">E-Mail</h3>
        <div class="text-sm text-black font-medium">baroensu@gmail.com</div>

        <h3 class="text-lg text-black leading-6 font-medium mt-4">Home Page</h3>
        <div class="text-sm text-black font-medium">
          <a href="/" class="text-blue-500 hover:text-pink-500">https://baroen.xyz</a>
        </div>
      </div>
    </>
  );
}
