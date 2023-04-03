import Banner from "../src/components/Banner/Banner";
import IconMenu from "../src/components/Menu/Menu";
import FlashDeal from "../src/components/FlashDealBanner/FlashDealBanner";
import Mall from "../src/components/Mall/Mall";
import Unggulan from "../src/components/Unggulan/Unggulan";
import Popular from "../src/components/Popular/Popular";
import BestDeal from "../src/components/BestDeal/BestDeal";
import Kategori from "../src/components/kategori/kategori";
import { useEffect, useState } from "react";

export default function Home({ data }) {
  const [first, setFirst] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("notFirstTime")) {
      setFirst(false);
    }
  }, [setFirst]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="lg:block sm:hidden">
        <Kategori products={data} />
        <Banner />
        <IconMenu />
        <div className="bg-gradient-to-r from-red-700 to-purple-900 w-[90vw] h-36 mx-auto relative my-8">
          <button className="border text-white font-bold rounded text-center absolute right-[80px] bottom-[50px] px-5 py-2 text-lg">
            Ambil Tahun Depan {">"}
          </button>
        </div>
        <FlashDeal data={data} />
        <Mall />
        <Popular />
        <Unggulan data={data} />
        <BestDeal data={data} />
        <div className="flex justify-between pt-12 mx-8 my-4 border-t-4 ">
          <p className="text-2xl font-bold">Pencarian Populer</p>
          <p className="text-sm font-bold text-blue-300">Lihat Semua</p>
        </div>
        <div className="flex gap-4 m-8">
          <button className="px-2 py-1 border border-slate-300">Miaw</button>
          <button className="px-2 py-1 border border-slate-300">asdaeek</button>
          <button className="px-2 py-1 border border-slate-300">Pacar</button>
          <button className="px-2 py-1 border border-slate-300">
            Pendamping Hidup
          </button>
          <button className="px-2 py-1 border border-slate-300">Teman</button>
        </div>
      </div>
      <div className="sm:block lg:hidden">
        <p className="text-center mt-[50vh] text-4xl">
          {" "}
          Maaf tapi Web ini hanya bisa dilihat di Pc
        </p>
      </div>
      <div className="fixed top-0 z-50 backdrop-brightness-50 h-[100vh] w-[100vw] py-36" style={{display: first?'block':'none'}}>
        <div className="mx-auto bg-white rounded-md w-[40vw] flex flex-col p-10 relative">
        <button className="absolute px-[6px] font-bold text-white bg-purple-600 rounded-full top-4 right-10"
        onClick={()=>{
          setFirst(false)
          localStorage.setItem("notFirstTime",true)
        }}>X</button>

          <p className="text-2xl font-bold text-center">Perhatian!</p>
          <br />
          <p className="text-lg text-justify">
            Hal-hal yang berkaitan dengan memodifikasi data tidak akan bekerja.
            Jika Anda benar benar ingin mencobanya maka saya sarankan untuk
            clone project ini. API yang saya gunakan hanya merubah data lokal
          </p>
          <br />
          <p className="text-lg text-justify">
            Login Dengan 
          </p>
          <p className="text-lg text-justify">
            Email: admin@admin
          </p> 
          <p className="text-lg text-justify">
Password : admin 
          </p> 
          <p className="text-lg text-justify">
            Untuk menikmati semua fitur yang ada.
          </p> 
          </div>
      </div>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { products } = await import("../data/product.json");
  return {
    props: {
      data: products,
    },
  };
}
