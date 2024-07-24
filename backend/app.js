const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = "madinachalkmadina12345678k4j9r9rw03003nmdfkrejeknmdskmfn43";

const app = express();
app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://bila736g:H7695247@cluster0.xdvwwhs.mongodb.net/Ain?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

const User = require("./UserSchema");

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.json({ status: "email already exists" });
    await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);
    return res.json({ status: "ok", data: token });
  }
   
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/admin", async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const useremail = decoded.email;
    const user = await User.findOne({ email: useremail });
    if (user) {
      res.send({ status: "ok", data: user });
    } else {
      res.send({ status: "error", error: "User not found" });
    }
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});