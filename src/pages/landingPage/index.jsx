import React from "react";
import Navbar from "../../components/layout/Navbar";
import "./index.css";
import { Link } from "react-router-dom";
import HeroIcon from "../../assets/landingpage/hero.svg";
import Banner from "../../components/Banner";
import Swiper from "../../components/Swiper";
import BenefitCard from "../../components/BenefitCard";
import ProductCard from "../../components/ProductCard";
import ClassroomIcon from "../../assets/landingpage/classroomIcon.svg";
import LiveClassIcon from "../../assets/landingpage/liveClassIcon.svg";
import ConsultationIcon from "../../assets/landingpage/consultationIcon.svg";
import DiscussionIcon from "../../assets/landingpage/discussionIcon.svg";
import RankBoard from "../../assets/landingpage/rankBoardIcon.svg";
import BenefitIcon1 from "../../assets/landingpage/benefitIcon1.svg";
import BenefitIcon2 from "../../assets/landingpage/benefitIcon2.svg";
import BenefitIcon3 from "../../assets/landingpage/benefitIcon3.svg";
import BenefitIcon4 from "../../assets/landingpage/benefitIcon4.svg";
import BenefitIcon5 from "../../assets/landingpage/benefitIcon5.svg";
import BenefitIcon6 from "../../assets/landingpage/benefitIcon6.svg";
import PackageIcon from "../../assets/landingpage/packageIcon.svg";
import PackageIcons from "../../assets/landingpage/packageIcons.svg";
import Footer from "../../components/layout/Footer";
import Hero from "./home/Hero";

const index = () => {
  return (
    <>
      <Navbar 
      position={'fixed top-0'}
      />
      <Hero />
      <Banner />

      <section className="product">
        <div className="bg-white">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
              Yuk cobain produk keren dari Skole!
            </h2>
            <p className="max-w-4xl mt-2 mb-6 text-center text-gray-500">
              Pilih yang kamu suka dari beragam pilihan produk menarik Skole
              dibawah ini
            </p>
            <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-5">
              <ProductCard
                image={ClassroomIcon}
                title={"Classroom"}
                description={"Belajar secara terstruktur dan terarah serta mengasyikkan. Tidak hanya belajar, kamu juga bisa bermain loh. Tunggu apalagi? yuk cobain Classroom sekarang! 👇"}
                redirect={"classroom"}
              />
              <ProductCard
                image={LiveClassIcon}
                title={"Live Class"}
                description={"Kamu bisa belajar langsung dari mentor handal di LIve Class! Kelas ini diadakan satu bulan sekali. Jangan sampai ketinggalan dan pastikan kamu hadir ya."}
                redirect={"classroom"}
              />
              <ProductCard
                image={ConsultationIcon}
                title={"Consultation Session"}
                description={"Consulation Session adalah sesi konsultasi bersama praktisi dibidang psikologi. Kamu bisa berkonsultasi mengenai apapun! bakat, minat dan masa depanmu."}
                redirect={"classroom"}
              />
              <ProductCard
                image={DiscussionIcon}
                title={"Discussion"}
                description={"Pertanyaan tersulitmu akan terjawab disini! Tanyakan pertanyaanmu dan dapatkan feedback. Bagi yang menjawab akan mendapat poin. Menarik bukan?"}
                redirect={"classroom"}
              />
              <ProductCard
                image={RankBoard}
                title={"Rank Board"}
                description={"Berkompetisi bersama teman itu menyenangkan. Yuk lihat siapa peringkat teratas kali ini."}
                redirect={"classroom"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="benefit">
        <div className="bg-white">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
              Apa saja manfaat yang bisa kamu dapatkan di Skole?
            </h1>
            <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-3">
              <BenefitCard
                image={BenefitIcon1}
                title="Akses Pendidikan yang mudah"
                description="Kamu bisa belajar dari manapun dan kapanpun kamu mau."
              />
              <BenefitCard
                image={BenefitIcon2}
                title="Tracking Perkembangan Belajar"
                description="Belajar semakin teratur dan terarah karena bisa berkonsultasi dengan para guru."
              />
              <BenefitCard
                image={BenefitIcon3}
                title="Talent Mapping & Planning"
                description="Kamu juga bisa loh berkonsultasi seputar minat dan bakat serta masa depanmu!"
              />
              <BenefitCard
                image={BenefitIcon4}
                title="Live Class"
                description="Ada kelas yang dibawakan langsung oleh mentor handal loh. Pastikan kamu tidak ketinggalan ya."
              />
              <BenefitCard
                image={BenefitIcon5}
                title="Forum Diskusi"
                description="Pertanyaan tersulitmu akan bisa terjawab jika kamu membaginya pada Forum Diskusi."
              />
              <BenefitCard
                image={BenefitIcon6}
                title="Rank Board"
                description="Berkompetisi bersama teman itu seru loh! Yuk lihat peringkat teman-temanmu."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-2/5">
              <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
                Belajar Tanpa Ribet dengan Paket Hemat
              </h2>
              <p className="max-w-4xl mt-2 mb-6 text-gray-500">
                Jangan sampai ketinggalan! Ayo daftarkan dirimu sekarang juga!
              </p>
              <img src={PackageIcons} className="w-full mx-auto" alt="" />
            </div>

            <div className="container flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-3/5">
              <Swiper />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-center bg-cover h-[94vh] bg-cta">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
            Tunggu apalagi? Yuk mulai pembelajaran dengan Skole!
          </h2>
          <p className="max-w-4xl mt-4 text-center text-gray-500">
            Klik tombol dibawah ini untuk langsung login ke Skole Indonesia dan
            nikmati pengalaman belajar yang seru!
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default index;
