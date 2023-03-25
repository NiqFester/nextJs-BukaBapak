import { useRouter } from "next/router";
import Kategori from "../../../src/components/kategori/kategori";
import Tipe from "../../../src/components/TipePD/Tipe";

const Categ = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p> Loading...</p>;
  }
  const { product, pgDet, allProduct } = data;
  return (
    <>
      <Kategori products={allProduct} />
      <p className="font-bold text-4xl capitalize ml-10 mt-5">{pgDet.id}</p>
      <Tipe product={product} pgDet={pgDet} />
    </>
  );
};

export async function getStaticPaths() {
  const { products } = await import("../../../data/product.json");
  const allPath = products.map((pd) => {
    return {
      params: {
        id: pd.category.toString(),
        tipe: pd.tipe,
      },
    };
  });
  return {
    paths: allPath,
    fallback: true,
  };
}

export const getStaticProps = async (ctx) => {
  const id = ctx?.params.id;
  const tipe = ctx?.params.tipe;
  const { products } = await import("../../../data/product.json");
  const flags = new Set();
  const pgCat = [];
  products
    .filter((pd) => {
      return pd.tipe === tipe;
    })
    .map((pd) => {
      if (!flags.has(pd.category)) {
        flags.add(pd.category);
        pgCat.push(pd.category);
      }
    });

  const pgDet = { tipe: tipe, category: pgCat, id };
  const data = {
    product: products.filter((ev) => ev.category === id),
    pgDet: pgDet,
    allProduct: products,
  };

  return {
    props: {
      data: data,
    },
  };
};

export default Categ;
