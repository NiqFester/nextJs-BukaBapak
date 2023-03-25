import Link from "next/link";
import { useContext, useRef, useState } from "react";
import Image from "next/image";
import { LoginState } from "../../CustomHook/LogContex";
import { useRouter } from "next/router";

export default function EmailForm({ text }) {
  const { setUserName } = useContext(LoginState);
  const router = useRouter();
  const userEmail = useRef();
  const passWord = useRef();
  const [message, setMessage] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (text === "Register") {
      try {
        const response = await fetch("/api/email", {
          //Call API
          method: "PUT", // ADD Resource
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail.current.value,
            pass: passWord.current.value,
            text: text,
          }),
        });
        const data = await response.json();
        setMessage(data.message);
        if (!response.ok)
          throw new Error(`Error: idk, maybe cuz ${response.status}`);
        userEmail.current.value = "";
        passWord.current.value = "";
        localStorage.setItem("currentLoggedIn", data.userName);
        setUserName(data.userName);
        console.log(message);
        router.back();
      } catch (e) {
        console.log("error", e);
      }
    } else if (text === "Login") {
      try {
        const response = await fetch("/api/email", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        let searchAcc = data.userName.find(
          (x) => x.email === userEmail.current.value
        );
        if (!searchAcc) {
          searchAcc = data.Admin.find(
            (x) => x.email === userEmail.current.value
          );
          if (!searchAcc) {
            throw new Error("Error: Akun tidak ditemukan");
          }
        }
        if (searchAcc.pass !== passWord.current.value) {
          throw new Error(`Error: Password salah`);
        }
        console.log(data);
        userEmail.current.value = "";
        passWord.current.value = "";
        localStorage.setItem("currentLoggedIn", searchAcc.email.split("@")[0]);
        setUserName(searchAcc.email.split("@")[0]);
        router.back();
      } catch (e) {
        console.log("error", e);
      }
    }
  };
  return (
    <div className="bg-[url('/asset/bg/Firefox_Screenshot_2023-03-07T05-36-33.094Z.png')] absolute top-0 w-full h-full overflow-y-hidden z-30 backdrop-blur-lg bg-cover bg-center">
      <div className="w-full h-[120%] backdrop-blur-lg -mt-[70px] pt-[70px]">
        <div className="w-[60vw] h-[80vh] mx-auto  mt-[10vh] flex">
          <div className="w-[40%] h-full bg-transparent">
            <Image
              src={"/asset/blank-profile-picture-973460__340.webp"}
              height={400}
              width={400}
              alt="profpic"
              className="rounded-[170px] mr-[10%] h-[50%] w-[80%] mt-[40%]"
            />
          </div>
          <form
            className="w-[60%] h-full flex flex-col justify-end gap-8 bg-white rounded-md"
            onSubmit={handleSubmit}
          >
            <input
              ref={userEmail}
              type="email"
              name="em"
              id="em"
              className="w-[70%] h-10 mx-auto border-purple-600 border-2 px-2 text-xl rounded-xl"
            />

            <input
              ref={passWord}
              type="password"
              name="ps"
              id="ps"
              className="w-[70%] h-10 mx-auto border-purple-600 border-2 px-2 text-xl rounded-xl"
            />
            <button className="w-[70%] h-10 mx-auto bg-purple-600 text-white text-xl text-center rounded-xl">
              {text}
            </button>

            <div className="w-full flex flex-col h-[220px] justify-center gap-8 border-t-2 mt-4 ">
              <Link
                href="#"
                className="w-[70%] h-10 mx-auto border-purple-600 border-2 px-2 text-xl text-center pt-1 rounded-xl"
              >
                Login Dengan Google
              </Link>
              <Link
                href="#"
                className="w-[70%] h-10 mx-auto border-purple-600 border-2 px-2 text-xl text-center pt-1 rounded-xl"
              >
                Login Dengan (Alamat terkenal)
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
