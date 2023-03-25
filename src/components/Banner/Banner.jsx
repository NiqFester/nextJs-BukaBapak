import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Intersection } from "@splidejs/splide-extension-intersection";
import Image from "next/image";

export default function Banner() {
  const bannerList = [
    "/asset/banner/Firefox_Screenshot_2023-03-02T08-05-25.753Z.png",
    "/asset/banner/Firefox_Screenshot_2023-03-02T08-06-07.911Z.png",
    "/asset/banner/Firefox_Screenshot_2023-03-02T08-06-48.310Z.png",
    "/asset/banner/Firefox_Screenshot_2023-03-02T08-09-17.255Z.png",
    "/asset/banner/Firefox_Screenshot_2023-03-02T08-09-55.389Z.png",
  ];
  return (
    <div className="m-10">
      <Splide
        aria-label="Banner"
        options={{
          intersection: {
            inView: {
              autoplay: true,
            },
          },
          rewind: true,
          height: "200px",
          type: "loop",
          perPage: 2,
          focus: 0,
          gap: "15px",
          omitEnd: true,
          padding: 40,
          autoplay: true,
          interval: 5000,
          classes: {
            // Add classes for arrows.
            arrow:
              "splide__arrow !bg-white !p-[14px] !h-[40px] !w-[40px] !opacity-100 ",
            //arti tanda seru sebelum nama kelas itu biar bisa override kelas splide arrow
          },
          /* 
          Jadi penjelasan propertinya secara berurutan
          tinggi, tipe loop, gambar yang ditampilkan tiap slide, jarak, kecepatan pindah gambar,
          biar nggak ada akhirnya jadi misal slide terakhir pas pencet kanan 
          bisa langsung ke slide pertama, fokus slide biar titik kecilnya banyak, padding, 
          biar bisa geser sendiri, kecepatan geser otomatis, biar pas di teken di hp atau didatengin
          mouse bisa diem kaya patung, kelas tailwinds.
          */
        }}
        extensions={{ Intersection }}
      >
        {bannerList.map((pd, i) => (
          <SplideSlide key={i}>
            <Image
              src={pd}
              alt="..."
              className="w-full h-full "
              width={600}
              height={600}
            />
          </SplideSlide>
        ))}
        <SplideSlide>
          <Image
            src={"/asset/banner/7fo2fb.jpg"}
            alt="..."
            className="ml-36 w-[45%] h-full "
            width={500}
            height={756}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
