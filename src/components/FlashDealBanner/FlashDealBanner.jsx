import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import MappedDiv from "../Mapped/mappedDiv";

export default function FlashDeal({ data }) {
  return (
    <div className=" grid grid-cols-4 gap-4 w-full h-[70vh] bg-gradient-to-tr from-white to-slate-300 my-8 px-8 pt-10">
      <div className="grid grid-rows-5 ">
        <div className=" grid grid-cols-5 content-center ">
          <div className="bg-white rounded-3xl w-[50px] h-[50px] ml-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[70%] w-[70%] fill-yellow-300 ml-2 mt-2"
              viewBox="0 0 384 512"
            >
              <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
            </svg>
          </div>
          <div className="col-span-4 mt-3 text-2xl font-bold ml-3 ">
            Flash Sale
          </div>
        </div>
        <div className=" text-slate-600 text-xl ml-2 mt-6 ">
          {" "}
          Berakhir dalam 03:03:03
        </div>
        <div className="capitalize text-2xl ml-2 font-bold ">
          {" "}
          Diskon tiap hari sampai 70%
        </div>
        <div className="ml-2 text-sm">
          {" "}
          Mau nikmatin <p className="inline font-bold">Flash Sale?</p>
          <p>Download dulu Aplikasi BukaBapak</p>
        </div>
        <div className=" bg-purple-400 h-[40px] w-[60%] rounded -mt-6 ml-2 text-white font-bold text-center pt-2">
          {" "}
          Mau download dong{" "}
        </div>
      </div>
      <div className="col-span-3 content-center pt-4">
        <Splide
          aria-label="FlashDeal"
          options={{
            height: 400,
            type: "slide",
            gap: 10,
            padding: 20,
            perPage: 4,
            pagination: false,
            classes: {
              arrow:
                "splide__arrow !bg-white !p-[14px] !h-[40px] !w-[40px] !opacity-100 ",
            },
          }}
        >
          {data?.slice(0, 10).map((pd, i) => {
            return (
              <SplideSlide key={i}>
                <Link href={`/K/${pd.tipe}/${pd.category}/${pd.id}`}>
                  <MappedDiv pd={pd} />
                  <div className="mb-6 h-2 mt-2 w-[90%] mx-2 bg-slate-400 dark:bg-neutral-600 rounded-lg">
                    <div className="h-2 bg-gradient-to-r from-purple-400 to bg-orange-400 w-[80%] rounded-lg"></div>
                  </div>
                  <div className="h-2 max-w-sm -mt-4 ml-2">Tersisa 2</div>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
