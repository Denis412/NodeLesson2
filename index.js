const fs = require("fs");
const http = require("http");
const fetchTodos = require("./sdk/fetch");
const writeFile = require("./helpers/writeFile");

const PORT = process.env.PORT || 3000;

http
  .createServer(async (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    let responseData;

    if (req.url === "/posts") {
      responseData = await fetchTodos();

      writeFile("todos.json", responseData);
    }

    res.end();
  })
  .listen(PORT);
