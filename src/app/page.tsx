'use client'

import Navbar from "@/components/home/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaPhone, FaRegEnvelope, FaHome } from "react-icons/fa";
import { useState } from "react";
import Carousel from "@/components/home/Carousel";

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
        <div className="grid grid-cols-1 text-white items-center justify-items-center w-4/5 lg:grid-cols-2">
          <p className="p-5">Lorem Ipsum</p>
          <Image src="/main.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-4xl p-5"
          />
          <Image src="/main.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-4xl p-5"
          />
          <p className="p-5">Lorem Ipsum</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 justify-items-center items-center bg-neutral-900">
        <p>LOREM IPSUM</p>
        <div>
          <p>Carousel</p>
        </div>
      </div>

      <Carousel />

      <div className="grid grid-cols-1 bg-black text-white h-2/3 lg:pl-20 lg:pr-20 lg:pt-10 items-center justify-items-center">
        <div className="grid grid-cols-3 w-fit text-3xl">
          <p className="">Home</p>
          <p className="">Galleria</p>
          <p className="">Chi Siamo</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 text-4xl w-fit">
          <FaInstagram className="p-1 border-2 rounded-full"></FaInstagram>
          <FaFacebook className="p-1 border-2 rounded-full"></FaFacebook>
        </div>
        <div className="grid grid-cols-1 w-1/2">
          <div className="grid grid-cols-2 w-fit">
            <FaPhone />
            <p className="font-bold underline text-2xl">+393761516404</p>
          </div>
          <div className="grid grid-cols-2 w-fit">
            <FaRegEnvelope />
            <p className="font-bold">angololab.41@gmail.com</p>
          </div>
          <div className="grid grid-cols-2 w-fit">
            <FaHome />
            <p className="font-bold">Via della Pendinella 7<br />06012 Città di Castello<br />Italia</p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-around w-fit justify-items-center items-center">
          <button className="font-bold border-2 bg-white p-5 text-black rounded-3xl w-fit">MOSTRA MAPPA</button>
          <button className="font-bold  border-2 bg-white p-5 text-black rounded-3xl w-fit">CONTATTI</button>
        </div>
      </div>
    </div>


  );
}
