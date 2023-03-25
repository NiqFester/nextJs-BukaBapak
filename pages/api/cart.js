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
    "cart.json" //all path
  );
}

const filepath = buildPath();
export default function handler(req, res) {
  const { method } = req;
  const { user } = extractData(filepath);
  let returnedObj = {};

  if (method === "POST") {
    const newData = req.body.pd;
    returnedObj = {
      message: "success",
    };

    const changedUser = user.map((pd) => {
      if (pd.name === req.body.act[1]) {
        if (req.body.act[0] === "ADD CART") {
          let Flags = true;
          let newPD = [...pd.idProduct];
          newPD.push(newData);
          if (pd.idProduct.findIndex((x) => x.id === newData.id) !== -1) {
            Flags = false;
            returnedObj = {
              message: `Ada Produk sama ${pd.idProduct.findIndex(
                (x) => x.id === newData.id
              )} ${newData.id}`,
            };
          }

          return {
            name: pd.name,
            idProduct: Flags ? [...newPD] : [...pd.idProduct],
          };
        }
        return { ...newData };
      }
      return pd;
    });

    fs.writeFileSync(filepath, JSON.stringify({ user: changedUser }));
  }
  if (method === "DELETE") {
    const changedUser = user.filter((pd) => pd.id !== req.body.id);
    fs.writeFileSync(filepath, JSON.stringify({ user: changedUser }));
    returnedObj = {
      message: "success",
    };
  }
  res
    .status(200) //status that everything is good... insert meme here please!
    .json(returnedObj);
}
