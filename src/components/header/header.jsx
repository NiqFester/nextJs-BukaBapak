import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Search from "../search/search";
import { LoginState } from "../../CustomHook/LogContex";
import { CartState } from "../../CustomHook/CartContex";
import data from "../../../data/cart.json";

function NavHead() {
  const { userName, setUserName } = useContext(LoginState);
  const [showUN, setShowUN] = useState(false);
  const { jumlahItem, setJumlahItem } = useContext(CartState);

  useEffect(() => {
    if (localStorage.getItem("currentLoggedIn")) {
      setUserName(localStorage.getItem("currentLoggedIn"));
      setJumlahItem(
        data.user.find(
          (x) => x.name === localStorage.getItem("currentLoggedIn")
        ).idProduct.length
      );
    }
  }, [setUserName, setJumlahItem, userName]);

  let searchList = [
    "Elektronik",
    "Fashion",
    "Sembako",
    "Dekorasi",
    "SmartPhone",
    "Laptop",
    "Parfum",
    "Skin Care",
  ];

  const [sIndex, setSIndex] = useState(0);

  setTimeout(() => {
    setSIndex(sIndex + 1 >= searchList.length ? 0 : sIndex + 1);
  }, 10000);

  return (
    <div>
      <div
        id="header"
        className="border-b fixed z-20 top-0 bg-white w-full sm:h-16 lg:h-[70px]"
      >
        <div className="flex p-4 m-0 mb-3 h-14 lg:gap-8 sm:gap-1 lg:justify-none sm:justify-between">
          <div id="webName" className="flex lg:mt-2 lg:ml-8 sm:ml-2 sm:mt-0">
            <Image
              src="/asset/icon/letter-b.png"
              alt="B"
              height={100}
              width={100}
              className="lg:w-6 lg:h-6 sm:w-8 sm:h-8"
            />
            <Link href="/" className="ml-2 lg:block sm:hidden">
              BukaBapak
            </Link>
          </div>
          <Search display={searchList[sIndex]} />
          <button
            className="mt-2 lg:block hover:text-blue-500 sm:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#tipe-brng"
            aria-expanded="false"
            aria-controls="tipe-brng"
          >
            Kategori
          </button>
          <button className="mt-2 hover:text-blue-500 mr-[280px] lg:block sm:hidden">
            Produk Virtual
          </button>

          <div
            id="logins"
            className={` pt-1 mt-0  border-l h-10 ${
              userName ? "hidden" : "lg:flex"
            } `}
          >
            <Link className="mt-1 ml-8 " href="/register">
              Register
            </Link>
            <Link className="mt-1 ml-8 " href="/login">
              Login
            </Link>
          </div>

          <div
            className={`mt-0  border-l h-10 ml-[30px] z-50 sm:hidden relative ${
              userName ? "lg:flex" : "hidden"
            } `}
            onMouseEnter={() => {
              setShowUN(true);
            }}
            onMouseLeave={() => {
              setShowUN(false);
            }}
          >
            <p
              className={` text-sm text-white right-10 bg-purple-600 capitalize p-2 miaw rounded-lg top-10 ${
                showUN ? "absolute" : "hidden"
              }`}
            >
              {" "}
              {userName}
            </p>
            <button
              className="flex ml-4 "
              data-te-collapse-init
              data-te-target="#account"
              aria-expanded="false"
              aria-controls="account"
            >
              <Image
                src={"/asset/blank-profile-picture-973460__340.webp"}
                height={40}
                width={40}
                alt="profpic"
                className="rounded-[170px] "
              />
            </button>
            <Link
              href={"/cart"}
              className="relative w-8 h-8 p-2 mt-1 ml-4 bg-purple-600 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-full h-full fill-white"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <p className="absolute pt-[2px] pr-[2px] z-50 text-center text-sm text-white bg-purple-600 w-6 h-6 top-6 left-4 rounded-xl">
                {jumlahItem}
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-green-700"></div>
      </div>
    </div>
  );
}

export default NavHead;
