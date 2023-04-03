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
  const { method, query } = req;
  const { search } = query;
  const { products } = extractData(filepath);

  let returnedObj = {};
  
  if (method === "GET") {
    const filteredData = products.filter((el) => {
      if (search === "") {
        return el;
      }
      return el.title.toLowerCase().includes(search);
    });
    returnedObj = {
      message: "success",
      data: search === "" ? [] : filteredData.slice(0, 3),
    };
  }

  res
    .status(200) //status that everything is good... insert meme here please!
    .json(returnedObj);
}
