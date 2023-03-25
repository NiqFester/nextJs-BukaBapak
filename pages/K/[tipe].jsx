import CatS from "../../src/components/CatS/CatS";
import Home from "../../src/components/kategori/kategori";

const Kategori = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Home products={data.allProduct} />
      <CatS data={data} />
    </div>
  );
};

export async function getStaticPaths() {
  const { products } = await import("../../data/product.json");
  const allPath = products.map((pd) => {
    return {
      params: {
        id: pd.category,
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
  const id = ctx?.params.tipe;
  const { products } = await import("../../data/product.json");

  const flags = new Set();
  const pgCat = [];
  products
    .filter((pd) => {
      return pd.tipe === id;
    })
    .map((pd) => {
      if (!flags.has(pd.category)) {
        flags.add(pd.category);
        pgCat.push(pd.category);
      }
    });

  console.log(pgCat);
  const data = {
    allProduct: products,
    product: products.filter((ev) => ev.tipe === id),
    pgDet: [pgCat, id],
  };
  return {
    props: {
      data: data,
    },
  };
};

export default Kategori;
