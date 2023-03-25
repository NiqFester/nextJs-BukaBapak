import ShortDesc from "../../../../src/components/PdDetail/shortDes";
import FullDesc from "../../../../src/components/PdDetail/fullDes";
import Ulasan from "../../../../src/components/PdDetail/Ulasan";
import Rekomendasi from "../../../../src/components/PdDetail/Rekomendasi";
import Kategori from "../../../../src/components/kategori/kategori";

function shuffleArray(data) {
  let array = data;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function ItemPage({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { product, comment, allProduct } = data;
  // useEffect(() => {
  //   if (!isVisible) {
  //     console.log("fire");
  //   }
  // }, [isVisible]);

  return (
    <>
      <Kategori products={allProduct} />
      <div className="mx-20">
        <ShortDesc product={product} />
        <FullDesc product={product} />
        <Ulasan product={product} comment={comment} />
        <Rekomendasi allProduct={allProduct} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { products } = await import("../../../../data/product.json");
  const allPath = products.map((pd) => {
    return {
      params: {
        id: pd.category,
        tipe: pd.tipe,
        item: pd.id.toString(),
      },
    };
  });

  return {
    paths: allPath,
    fallback: true,
  };
}

export const getStaticProps = async (ctx) => {
  const id = ctx?.params.item;
  const { products, comment } = await import("../../../../data/product.json");
  const data = {
    allProduct: shuffleArray(products),
    product: products.find((pd) => pd.id.toString() === id),
    comment: comment,
  };
  return {
    props: {
      data: data,
    },
  };
};
