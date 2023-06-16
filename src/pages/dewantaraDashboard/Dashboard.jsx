import React from "react";
import Navbar from "../../components/layout/Navbar";
import DewantaraSidebar from "../../components/layout/DewantaraSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar position={"relative"} />
      <div className="h-screen flex overflow-hidden">
        <DewantaraSidebar />
        <div className="container flex-1 overflow-auto">
          <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                Halo, selamat datang <br />
                Dewantara Muda
              </h1>

              <p className="mt-4 text-gray-500 xl:mt-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptates sed, minima autem repellat laudantium perspiciatis
                recusandae necessitatibus perferendis in iste velit sint, dicta
                quos nesciunt deserunt molestiae delectus magni. Autem eum
                accusantium nulla a suscipit. Soluta quam vel sunt pariatur
                repellat in eum ducimus, aliquam architecto reprehenderit, atque
                delectus!
              </p>
              <p className="mt-4 text-gray-500 xl:mt-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi voluptatibus maxime nobis fugiat eum harum veniam
                cupiditate provident cum delectus illo officia, ab qui
                accusantium nihil sit ut. Porro omnis nobis quam dolores ad
                ipsum laborum doloribus maxime ipsa excepturi, expedita pariatur
                numquam laboriosam dicta voluptates sed sequi et nisi optio,
                illum non molestiae delectus ducimus animi. Enim magnam rerum,
                soluta, dicta quibusdam modi deserunt earum quod sed rem ipsum
                eos atque distinctio aperiam reiciendis voluptate. Sed illo qui
                porro. Laborum repellendus unde neque, qui repellat quidem
                debitis totam quae cupiditate ea minima facilis officia. Itaque
                praesentium eveniet earum fugiat!
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
