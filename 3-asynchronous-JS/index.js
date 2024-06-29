const fs = require("fs");
const superagent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       console.log("response: ", res.body.message);
//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return err.message;

//         console.log("File written successfully!");
//       });
//     });
// });

// From callback hell to promises
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("Unable to read file 😥");
      resolve(data);
    });
  });
};
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err, data) => {
      if (err) reject("Unable to write file 😥");
      resolve("File written successfully 😀");
    });
  });
};
// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     return writeFilePro("dog-img.txt", res.body.message);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await
// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(data);

//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );

//     const data1 = await writeFilePro("dog-img.txt", res.body.message);
//     console.log(data1);
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
//   return "2: READY!";
// };

// Async function returns a promise
// console.log("1: will get dog pics");
// getDogPic()
//   .then((data) => {
//     console.log(data);
//     console.log("3: done getting dog pics");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Waiting for multiple promises simultaneously
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(data);

    const res1 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1, res2, res3]);
    const imgs = all.map((el) => el.body.message);

    const data1 = await writeFilePro("dog-img.txt", imgs.join("\n"));
    console.log(data1);
  } catch (err) {
    console.log(err);
    throw err;
  }
  return "2: READY!";
};
getDogPic();
