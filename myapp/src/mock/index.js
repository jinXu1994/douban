var Mock=require("mockjs");
Mock.mock("/hoin","get",require("./json/home.json"))
Mock.mock("/sousou","get",require("./json/sousou.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/goodM","get",require("./json/goodM.json"))
Mock.mock("/movieF","get",require("./json/movieF.json"))
Mock.mock("/book","get",require("./json/books.json"))
Mock.mock("/booksF","get",require("./json/booksF.json"))



