import React from 'react'
import BannerIcon from "../../assets/landingpage/bannerIcon.svg";
import CountdownTimer from '../../components/CountdownTimer'
import { Link } from 'react-router-dom';

const index = () => {
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
  return (
    <section class="bg-white">
        <div className="container mx-auto">
          <div class="bg-gradient-to-r from-blue-700 to-slate-200 lg:flex lg:w-full lg:shadow-md lg:rounded-xl">
            <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-2/3">
              <h2 class="text-2xl font-semibold text-white md:text-3xl">
                Judul Banner
              </h2>

              <p class="mt-4 text-white">
                Deskripsi banner Lorem, ipsum dolor.
              </p>
              <CountdownTimer targetDate={dateTimeAfterSevenDays} />

              <div class="flex mt-6 items-center gap-2">
              <p class="text-white">
              Yuk segera cek produk Skole supaya kamu tidak ketinggalan! 
              </p>
              <a
                href="#"
                className="flex items-center text-sm text-slate-200 capitalize hover:underline hover:text-white"
              >
                <span className="mx-1">Lihat Promo</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>

              {/* <Link to="/promo" className="text-sm w-1/2 md:w-auto font-medium bg-primary rounded-lg text-white px-2 py-2 duration-300 transition-colors focus:outline-none">Lihat Promo</Link> */}
              </div>
            </div>
            <div class="lg:w-1/3 py-6">
              <div class="h-64 bg-cover lg:h-full">
                <img src={BannerIcon} alt="Banner Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default index