const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaction) => {
  try {
    let temp = 0;
    temp = await promiseTheaterIXX()
      .then((result) => countReaction(result, reaction))
    temp += await promiseTheaterVGC()
      .then((result) => countReaction(result, reaction))

    return temp;
  } catch (rejectMessage) {
    console.log(rejectMessage);
  }
};

const countReaction = (data, reaction) => {
  return new Promise((resolve, reject) => {
    if (data == "" || data == undefined) {
      reject("Data not found!");
    } else {
      let counter = 0;

      for (const datum of data) {
        if (datum.hasil === reaction) counter++;
      }

      resolve(counter);
    }
  });
};

module.exports = {
  promiseOutput,
};
