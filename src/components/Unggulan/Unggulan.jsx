import Link from "next/link";
import MappedDiv from "../Mapped/mappedDiv";
export default function Unggulan({ data }) {
  const unggulan = data.filter((pd) => {
    if (pd.rating >= 4.9) {
      return true;
    }
    return false;
  });
  return (
    <>
      <p className="text-2xl mx-8 my-4 font-bold">Produk Unggulan</p>
      <div className="flex gap-2 justify-start m-8">
        {unggulan.map((pd) => {
          return (
            <Link
              href={`/K/${pd.tipe}/${pd.category}/${pd.id}`}
              className="flex justify-center "
              key={pd.id}
            >
              <MappedDiv pd={pd} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
