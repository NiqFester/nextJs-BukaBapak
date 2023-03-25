import Image from "next/image";
export default function MappedDiv({ pd }) {
  function formatHarga(x) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(x);
  }
  const hargaAwal = formatHarga(pd.price * 15180);
  const hargaAkhir = formatHarga(
    (((100 - pd.discountPercentage) * pd.price) / 100) * 15180
  );
  return (
    <div className="block bg-white shadow-lg rounded-xl dark:bg-neutral-700">
      <Image
        className="rounded-t-lg w-[270px] h-[150px]"
        src={pd.thumbnail}
        width={300}
        height={300}
        alt="..."
      />
      <div className="p-6">
        <h5 className="p-0 font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-left h-4 mb-8 ">
          {pd.title}
        </h5>
        <div className="">
          <p className="text-left text-base font-bold text-neutral-600 dark:text-neutral-200 ">
            {hargaAwal}
          </p>
          <p className=" text-left font-bold text-smline-through text-neutral-300 dark:text-neutral-200">
            {hargaAkhir}
          </p>
        </div>
        <div className="">
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
            <p className="text-left ">{pd.rating}</p>
          </div>
          <p className="mt-2 text-xs text-left ">Nggak Tau Dimana</p>
        </div>
      </div>
    </div>
  );
}
