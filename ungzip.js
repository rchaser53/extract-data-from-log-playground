const zlib = require('zlib');
const ungzip = (src, dist) => {
    const input = fs.readFileSync(path.resolve(__dirname, src));
    const buffer = Buffer.from(input);
    const result = zlib.gunzipSync(buffer);

    fs.writeFileSync(dist, result, { encoding: "utf8" });
}

module.exports = {
  ungzip
}