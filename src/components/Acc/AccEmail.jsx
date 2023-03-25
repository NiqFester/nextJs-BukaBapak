export default function AccEmail({
  onScreen,
  handleEmail,
  currentAcc,
  accForm,
  setAcc,
  handleDelete,
}) {
  return (
    <div className={`w-[80%] ${onScreen[0] ? "block" : "hidden"} `}>
      <form className="grid grid-flow-row " onSubmit={handleEmail}>
        <div className="grid grid-cols-7 p-4">
          <p className="mt-1 text-center ">Email</p>
          <input
            className="h-8 col-span-5 px-2 border-2 border-purple-600"
            type="email"
            placeholder={currentAcc.email}
            value={accForm.email}
            onChange={(e) => {
              setAcc((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
          <div className="h-8 w-9"></div>
        </div>
        <div className="grid grid-cols-7 p-4">
          <p className="mt-1 text-center ">Password</p>
          <input
            className="h-8 col-span-5 px-2 border-2 border-purple-600"
            type="password"
            placeholder={currentAcc.pass}
            value={accForm.pass}
            onChange={(e) => {
              setAcc((prev) => {
                return { ...prev, pass: e.target.value };
              });
            }}
          />
          <div className="h-8 w-9"></div>
        </div>
        <div className="row-span-5">
          <div className="grid grid-cols-7 p-4">
            <p className="mt-1 text-center">Photos</p>
            <input
              className="h-8 col-span-5 px-2 border-2 border-purple-600"
              type="url"
              disabled={true}
              placeholder="Akan Ditambahkan"
            />
            <div className=""></div>
          </div>
          <div className="flex justify-center">
            <button
              type="Submit"
              className="px-16 py-2 text-center text-white bg-purple-600 "
            >
              {" "}
              Apply
            </button>
            <button
              type="button"
              className="px-16 py-2 text-center text-white bg-purple-600 "
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
