import Image from "next/image";

export default function AccText({
  txtOption,
  onScreen,
  setOnScreen,
  setUsrPdId,
}) {
  return (
    <div className="w-[20%] flex flex-col ">
      <Image
        src={"/asset/blank-profile-picture-973460__340.webp"}
        height={400}
        width={400}
        alt="profpic"
        className="rounded-[170px] h-[80%] w-[50%] mx-auto "
      />
      {txtOption.map((txt, i) => {
        return (
          <button
            key={i}
            className="flex justify-between p-4 mt-8 text-xl"
            type="button"
            onClick={() => {
              let condition = i === 3 ? true : false;
              if (condition) {
                setUsrPdId(0);
              }
              let onArr = onScreen.map((condition) => {
                return condition ? !condition : condition;
              });
              onArr[i] = true;
              setOnScreen([...onArr]);
            }}
          >
            <p>{txt}</p>
            <p>{">"}</p>
          </button>
        );
      })}
    </div>
  );
}
