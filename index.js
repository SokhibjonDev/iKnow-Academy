const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");

const app = express();
const hbs = create({
  extname: "hbs",
  defaultLayout: "layout",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
});


app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const homePage = require("./router/homePage");
const ieltsPage = require("./router/ieltsPage");
const teacherPage = require("./router/teacherPage");
const lessonPage = require("./router/lessonPage");
const coworkingPage = require("./router/coworkingPage");
const fillialsPage = require("./router/fillialsPage");

app.use("/", homePage);
app.use("/ielts", ieltsPage);
app.use("/teacher", teacherPage);
app.use("/lesson", lessonPage);
app.use("/coworking", coworkingPage);
app.use("/fillials", fillialsPage);

try {
  const port = normalizePort(process.env.port || 3000);
  app.listen(port, () => {
    console.log(`Start ${port} port`);
  });
} catch (error) {
  console.error(error);
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}