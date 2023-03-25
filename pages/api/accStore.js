import path from "path";
import fs from "fs"; //allows to read and overwrite data

function extractData(filePath) {
  //extract data.json and extract the data
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

function buildPath() {
  //access to path
  return path.join(
    process.cwd(), //root
    "data",
    "product.json" //all path
  );
}

const filepath = buildPath();
export default function handler(req, res) {
  const { method } = req;
  const { products, comment } = extractData(filepath);
  let returnedObj = {};

  if (method === "POST") {
    const newData = req.body;
    const changedProduct = products.map((pd) => {
      if (pd.id === newData.id) {
        return {
          ...pd,
          ...newData,
        };
      }
      return pd;
    });
    fs.writeFileSync(
      filepath,
      JSON.stringify({ comment, products: changedProduct })
    );
    returnedObj = {
      message: "success",
    };
  }
  if (method === "PUT") {
    const newData = req.body;
    const newProduct = {
      id: products.length + 1,
      ...newData,
    };
    fs.writeFileSync(
      filepath,
      JSON.stringify({ comment, products: [...products, newProduct] })
    );
  }
  res
    .status(200) //status that everything is good... insert meme here please!
    .json(returnedObj);
}
