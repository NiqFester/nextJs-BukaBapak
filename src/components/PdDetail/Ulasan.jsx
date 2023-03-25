import { Grid } from "@splidejs/splide-extension-grid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Rating from "./Rating";

export default function Ulasan({ product, comment }) {
  return (
    <div className="flex mt-10 mb-24" id="ulasanBarang">
      <div className="sticky top-[80px] z-20 text-xl p-0 h-12 w-[40%]">
        <p className="font-bold pb-2 border-b-2 w-[10%]">Ulasan</p>
      </div>

      <div className="w-[60%]">
        <Rating product={product} />

        <p className="mb-4 text-lg font-bold">Daftar ulasan</p>

        <div className="flex gap-5" id="tag">
          <p className="p-2 px-4 text-sm border rounded-lg">Semua</p>
          <p className="p-2 px-4 text-sm border rounded-lg">Dengan Foto</p>
          <p className="p-2 px-4 text-sm border rounded-lg">Dengan Deskripsi</p>
        </div>

        <div className="flex gap-5 mb-8" id="rateTag">
          <div className="flex gap-2 px-3 py-2 text-sm border rounded-lg">
            <div id="star-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
            <p className="">1</p>
          </div>
          <div className="flex gap-2 px-3 py-2 text-sm border rounded-lg">
            <div id="star-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
            <p className="">2</p>
          </div>
          <div className="flex gap-2 px-3 py-2 text-sm border rounded-lg">
            <div id="star-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
            <p className="">3</p>
          </div>
          <div className="flex gap-2 px-3 py-2 text-sm border rounded-lg">
            <div id="star-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
            <p className="">4</p>
          </div>
          <div className="flex gap-2 px-3 py-2 text-sm border rounded-lg">
            <div id="star-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
            <p className="">5</p>
          </div>
        </div>
        <Splide
          options={{
            type: "loop",
            grid: {
              rows: 5,
              cols: 1,
              gap: {
                row: "1rem",
              },
            },
            classes: {
              arrow: "splide__arrow splide__arrow_first",
              pagination: "splide__pagination splide__pagination_first",
              page: "splide__pagination__page splide__pagination__page_first",
            },
          }}
          extensions={{ Grid }}
        >
          {comment.desc.map((pd, i) => {
            return (
              <SplideSlide id="Map" className="my-1" key={i}>
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-1 mb-2 ml-1">
                      <div id="star-fill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"20"}
                          height={"20"}
                          fill="currentColor"
                          className="fill-yellow-400"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                      </div>
                      <div id="star-fill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"20"}
                          height={"20"}
                          fill="currentColor"
                          className="fill-yellow-400"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                      </div>
                      <div id="star-fill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"20"}
                          height={"20"}
                          fill="currentColor"
                          className="fill-yellow-400"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                      </div>
                      <div id="star-fill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"20"}
                          height={"20"}
                          fill="currentColor"
                          className="fill-yellow-400"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                      </div>
                      <div id="star-fill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"20"}
                          height={"20"}
                          fill="currentColor"
                          className="fill-yellow-400"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                      </div>
                    </div>
                    <p className="text-lg font-bold">{pd}</p>
                    <p className="text-sm text-slate-500">
                      ditulis beberapa tahun lalu
                    </p>
                  </div>
                </div>

                <div className="flex justify-between pb-8 mt-4 border-b">
                  <div className="flex gap-3">
                    <div className=" h-[40px] w-[50px]">
                      <Image
                        src={"/asset/blank-profile-picture-973460__340.webp"}
                        width={340}
                        height={340}
                        alt="profle"
                      />
                    </div>
                    <p className="mt-[11px] text-sm">
                      {comment.Name[i > 48 ? 50 : i]}
                    </p>
                  </div>
                  <div className="flex mt-[11px]">
                    <div className="mt-[2px] mx-2">
                      <svg
                        fill="currentColor"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" />
                      </svg>
                    </div>
                    <p>0</p>
                    <div className="mt-[6px] mx-2">
                      <svg
                        fill="currentColor"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z" />
                      </svg>
                    </div>
                    <p>0</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
