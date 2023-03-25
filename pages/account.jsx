import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { LoginState } from "../src/CustomHook/LogContex";
import AccText from "../src/components/Acc/AccText";
import Kategori from "../src/components/kategori/kategori";
import { useRouter } from "next/router";
import AccEmail from "../src/components/Acc/AccEmail";
import MappedDiv from "../src/components/Mapped/mappedDiv";
import ProductForm from "../src/components/Acc/ProductForm";

export default function Account({ data }) {
  //ShortHand
  const router = useRouter();
  const { userName, setUserName } = useContext(LoginState);

  const currentAcc = useRef(null);

  //State
  const txtOption = ["Pengaturan", "Toko", "Tambah Produk", "Edit Produk"];
  const [onScreen, setOnScreen] = useState([true, false, false, false]);
  const usrProduct = useRef();
  const [usrPdId, setUsrPdId] = useState(0);
  const [accForm, setAcc] = useState({
    email: "",
    pass: "",
  });
  const [productForm, setProductForm] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 15.88,
    rating: 0.0,
    stock: 0,
    tipe: "",
    brand: "",
    category: "",
    images: [],
    thumbnail: "",
  });
  const [productForm2, setProductForm2] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 15.88,
    rating: 0.0,
    stock: 0,
    tipe: "",
    brand: "",
    category: "",
    images: [],
    thumbnail: "",
  });

  //Bagi siapapun yang punya motivasi untuk memperbaiki ini
  //Baik diriku di masa depan ataupun orang lain yang melihat ini
  //Tolong... ProductForm 1 dan 2 nya kebalik.

  //fungsi
  const handleDelete = async () => {
    if (userName === "admin") {
      console.log('Can"t');
      alert("Cant delete admin");
      return;
    }
    try {
      const response = await fetch("/api/email", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentAcc.current),
      });
      const data = await response.json();
      console.log(data.message);
      localStorage.removeItem("currentLoggedIn");
      setUserName("");
      router.push("/");
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...accForm,
          account: userName === "admin" ? "admin" : "user",
        }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/accStore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productForm),
      });
      const data = await response.json();
      console.log(data.message);
      router.reload();
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/accStore", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...productForm2,
          storeEmail: currentAcc.current.email,
        }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (e) {
      console.log("error", e);
    }
  };

  //Fallback
  if (!userName || !data) {
    return <div>Loading...</div>;
  }

  const { products, acc } = data;
  currentAcc.current =
    userName === "admin"
      ? acc.Admin[0]
      : acc.User.find((x) => x.email.split("@")[0] === userName);

  usrProduct.current = products.filter(
    (pd) => pd.storeEmail === currentAcc.current.email
  );

  return (
    <>
      <Kategori products={products} />
      <div className="flex m-3">
        <AccText
          txtOption={txtOption}
          onScreen={onScreen}
          setOnScreen={setOnScreen}
          setUsrPdId={setUsrPdId}
        />
        <AccEmail
          onScreen={onScreen}
          handleEmail={handleEmail}
          currentAcc={currentAcc.current}
          accForm={accForm}
          setAcc={setAcc}
          handleDelete={handleDelete}
        />
        <div
          className={`w-[80%] ml-2 ${
            onScreen[1] ? "block" : "hidden"
          } grid justify-start grid-flow-row grid-cols-4 gap-4 overflow-y-scroll h-[500px] px-4`}
        >
          {usrProduct.current.map((pd, i) => {
            return (
              <Link
                className="flex gap-2 "
                href={`/K/${pd.tipe}/${pd.category}/${pd.id}`}
                key={i}
              >
                <MappedDiv pd={pd} />
              </Link>
            );
          })}
        </div>
        <div className={`w-[80%] ${onScreen[2] ? "block" : "hidden"} `}>
          <ProductForm
            handleSubmit2={handleSubmit2}
            productForm2={productForm2}
            setProductForm2={setProductForm2}
            className={"grid grid-flow-row h-[500px] overflow-y-scroll"}
          />
        </div>
        <div
          className={`w-[80%] ${onScreen[3] ? "block" : "hidden"} ${
            usrPdId
              ? ""
              : "grid  justify-start grid-flow-row grid-cols-4 gap-4 overflow-y-scroll h-[500px] px-4"
          }`}
        >
          <ProductForm
            handleSubmit2={handleSubmit}
            productForm2={productForm}
            setProductForm2={setProductForm}
            className={`${
              usrPdId
                ? "grid grid-flow-row overflow-y-scroll h-[500px]"
                : "hidden"
            }`}
          />
          {usrProduct.current.map((pd, i) => {
            return (
              <button
                onClick={() => {
                  setUsrPdId(pd.id);
                  setProductForm({
                    ...pd,
                  });
                }}
                className={`${usrPdId ? "hidden" : "flex"} gap-2`}
                key={i}
              >
                <MappedDiv pd={pd} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { products } = await import("../data/product.json");
  const { Admin, User } = await import("../data/user.json");

  return {
    props: {
      data: {
        products,
        acc: {
          Admin,
          User,
        },
      },
    },
  };
};
