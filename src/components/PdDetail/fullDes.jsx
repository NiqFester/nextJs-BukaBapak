export default function FullDesc({ product }) {
  const descriptionStuff = ["Kategori", "Brand", "Tipe Barang"];

  return (
    <div className="flex" id="fullDescORinformasiBarang">
      <div className="sticky top-[80px] z-20 text-xl p-0 h-12 w-[40%]">
        <p className="font-bold pb-2 border-b-2 w-[40%]">Informasi Barang</p>
      </div>
      <div>
        <div className="mb-8">
          <p className="font-bold">Kondisi Barang</p>
          <p className="w-12 py-1 mt-2 text-xs text-center text-white bg-purple-600">
            Baru
          </p>
        </div>
        <div className="my-8">
          <p className="mb-2 font-bold">Spesifikasi</p>
          {descriptionStuff.map((ar, i) => {
            return (
              <div className="flex my-4" key={i}>
                <p className="w-24 text-sm">{ar}</p>
                <p className="text-sm">
                  :{" "}
                  {ar === "Kategori"
                    ? product.category
                    : ar === "Brand"
                    ? product.brand
                    : product.tipe}
                </p>
              </div>
            );
          })}
        </div>
        <div className="my-8">
          <p className="mb-2 font-bold">Deskripsi</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
