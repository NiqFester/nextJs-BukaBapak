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
    "user.json" //all path
  );
}

const filepath = buildPath();

export default function handler(req, res) {
  const { method } = req;
  const { Admin, User } = extractData(filepath);
  let returnedObj = {};

  if (method === "DELETE") {
    const { email } = req.body;
    const newData = User.filter((x) => x.email !== email);
    fs.writeFileSync(filepath, JSON.stringify({ Admin, User: newData }));
    returnedObj = { message: `${email} Deleted` };
  }

  if (method === "GET") {
    returnedObj = {
      userName: User,
      Admin,
    };
  }

  if (method === "POST") {
    const { email, pass, account } = req.body;
    let modifiedAcc = account === "admin" ? [...Admin] : [...User];
    modifiedAcc[0] = { email, pass };

    const modifiedData =
      account === "admin"
        ? { Admin: modifiedAcc, User }
        : { Admin, User: modifiedAcc };
    fs.writeFileSync(filepath, JSON.stringify(modifiedData));

    let message = `Account ${email} has been changed  `;
    returnedObj = { message };
  }

  if (method === "PUT") {
    const { email, pass } = req.body;
    let message = "";

    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "invalid email address" });
      return;
    }

    const newUser = [...User, { email, pass }];
    fs.writeFileSync(filepath, JSON.stringify({ Admin, User: newUser }));
    message = `You've been registered succesfully with the email : ${email} `;
    returnedObj = { message: message, userName: email.split("@")[0] };

    // if (text === "Login") {
    //   const loggedUser = User.find((usr) => usr.email === email);
    //   if (!loggedUser) {
    //     const loggedAdmin = Admin.find((usr) => usr.email === email);
    //     if (!loggedAdmin) {
    //       res.status(404).json({ message: `Can't find the email ${email}` });
    //       return;
    //     }
    //   }
    // }
  }
  res
    .status(200) //status that everything is good... insert meme here please!
    .json(returnedObj);
}
