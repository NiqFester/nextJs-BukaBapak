import { useContext, useState } from "react";
import Link from "next/link";
import { LoginState } from "../../CustomHook/LogContex";

export default function Kategori({ products }) {
  const { setUserName } = useContext(LoginState);

  //flag untuk...
  //bayangkan banyak bola dengan warna berbeda
  //tapi kita disuruh memasukan bola dengan warna yang berbeda
  //dalam satu kotak
  const flags = new Set();
  const tipe = products.filter((pd) => {
    if (flags.has(pd.tipe)) {
      return false;
    }
    flags.add(pd.tipe);
    return true;
  });

  //pgn jadiin fungsi tapi beda properti jadi kalau bisa dijadiin parameter yah silahkan

  const uniqueCat = products.filter((pd) => {
    if (flags.has(pd.category)) {
      return false;
    }
    flags.add(pd.category);
    return true;
  });

  //buat referensi mana yang di hover
  const [visible, setVisible] = useState("Elektronik");
  const kategori = uniqueCat.filter((pd) => visible === pd.tipe);

  //Untuk yang ingin memindahkan render di bawah ke komponen lain silahkan tapi saya sudah
  //mencobanya selama 1 jam dan tidak berhasil juga
  return (
    <>
      <div
        className="hidden !visible fixed z-40 top-[80px] w-[200px] bg-neutral-100 right-[50px] rounded-2xl"
        id="account"
        data-te-collapse-item
      >
        <div className="flex flex-col gap-4 py-4 ">
          <Link href="/account" className="text-lg text-center">
            Toko Anda
          </Link>
          <Link href="/account" className="text-lg text-center">
            Pengaturan Akun
          </Link>
          <button
            data-te-collapse-init
            data-te-target="#account"
            aria-expanded="false"
            aria-controls="account"
            onClick={() => {
              localStorage.removeItem("currentLoggedIn");
              setUserName("");
            }}
            className="text-lg"
          >
            Log Out
          </button>
        </div>
      </div>
      <div
        className="!visible hidden fixed z-40 top-[70px] w-full "
        id="tipe-brng"
        data-te-collapse-item
      >
        <div className="block p-6 bg-white shadow-lg px-36 dark:bg-neutral-700 dark:text-neutral-50">
          <div className="flex justify-between pb-3 my-6 border-b-2">
            <h1 className="text-3xl font-bold">Kategori Barang</h1>
            <button
              type="button"
              data-te-collapse-init
              data-te-target="#tipe-brng"
              aria-expanded="false"
              aria-controls="tipe-brng"
            >
              X
            </button>
          </div>
          <div className="grid grid-cols-4">
            <div className="grid col-span-1 grid-rows-4 mt-2">
              {tipe?.map((pd) => (
                <Link
                  href={`/K/${pd.tipe}`}
                  key={pd.id}
                  className={`flex justify-between p-2 ${
                    visible === pd.tipe ? "bg-slate-300" : "bg-white"
                  }`}
                  onMouseEnter={() => {
                    setVisible(pd.tipe);
                  }}
                >
                  <p className="text-lg capitalize text-start">{pd.tipe}</p>
                  <p className="font-bold">{">"}</p>
                  {/* Kocak bet dah masa nggak bisa Nulis panah kanan (>) 
                  langsung harus jadiin string dulu */}
                </Link>
              ))}
            </div>
            <div className="grid content-start justify-start grid-flow-row col-span-3 mt-2 ml-5">
              <h1 className="text-2xl font-bold capitalize">{visible}</h1>
              {kategori?.map((pd) => (
                <Link
                  href={`/K/${pd.tipe}/${pd.category}`}
                  className="m-1 text-start"
                  key={pd.id}
                >
                  {pd.category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
