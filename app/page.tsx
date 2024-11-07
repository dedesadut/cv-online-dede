'use client';
import FavColor from "./components/favColor";
import Galery from "./components/galery";
import Hero from "./components/hero";
import Informasi from "./components/informasi";
import ContactForm from "./components/quiz";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import Skill from "./components/skill";
import "./insho-style.css";
import { useState } from "react";
import Color from "./components/Color";

export default function MyApp(){
  const [warna, setWarna] = useState("light"); // Menambahkan state untuk warna
  return(
    <section
    className={`min-h-screen p-4 transition-colors duration-300 ${
      warna === "dark"
        ? "bg-black text-white"
        : warna === "light"
        ? "bg-white text-black"
        : "bg-green-300 text-gray-900"
    }`}
    >
      <Hero/>
      <RiwayatPendidikan/>
    <RiwayatPekerjaan/>
    <Skill/>
    <Informasi/>
    <Galery/>
    
    <FavColor/>
  
    <ContactForm/>
    <Color setWarna={setWarna} />
    </section>
  );
}