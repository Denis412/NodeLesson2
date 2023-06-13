const fs = require("fs");
const path = require("path");

const writeFile = (file_name, data) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../fetch_results/" + file_name),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
};

module.exports = writeFile;
