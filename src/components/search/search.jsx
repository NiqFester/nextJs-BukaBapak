import { useRef, useState } from "react";
import Image from "next/image";

export default function Search({ display }) {
  const [fcs, setFcs] = useState("");
  const [searchData, setSearchData] = useState([]);
  
  const handleChange = async (event) => {
    setFcs(event.target.value);
    try {
      const response = await fetch(`/api/search?search=${fcs}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSearchData(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div id="search-btn" className="flex justify-center w-[30%] relative  ">
      <div className="w-full mb-3">
        <div className="relative flex flex-wrap items-stretch w-full mb-4 border border-solid rounded border-neutral-300">
          <input
            type="search"
            className="relative m-0 block w-[1%] min-w-0 flex-auto bg-transparent  bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder={`Coba cari ${display}`}
            aria-label="Search"
            value={fcs}
            onChange={handleChange}
            aria-describedby="button-addon2"
          />
          <span
            className=" input-group-text m-0 rounded-none flex items-center whitespace-nowrap px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <div
        className="absolute flex-col w-full bg-white border-2 border-t-2 top-10 first:border-none "
        style={{ display: fcs === "" ? "none" : "flex" }}
      >
        {searchData.map((x, i) => {
          return (
            <div key={i} className="flex">
              <Image src={x.thumbnail} height={16} width={24} alt="ico" />
              <p className="ml-2 capitalize border-t">{x.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
