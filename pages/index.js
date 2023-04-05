import Head from "next/head";
import Image from "next/image";
import { MainTitle } from "@/components/atoms";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>WebApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/herramienta-de-recorte-white.png" />
      </Head>
      <main>
        <div className="px-10 min-h-screen w-full max-w-1200 mx-auto my-3 md:px-0 bg-gray-900 font-mono  max-w-2xl">
          <h1 className="text-white font-extrabold text-4xl pt-4 text-center">
            Hola mundo
          </h1>
          <MainTitle
            titleleft="Portafolio"
            titleright=" con Next js y TailwindCss"
            descripcion="Mockup de aplicación web para recorte de imágenes por lotes"
          />
          <h2 className="text-center">Mi nombre es Jean Carlo</h2>
          <div class="flex justify-center ...">
            <div className="mx-10 bg-red-400 p-2">01</div>
            <div className="mx-10 bg-red-400 p-2">02</div>
            <div className="mx-10 bg-red-400 p-2">03</div>
          </div>
          <div class="flex justify-between ...">
            <div className="bg-red-400 p-2">01</div>
            <div>02</div>
            <div>03</div>
          </div>
        </div>
      </main>
    </>
  );
}
