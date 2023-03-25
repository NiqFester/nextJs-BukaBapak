import { useContext, useEffect, useState } from "react";
import { LoginState } from "../src/CustomHook/LogContex";
import CartList from "../src/components/Mapped/mappedCartList";
import Kategori from "../src/components/kategori/kategori";
export default function Cart({ data }) {
  const { userName } = useContext(LoginState);
  const [currentCart, setCurrentCart] = useState({ name: "", idProduct: [] });

  useEffect(() => {
    setCurrentCart(data.user.find((x) => x.name === userName));
  }, [setCurrentCart, data, userName]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleClick = (act, id, jumlahData) => {
    let newJumlah = act === "plus" ? jumlahData + 1 : jumlahData - 1;
    setCurrentCart((prev) => {
      const firstIdProduct = prev.idProduct.map((pd) => {
        if (pd.id === id) {
          return { ...pd, jumlah: newJumlah };
        }
        return pd;
      });
      const lastIdProduct = firstIdProduct.filter((x) => Boolean(x.jumlah));
      return {
        ...prev,
        idProduct: lastIdProduct,
      };
    });
  };

  const handleApply = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pd: { ...currentCart },
          act: ["MODIFY CART", userName],
        }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (e) {
      console.log("error", e);
    }
  };

  if (!currentCart) {
    return (
      <div className="pt-8 pb-2 -mt-8 bg-slate-100">
        <div className="w-[90vw] border mx-auto mb-8 bg-white h-[80vh]">
          <p className="text-center text-4xl italic mt-[30vh]">
            Yah... Kosong, Ayo di isi kantung belanjanya!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Kategori products={data.products} />
      <div className="pt-8 pb-2 -mt-8 bg-slate-100">
        <div className="w-[90vw] border mx-auto mb-8 bg-white">
          <ul className="flex flex-col gap-4 mx-[16%] my-10">
            {currentCart.idProduct.map((x, i) => {
              const pdDetail = data.products.find((pd) => pd.id === x.id);
              return (
                <CartList
                  key={i}
                  pd={x}
                  pdDetail={pdDetail}
                  handleClick={handleClick}
                />
              );
            })}
          </ul>
          <button
            onClick={handleApply}
            className="p-2 mx-[48%] text-white text-xl bg-purple-600 rounded-xl"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { user } = await import("../data/cart.json");
  const { products } = await import("../data/product.json");
  const data = { user, products };
  return {
    props: {
      data,
    },
  };
}
