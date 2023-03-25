import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import { useRouter } from "next/router";
import MappedDiv from "../Mapped/mappedDiv";

export default function CatS({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p> FallBack</p>;
  }
  const { product, pgDet } = data;
  return (
    <div className="mx-8">
      <div className="border p-6 w-[50%] mx-auto ">
        <h1 className="text-2xl font-bold">{pgDet[1]}</h1>
        <div className="">
          {pgDet[0]?.map((pg, i) => {
            return (
              <Link
                href={`/K/${pgDet[1]}/${pg}`}
                className="flex justify-between p-2"
                key={i}
              >
                <p className="capitalize  text-start text-lg">{pg}</p>
                <p className="font-bold">{">"}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <p className="text-2xl mx-8 my-4 font-bold">Lagi Populer</p>
      <Splide
        className="my-8"
        aria-label="populer"
        options={{
          type: "slide",
          gap: 10,
          padding: 20,
          perPage: 4,
          pagination: false,
          classes: {
            arrow:
              "splide__arrow !bg-white !p-[14px] !h-[40px] !w-[40px] !opacity-100 ",
          },
        }}
      >
        {product
          ?.filter((pd) => pd.rating >= 4.4)
          .map((pd, i) => {
            return (
              <SplideSlide className="flex justify-center " href="#" key={i}>
                <MappedDiv pd={pd} />
              </SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
}
