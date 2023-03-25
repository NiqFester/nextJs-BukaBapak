import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function Mall() {
  //berapa kali render mall
  const arrForRender = [];
  for (let i = 0; i < 12; i++) {
    arrForRender.push("");
  }
  return (
    <>
      <div className="flex justify-between mx-8 my-4">
        <p className="font-bold text-2xl">Keliling mall tanpa lelah</p>
        <p className="text-base font-bold">
          100% Bogus * unOfficial Store * Never Return Guarantee
        </p>
      </div>
      <div
        className="grid grid-cols-4 mx-8 h-[380px] my-8 p-0 bg-blend-overlay"
        style={{
          backgroundImage:
            "url(/asset/bg/Firefox_Screenshot_2023-03-07T05-36-33.094Z.png)",
        }}
      >
        <div className="h-[380px] justify-center flex flex-col text-white bg-blend-overlay bg-[rgba(0,0,0,0.5)]">
          <div className="flex gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[20px] mt-1 fill-purple-400 w-[22px]"
              viewBox="0 0 448 512"
            >
              <path d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z" />
            </svg>
            <h1 className="text-lg text-center">MallBapak</h1>
          </div>
          <p className="text-lg text-center px-4 mt-4">
            Disini kamu bisa liat-liat dan bertanya-tanya tentang misteri
            kehidupan
          </p>
          <div className="bg-purple-600 w-[50%] mx-auto mt-4 -mb-5">
            <h5 className="text-white text-center my-2">
              Yuk, keliling dunia!
            </h5>
          </div>
        </div>
        <div className="col-span-3">
          <Splide
            aria-label="FlashDeal"
            options={{
              height: 400,
              type: "slide",
              perMove: 1,
              perPage: 4,
              pagination: false,
              classes: {
                arrow:
                  "splide__arrow !bg-white !p-[14px] !h-[40px] !w-[40px] !opacity-100 ",
              },
            }}
          >
            {arrForRender.map((pd, i) => {
              return (
                <SplideSlide key={i}>
                  <div className="flex justify-center">
                    <div className="block bg-white shadow-lg dark:bg-neutral-700 h-[380px] ">
                      <Image
                        className="w-[240px] z-1 h-[170px] m-0"
                        src="/asset/Firefox_Screenshot_2023-03-07T05-32-29.769Z.png"
                        width={300}
                        height={300}
                        alt="..."
                      />

                      <div className="-mt-20 rounded-lg  p-6">
                        <Image
                          className="sw-[215px] h-[130px] z-2"
                          src="/asset/Firefox_Screenshot_2023-03-07T05-31-05.420Z.png"
                          width={300}
                          height={300}
                          alt="..."
                        />
                      </div>
                      <h5 className="text-2xl text-center font-bold mt-8">
                        I Know Da Wae
                      </h5>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </>
  );
}
