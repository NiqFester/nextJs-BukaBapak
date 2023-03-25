import Banner from "../src/components/Banner/Banner";
import IconMenu from "../src/components/Menu/Menu";
import FlashDeal from "../src/components/FlashDealBanner/FlashDealBanner";
import Mall from "../src/components/Mall/Mall";
import Unggulan from "../src/components/Unggulan/Unggulan";
import Popular from "../src/components/Popular/Popular";
import BestDeal from "../src/components/BestDeal/BestDeal";
import Kategori from "../src/components/kategori/kategori";

export default function Home({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
      <div className="flex justify-between mx-8 my-4 border-t-4 pt-12 ">
        <p className="font-bold text-2xl">Pencarian Populer</p>
        <p className="text-sm font-bold text-blue-300">Lihat Semua</p>
      </div>
      <div className="flex gap-4 m-8">
        <button className="border border-slate-300 px-2 py-1">Miaw</button>
        <button className="border border-slate-300 px-2 py-1">asdaeek</button>
        <button className="border border-slate-300 px-2 py-1">Pacar</button>
        <button className="border border-slate-300 px-2 py-1">
          Pendamping Hidup
        </button>
        <button className="border border-slate-300 px-2 py-1">Teman</button>
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
