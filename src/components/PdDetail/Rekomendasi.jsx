import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import MappedDiv from "../Mapped/mappedDiv";

export default function Rekomendasi({ allProduct }) {
  const randomData = allProduct.slice(0, 10);

  return (
    <div id="rekomendasi" className="pt-2 my-10">
      <p className="text-2xl my-4 font-bold">Rekomendasi Untukmu</p>
      <Splide
        options={{
          perPage: 4,
          perMove: 1,
          pagination: false,
        }}
      >
        {randomData.map((pd, i) => (
          <SplideSlide key={i}>
            <Link
              href={`/K/${pd.tipe}/${pd.category}/${pd.id}`}
              className="flex justify-center "
            >
              <MappedDiv pd={pd} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
