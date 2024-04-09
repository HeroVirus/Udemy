//デフォルトimportは{}が不要
import functionB, { User, hello } from "./module.js";

hello();
functionB();
const user = new User("Tom");
user.hello();
