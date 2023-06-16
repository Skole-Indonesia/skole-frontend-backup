import React from "react";
import Navbar from "../../../../components/layout/Navbar";
import Hero from "./Hero";
import About from "./About";
import Counselor from "./Counselor";
import Package from "./Package";
import Flow from "./Flow";
import Faq from "./Faq";
import Footer from "../../../../components/layout/Footer";

const index = () => {
  const title = (
    <span>
      Yuk Konseling dengan <br /> Konselor Berpengalaman
    </span>
  );

  return (
    <section className="consultation">
      <Navbar />
      <Hero
        title={title}
        description="Kamu sedang mengalami masalah? Atau ingin menceritakan sesuatu yang terpendam? Konsultasikan sesegera mungkin dengan Konselor terbaik dan terpercaya Skole Indonesia sekarang juga!"
        image=""
      />
      <About
        title={"Apa itu Konseling?"}
        description="Konseling adalah sesi konsultasi one-on-one antara dua orang yaitu peserta dan konselor dengan tujuan untuk mengatasi segala permasalahan yang dihadapi oleh peserta."
        image=""
      />
      <Counselor
        title={"Konselor di Skole Indonesia"}
        description="Konselor Skole Indonesia merupakan konselor berpengalaman di bidangnya. Kamu bisa melihat seluruh profil konselor yang ada melalui tombol di bawah ini."
        image=""
      />
      <Package
        title={"Pilihan Paket Konseling"}
        description="Paket konseling Skole Indonesia telah disesuaikan dengan masing-masing tingkatan kebutuhan untuk siapapun yang ingin berkonsultasi."
        image=""
      />
      <Flow title={"Alur Konseling Skole Indonesia"} description="Berikut adalah langkah-langkah bagaimana kamu bisa mendaftar hingga akhirnya mengikuti sesi konseling." image="" />
      <Faq title={"Pertanyaan Sering Ditanyakan"} description="Berikut adalah kumpulaan pertanyaan yang sering ditanyakan seputar konseling Skole Indonesia." image="" />
      <Footer />
    </section>
  );
};

export default index;
