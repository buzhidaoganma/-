const fs = require("fs");

//读数据库
const usersString = fs.readFileSync("./db/users.json").toString();
const usersArray = JSON.parse(usersString); //字符串变数组叫反序列化
console.log(usersArray);

//写数据库
const user3 = { id: 3, name: "tom", password: "yyy" };
usersArray.push(user3);
const string = JSON.stringify(usersArray); //数组变成字符串的过程叫序列化
fs.writeFileSync("./db/users.json", string);
