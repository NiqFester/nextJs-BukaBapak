import ProgressRing from "../ProgressRIng/Progress";
export default function Rating({ product }) {
  const starSize = "20";

  return (
    <div className="grid grid-cols-6 pb-8 mb-8 border-b-2" id="Rating">
      <div className="relative col-span-1" id="circle">
        <div className="mt-[38%]">
          <p className="text-3xl font-bold text-center">{product.rating}</p>
        </div>
        <div className="stroke-slate-400 absolute top-3 left-[10px]">
          <ProgressRing radius={50} stroke={4} progress={100} />
        </div>
        <div className="absolute stroke-yellow-400 -rotate-90 top-3   left-[10px]">
          <ProgressRing radius={50} stroke={4} progress={-90} />
        </div>
      </div>
      <div
        className="grid content-center justify-center grid-flow-row col-span-2 -ml-4"
        id="Star"
      >
        <div className="flex gap-1 mb-2">
          <div id="star-fill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={starSize}
              height={starSize}
              fill="currentColor"
              className="fill-yellow-400"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
            </svg>
          </div>
          <div id="star-fill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={starSize}
              height={starSize}
              fill="currentColor"
              className="fill-yellow-400"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
            </svg>
          </div>
          <div id="star-fill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={starSize}
              height={starSize}
              fill="currentColor"
              className="fill-yellow-400"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
            </svg>
          </div>
          <div id="star-fill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={starSize}
              height={starSize}
              fill="currentColor"
              className="fill-yellow-400"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
            </svg>
          </div>
          <div id="star-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={starSize}
              height={starSize}
              fill="currentColor"
              className="fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />{" "}
            </svg>
          </div>
        </div>
        <p>dari beberapa ulasan</p>
      </div>
      <div className="grid col-span-3 grid-rows-5 " id="horizontal">
        <div className="grid grid-cols-6 ">
          <div className="flex">
            <p className="text-sm text-center">5&nbsp;</p>
            <div id="star-fill" className="mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
          </div>
          <div className="col-span-4 pr-4 mt-2 -ml-3 ">
            <div className="h-[6px] rounded-xl w-full bg-slate-400">
              <div className="h-[6px] rounded-xl bg-yellow-400 w-[95%]"></div>
            </div>
          </div>
          <div className="text-sm">
            <p>95.5%</p>
          </div>
        </div>

        <div className="grid grid-cols-6 ">
          <div className="flex">
            <p className="text-sm text-center">4&nbsp;</p>
            <div id="star-fill" className="mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
          </div>
          <div className="col-span-4 pr-4 mt-2 -ml-3 ">
            <div className="h-[6px] rounded-xl w-full bg-slate-400">
              <div className="h-[6px] rounded-xl bg-yellow-400 w-[6%]"></div>
            </div>
          </div>
          <div className="text-sm">
            <p>6%</p>
          </div>
        </div>

        <div className="grid grid-cols-6 mt-1">
          <div className="flex">
            <p className="text-sm text-center">3&nbsp;</p>
            <div id="star-fill" className="mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
          </div>
          <div className="col-span-4 pr-4 mt-2 -ml-3">
            <div className="h-[6px] rounded-xl w-full bg-slate-400"></div>
          </div>
          <div className="text-sm">
            <p>0%</p>
          </div>
        </div>

        <div className="grid grid-cols-6 mt-1">
          <div className="flex">
            <p className="text-sm text-center">2&nbsp;</p>
            <div id="star-fill" className="mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
          </div>
          <div className="col-span-4 pr-4 mt-2 -ml-3">
            <div className="h-[6px] rounded-xl w-full bg-slate-400"></div>
          </div>
          <div className="text-sm">
            <p>0%</p>
          </div>
        </div>

        <div className="grid grid-cols-6 mt-1">
          <div className="flex">
            <p className="text-sm text-center">1&nbsp;</p>
            <div id="star-fill" className="mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="fill-yellow-400"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
              </svg>
            </div>
          </div>
          <div className="col-span-4 pr-4 mt-2 -ml-3">
            <div className="h-[6px] rounded-xl w-full bg-slate-400"></div>
          </div>
          <div className="text-sm">
            <p>0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
