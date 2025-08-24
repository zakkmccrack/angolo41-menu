import Navbar from "@/components/home/navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-angolo-green h-screen w-full">
      <Navbar />
      <div className="w-full h-1/2 bg-[url('/main.png')] bg-cover bg-center flex items-center justify-center">
        <p className="bg-black/30 w-full h-full flex items-center justify-center text-white font-bold text-5xl">LOREM IPSUM</p>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-y-5 p-5 bg-neutral-900">
        <p className="text-2xl text-white col-span-3">Galleria</p>
        <p className="text-3xl text-white col-span-3">Angolo 41</p>
        <Image src="/main.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-2xl col-span-3"
        />
      </div>
      <div className="bg-black text-white items-center justify-items-center p-10">
        <div className="grid grid-cols-2 text-white items-center justify-items-center w-4/5">
          <p>Lorem Ipsum</p>
          <Image src="/main.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-2xl"
          />
          <Image src="/main.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-2xl"
          />
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center items-center bg-neutral-900">
        <p>LOREM IPSUM</p>
        <div>
          <p>Carousel</p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center items-center bg-black">
        <p>LOREM IPSUM</p>
        <div>
          <p>Carousel</p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center items-center bg-neutral-900">
        <p>LOREM IPSUM</p>
        <div>
          <p>Carousel</p>
        </div>
      </div>
    </div>


  );
}
