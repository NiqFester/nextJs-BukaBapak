import EmailForm from "../src/components/emailForm/EmailForm";
import Kategori from "../src/components/kategori/kategori";

export default function LoginPage({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Kategori products={data} />
      <EmailForm text="Register" />
    </>
  );
}

export async function getStaticProps() {
  const { products } = await import("../data/product.json");
  return {
    props: {
      data: products,
    },
  };
}
