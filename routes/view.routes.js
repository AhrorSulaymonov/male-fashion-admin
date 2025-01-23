const { createViewPage } = require("../helpers/create_view_page");
const User = require("../schema/User");
const router = require("express").Router();

router.get("/dashboard", async (req, res) => {
  res.render("/");
});
router.get("/dashboard.html", async (req, res) => {
  res.redirect("/");
});
router.get("/", async (req, res) => {
  res.render(createViewPage("dashboard"));
});
router.get("/blacklist.html", async (req, res) => {
  res.render(createViewPage("blacklist"));
});
router.get("/products.html", async (req, res) => {
  res.render(createViewPage("products"));
});
router.get("/add-user.html", async (req, res) => {
  res.render(createViewPage("add-user"));
});
router.post("/add-user", async (req, res) => {
  try {
    const { name, surname, phone, email, password } = req.body;
    console.log({ name, surname, phone, email, password });
    const newUser = new User({
      name,
      surname,
      phone,
      email,
      password,
    });
    await newUser.save();
    const usersdt = JSON.parse(JSON.stringify(await User.find()));
    console.log("bu router oldida", usersdt, "bu router oldida");
    res.render(createViewPage("users"), { usersdt });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Error saving user");
  }
});
router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.render(createViewPage("user"), { user });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Error saving user");
  }
});

router.get("/orders.html", async (req, res) => {
  res.render(createViewPage("orders"));
});
router.get("/users.html", async (req, res) => {
  const usersdt = JSON.parse(JSON.stringify(await User.find()));
  console.log("bu router oldida", usersdt, "bu router oldida");
  res.render(createViewPage("users"), { usersdt });
});
router.get("/categories.html", async (req, res) => {
  res.render(createViewPage("categories"));
});
router.get("/subscribers.html", async (req, res) => {
  res.render(createViewPage("subscribers"));
});
router.get("/messages.html", async (req, res) => {
  res.render(createViewPage("messages"));
});

module.exports = router;
