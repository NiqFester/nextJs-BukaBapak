import Link from "next/link";
export default function Popular() {
  return (
    <>
      <p className="text-2xl mx-8 my-4 font-bold">Lagi Populer</p>
      <div className="flex gap-2 justify-center">
        <Link
          href={"/K/Elektronik/SmartPhone"}
          className="bg-slate-200 w-[150px] h-[150px] my-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto pt-2 mb-2  h-[70%]"
            viewBox="0 0 384 512"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          <p className="text-large text-center font-bold">SmartPhone</p>
        </Link>
        <Link
          href={"/K/Sembako/Bahan%20Mentah"}
          className="bg-slate-200 w-[150px] h-[150px] my-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="mx-auto pt-2 mb-2  h-[70%]"
          >
            <path d="M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z" />
          </svg>
          <p className="text-large text-center font-bold">Bahan Mentah</p>
        </Link>
        <Link
          href={"/K/Dekorasi/Tumbuhan"}
          className="bg-slate-200 w-[150px] h-[150px] my-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="mx-auto pt-2 mb-2  h-[70%]"
          >
            <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
          </svg>
          <p className="text-large text-center font-bold">Dekor tumbuhan</p>
        </Link>
        <Link
          href={"/K/Elektronik/Laptop"}
          className="bg-slate-200 w-[150px] h-[150px] my-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="mx-auto pt-2 mb-2  h-[70%]"
          >
            <path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
          </svg>
          <p className="text-large text-center font-bold">Laptop</p>
        </Link>
      </div>
    </>
  );
}
