import Link from "next/link";
import MappedDiv from "../Mapped/mappedDiv";

export default function Tipe({ product, pgDet }) {
  return (
    <div className="grid grid-flow-col grid-cols-5 mb-12 border-t-2 mx-10 pt-2">
      <div className=" col-span-1">
        <p className="text-2xl font-bold mb-2">Filter</p>
        <p className="font-bold text-sm mb-4">Filter Terpopuler</p>
        <form className="flex flex-col border-b-2 pb-2">
          <div className="ml-4">
            <input
              className="h-[19px] w-[19px]"
              type="checkbox"
              name="rating"
            />
            <p className="inline ml-2 ">O 4.5 ke atas</p>
          </div>
        </form>
        <div className="border-b-2 pb-2 ml-2">
          <p className="font-bold my-2 -ml-2">Kategori Barang</p>
          <p className="text-sm ml-2">Semua Kategori</p>
          <p className="text-sm ml-2">{pgDet.tipe}</p>
        </div>
        <div className="border-b-2 pb-2 ml-2">
          <p className="font-bold my-2">{pgDet.tipe}</p>
          {pgDet?.category.map((pg, i) => {
            return (
              <p key={i} className="text-sm ml-2">
                {pg}
              </p>
            );
          })}
        </div>
      </div>
      <div className="grid grid-flow-row col-span-4">
        <div className="ml-4 mb-12 ">
          <button className="border p-2">Urutkan: Terlaris</button>
          <p className="inline ml-4"> 6 Barang</p>
        </div>
        <div className="grid justify-start ml-3 grid-flow-row grid-cols-4 gap-4">
          {product.map((pd, i) => {
            return (
              <Link
                className="flex gap-2 "
                href={`/K/${pd.tipe}/${pd.category}/${pd.id}`}
                key={i}
              >
                <MappedDiv pd={pd} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
