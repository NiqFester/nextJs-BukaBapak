export default function ProductForm({
  handleSubmit2,
  productForm2,
  setProductForm2,
  className,
}) {
  return (
    <form className={className} onSubmit={handleSubmit2}>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">Title</p>
        <input
          className="h-8 col-span-5 px-2 border-2 border-purple-600"
          type="text"
          value={productForm2.title}
          onChange={(e) => {
            setProductForm2((prev) => {
              return { ...prev, title: e.target.value };
            });
          }}
        />
        <div className="h-8 w-9"></div>
      </div>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">Deskripsi</p>
        <textarea
          className="h-24 col-span-5 px-2 py-0 border-2 border-purple-600"
          value={productForm2.description}
          onChange={(e) => {
            setProductForm2((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
        ></textarea>
        <div className="h-8 w-9"></div>
      </div>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">Harga</p>
        <input
          className="h-8 col-span-5 px-2 border-2 border-purple-600"
          type="number"
          placeholder="Rp. (Masukan Harga)"
          value={productForm2.price}
          onChange={(e) => {
            setProductForm2((prev) => {
              return { ...prev, price: e.target.value };
            });
          }}
        />
        <div className="h-8 w-9"></div>
      </div>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">Rating</p>
        <input
          className="h-8 col-span-5 px-2 border-2 border-purple-600"
          type="number"
          onChange={(e) => {
            setProductForm2((prev) => {
              return {
                ...prev,
                rating: e.target.value == 5 ? "" : e.target.value,
              };
            });
          }}
          value={productForm2.rating}
        />
        <div className="h-8 w-9"></div>
      </div>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">Stock</p>
        <input
          className="h-8 col-span-5 px-2 border-2 border-purple-600"
          type="number"
          onChange={(e) => {
            setProductForm2((prev) => {
              return {
                ...prev,
                stock: e.target.value == 5 ? "" : e.target.value,
              };
            });
          }}
          value={productForm2.stock}
        />
        <div className="h-8 w-9"></div>
      </div>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">tipe</p>
        <input
          className="h-8 col-span-5 px-2 border-2 border-purple-600"
          type="text"
          onChange={(e) => {
            setProductForm2((prev) => {
              return {
                ...prev,
                tipe: e.target.value,
              };
            });
          }}
          value={productForm2.tipe}
        />
        <div className="h-8 w-9"></div>
      </div>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">Brand</p>
        <input
          className="h-8 col-span-5 px-2 border-2 border-purple-600"
          type="text"
          onChange={(e) => {
            setProductForm2((prev) => {
              return {
                ...prev,
                brand: e.target.value,
              };
            });
          }}
          value={productForm2.brand}
        />
        <div className="h-8 w-9"></div>
      </div>
      <div className="grid grid-cols-7 p-4">
        <p className="mt-1 text-center ">Category</p>
        <input
          className="h-8 col-span-5 px-2 border-2 border-purple-600"
          type="text"
          onChange={(e) => {
            setProductForm2((prev) => {
              return {
                ...prev,
                category: e.target.value,
              };
            });
          }}
          value={productForm2.category}
        />
        <div className="h-8 w-9"></div>
      </div>
      <div className="row-span-5">
        <div className="grid grid-cols-7 p-4">
          <p className="mt-1 text-center">Photo</p>
          <input
            className="h-8 col-span-5 px-2 border-2 border-purple-600"
            type="url"
            value={productForm2.images[0]}
            onChange={(e) => {
              setProductForm2((prev) => {
                let newArr = [...prev.images];
                newArr[0] = e.target.value;
                return {
                  ...prev,
                  images: newArr,
                  thumbnail: e.target.value,
                };
              });
            }}
          />
          <div className=""></div>
        </div>
        {productForm2.images.map((pd, i) => {
          return (
            <div key={i} className="grid grid-cols-7 p-4 ">
              <input
                className="h-8 col-span-5 col-start-2 px-2 border-2 border-purple-600"
                type="url"
                value={productForm2.images[i + 1]}
                onChange={(e) => {
                  setProductForm2((prev) => {
                    let newArr = [...prev.images];
                    newArr[i + 1] = e.target.value;
                    return {
                      ...prev,
                      images: newArr,
                    };
                  });
                }}
              />
              <div className="flex justify-evenly">
                <button
                  type="button"
                  onClick={() => {
                    setProductForm2((prev) => {
                      return {
                        ...prev,
                        images: prev.images.slice(0, -1),
                      };
                    });
                  }}
                  className="w-8 h-8 text-2xl text-white bg-purple-600 rounded-lg "
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center">
          <button
            type="Submit"
            className="px-16 py-2 text-center text-white bg-purple-600 "
          >
            {" "}
            Apply
          </button>
        </div>
      </div>
    </form>
  );
}
