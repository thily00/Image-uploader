const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = file.mimetype.slice(6);
    callback(null, name + Date.now() + "." + extension);
  },
});

app.post("/upload", multer({ storage: storage }).single("file"), (req, res) => {
  if (req.file) {
    return res.status(200).json({
      response: {
        msg: "file uploaded",
        imageUrl: req.file.filename,
      },
    });
  }
});

app.get("/image/:image", (req, res) => {
  console.log(req.params.image);
  res.sendFile(`uploads/${req.params.image}`);
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
