const express = require('express');
const app = express();
const router = express.Router();
const Post = require('../schemas/PostSchema');

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

//Create 
router.get("/create", (req, res, next) => {
    res.render("create");
})

router.post("/create", async (req, res, next) => {
    const data = req.body;
    await Post.create(data)
    .then(() => {
        return res.redirect("/");
    });
})

// Read all
router.get("/", async (req, res, next) => {
    await Post.find()
    .then((doc) => {
        res.render('home', {items: doc});
    });
})

// Read single
router.get("/post/:id", async (req, res, next) => {
    var id = req.params.id.replace(":", "");
    await Post.findById(id)
    .then((doc) => {
        res.render('post', {items: doc});
    });
})

// Update
router.get("/update/:id", async (req, res, next) => {
    var id = req.params.id.replace(":", "");
    await Post.findById(id)
    .then((doc) => {
        res.render('update', {items: doc});
    });
})

router.post("/update/:id", async (req, res, next) => {
    const data = req.body;
    var id = req.params.id.replace(':','');
    await Post.findByIdAndUpdate({_id: id}, { $set: data })
    .then(() => {
        return res.redirect("/");
    });
})

// Delete
router.get("/delete/:id", async (req, res, next) => {
    var id = req.params.id.replace(':','');
    await Post.deleteOne({_id: id})
    .then(() => {
        return res.redirect("/");
    });
})

// Export GET & POST Reuqests
module.exports = router;