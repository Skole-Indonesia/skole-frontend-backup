import React from "react";
import { Link } from "react-router-dom";
import HeroIcon from "../../../assets/landingpage/hero.svg";
import './Home.css'

const Hero = () => {
  return (
    <section className="mt-6 w-full bg-center bg-cover h-[140vh] bg-hero">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-3/5">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Wujudkan Mimpimu Bersama <br /> Skole Indonesia
              </h1>

              <p className="mt-3 mb-6 text-white">
                Di Skole, kamu bisa belajar sambil bermain loh. Seru bukan? Yuk
                kita mulai sekarang!
              </p>
              <Link className="text-sm w-1/2 md:w-auto font-medium bg-slate-100 rounded-lg hover:bg-white text-primary px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                Let's Go!
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={HeroIcon}
              alt="Skole Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
