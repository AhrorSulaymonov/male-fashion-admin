const { createViewPage } = require("../helpers/create_view_page");
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
router.get("/orders.html", async (req, res) => {
  res.render(createViewPage("orders"));
});
router.get("/users.html", async (req, res) => {
  res.render(createViewPage("users"));
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
