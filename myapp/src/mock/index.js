var Mock=require("mockjs");
Mock.mock("/hoin","get",require("./json/home.json"))
Mock.mock("/sousou","get",require("./json/sousou.json"))