
import { login } from "./login.js";

const main = async () => {
  try {
    const Login = await login();
    Login();   

  } catch (error) {
    console.log(error);
  }
};

main();
