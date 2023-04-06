import Head from "next/head";
import Image from "next/image";
import { MainTitle, Card } from "@/components/atoms";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Recorte de imágenes</title>
        <meta name="description" content="Generado por nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/herramienta-de-recorte-white.png" />
      </Head> */}
      {/* <main> */}
      <div className="text-white px-10 min-h-screen w-full max-w-5xl mx-auto my-3 md:px-0 bg-gray-900 font-mono text-center max-w-2xl">
        <h1 className="text-white font-extrabold text-4xl pt-4 text-center">
          Hola mundo
        </h1>
        <MainTitle
          titleleft="Portafolio"
          titleright=" con Next js y TailwindCss"
          descripcion="Mockup de aplicación web para recorte de imágenes por lotes"
        />
        <h2 className="text-center">Mi nombre es Jean Carlo</h2>
        <div className="">
          <span>y con </span>
          <span className="underline decoration-sky-600 hover:decoration-blue-400">
            Python.
          </span>
        </div>
        <div>
          {" "}
          <h1 className="pt-2 text-2xl font-bold">
            <span className="text-gray-300">h</span>
            <span className="text-yellow-500">1</span>
          </h1>
        </div>

        <div className="my-5 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
            <Card photo="https://picsum.photos/800/600" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
            <Card photo="https://picsum.photos/800/600" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
            <Card photo="https://picsum.photos/800/600" />
          </div>
        </div>
      </div>
      {/* </main> */}
    </>
  );
}
