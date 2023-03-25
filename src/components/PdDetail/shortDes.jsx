import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useContext, useEffect, useRef } from "react";
import { LoginState } from "../../CustomHook/LogContex";
function formatHarga(x) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(x);
}

export default function ShortDesc({ product }) {
  const { userName } = useContext(LoginState);

  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  function handleNope() {
    alert("NOPE, Nggak Bisa");
  }
  async function handleCart() {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pd: { id: product.id, jumlah: 1 },
          act: ["ADD CART", userName],
        }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (e) {
      console.log("error", e);
    }
  }

  const hargaAwal = formatHarga(product.price * 15180);
  const hargaAkhir = formatHarga(
    (((100 - product.discountPercentage) * product.price) / 100) * 15180
  );

  return (
    <div className="flex" id="shortDesc">
      <div id="image" className="h-[550px] w-[450px] ">
        <Splide
          className="my-2 rounded-lg"
          ref={(slider) => (slider2.current = slider)}
          options={{
            type: "fade",
            rewind: true,
            height: 350,
            pagination: false,
            arrows: false,
          }}
        >
          {product.images.map((pd, i) => {
            return (
              <SplideSlide key={i}>
                <Image
                  className="object-fill w-full h-full"
                  src={pd}
                  alt="Image"
                  width={700}
                  height={700}
                />
              </SplideSlide>
            );
          })}
        </Splide>
        <Splide
          ref={(slider) => (slider1.current = slider)}
          options={{
            type: "loop",
            fixedWidth: 100,
            fixedHeight: 60,
            gap: 10,
            rewind: true,
            arrows: false,
            pagination: false,
            focus: "center",
            autoplay: true,
            interval: 5000,
            isNavigation: true,
            breakpoints: {
              600: {
                fixedWidth: 60,
                fixedHeight: 44,
              },
            },
          }}
        >
          {product.images.map((pd, i) => {
            return (
              <SplideSlide key={i}>
                <Image
                  className="object-cover w-full h-full"
                  src={pd}
                  alt="Image"
                  width={700}
                  height={700}
                />
              </SplideSlide>
            );
          })}
        </Splide>
        <div id="favorit" className="flex my-6">
          <div className="flex flex-1 justify-center" onClick={handleNope}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] mr-2 fill-purple-600"
              viewBox="0 0 520 520"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
            <p className=" text-center border-r ">Favoritkan</p>
          </div>
          <div className="flex flex-1 justify-center" onClick={handleNope}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] mr-2 fill-purple-600"
              viewBox="0 0 576 512"
            >
              <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
            </svg>
            <p className="text-center">Bagikan</p>
          </div>
        </div>
      </div>
      <div id="pdDesc" className="ml-4 w-full h-[550px]">
        <div id="TitleRatePrice" className="w-full pb-2 border-b ">
          <p className="my-2 text-3xl">{product.title}</p>
          <div className="flex">
            <div id="star-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="fill-yellow-400 w-4 h-4 mt-2 mr-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
            <p className="my-2 text-sm"> {product.rating}</p>
          </div>
          <div className="my-8">
            <p className="text-sm line-through text-slate-400">{hargaAwal}</p>
            <p className="text-xl font-bold text-purple-600">{hargaAkhir}</p>
          </div>
        </div>
        <div
          id="Pengiriman"
          className="grid grid-flow-col grid-cols-4 pb-8 mt-8 border-b mb-7"
        >
          <p className="font-bold">Pengiriman</p>
          <div className="grid col-span-3 grid-rows-3">
            <div className="grid grid-cols-3">
              <p className="text-xs text-slate-400 ">Lokasi Pelapak</p>
              <p className="col-span-2 text-xs text-slate-400">
                Tujuan Pengiriman
              </p>
            </div>
            <div className="grid grid-cols-3 -mt-4">
              <p className="text-sm">Planet Bekasi</p>
              <p className="text-sm">Pluto</p>
              <p className="text-xs underline">Ubah Alamat</p>
            </div>
            <div className="grid grid-flow-col p-4 -mt-5 border">
              <p className="text-sm">O T&J Reg</p>
              <p className="text-sm">2-4 tahun</p>
              <p className="text-sm">Rp. 13.0000</p>
            </div>
          </div>
        </div>
        <div id="button" className="grid grid-cols-6 gap-8 mt-2 ">
          <button
            onClick={handleNope}
            className="p-2 font-bold text-white bg-purple-600 rounded-lg flex justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[20px] h-[20px] fill-white"
            >
              <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            <p>Chat</p>
          </button>
          <button
            onClick={handleCart}
            className="col-span-2 p-2 font-bold text-white bg-purple-600 rounded-lg flex justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-[20px] h-[20px] fill-white"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <p>Masukan Keranjang</p>
          </button>
          <button
            onClick={handleNope}
            className="col-span-3 p-2 font-bold text-white bg-purple-600 rounded-lg flex justify-center gap-2"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
