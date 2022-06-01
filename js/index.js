import {app} from "./App.js";

const main = async () => {
  try {
    const Start = await app();
    Start();
  } catch (error) {
    console.log(error);
  }
};

main();
