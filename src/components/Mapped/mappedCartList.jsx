import Image from "next/image";
export default function CartList({ pd, pdDetail, handleClick }) {
  function formatHarga(x) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(x);
  }

  const hargaAkhir = formatHarga(
    (((100 - pdDetail.discountPercentage) * pdDetail.price) / 100) * 15180
  );
  const stok = pdDetail.stock - pd.jumlah;

  return (
    <div className="w-[60vw] border flex h-36">
      <div className="w-[18%] h-full ">
        <Image
          src={pdDetail.thumbnail}
          width={200}
          height={200}
          alt="img"
          className=" h-[99%] w-fit border-r "
        />
      </div>
      <div className="w-[82%] flex justify-between">
        <div id="text" className="flex flex-col gap-2">
          <p className="mb-2 text-xl">{pdDetail.title}</p>
          <p>{hargaAkhir}</p>
          <p>Stok : {stok}</p>
          <div id="rating" className="flex mt-2">
            <div id="star-fill" className="w-4 h-4 mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
            <p>{pdDetail.rating}</p>
          </div>
        </div>
        <div id="nomor" className="flex flex-col mr-3 justify-evenly">
          <button
            className="w-5 h-5"
            onClick={(e) => {
              handleClick("plus", pd.id, pd.jumlah);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </button>
          <p className="mx-auto my-2">{pd.jumlah}</p>
          <button
            onClick={(e) => {
              handleClick("min", pd.id, pd.jumlah);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
