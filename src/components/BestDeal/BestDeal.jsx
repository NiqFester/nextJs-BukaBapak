import Image from "next/image";
import Link from "next/link";

export default function BestDeal({ data }) {
  function formatHarga(x) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(x);
  }

  const stok = data.filter((pd) => {
    if (pd.stock <= 40) {
      return true;
    }
    return false;
  });

  return (
    <>
      <p className="text-2xl mx-8 my-4 font-bold">
        Ayo Dibeli! Sebelum Stok Habis
      </p>
      <div className="flex gap-2 justify-start m-8">
        {stok.splice(0, 5).map((pd) => {
          return (
            <Link
              href={`/K/${pd.tipe}/${pd.category}/${pd.id}`}
              className="flex justify-center "
              key={pd.id}
            >
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 h-[350px] ">
                <Image
                  className="rounded-t-lg w-[215px] h-[130px]"
                  src={pd.thumbnail}
                  width={300}
                  height={300}
                  alt="..."
                />

                <div className="p-6">
                  <h5 className="capitalize font-bold leading-tight text-neutral-800 dark:text-neutral-50 p-0 h-14">
                    {pd.title}
                  </h5>
                  <p className="text-lg text-neutral-600 font-bold dark:text-neutral-200 ">
                    {formatHarga(pd.price * 15180)}
                  </p>
                  <p className="text-base mb-6 line-through text-neutral-300 font-bold dark:text-neutral-200">
                    {formatHarga(
                      (((100 - pd.discountPercentage) * pd.price) / 100) * 15180
                    )}
                  </p>
                  <div className="flex">
                    <div id="star-fill">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="fill-yellow-400 w-4 h-4 mt-[2px] mr-2"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                      </svg>
                    </div>
                    <p>
                      {pd.rating} &emsp; Tersisa {pd.stock}
                    </p>
                  </div>
                  <p className="text-sm mt-1">Nggak tau dijual dimana</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
