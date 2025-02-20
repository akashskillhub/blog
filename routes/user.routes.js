const { createBlog, readBlog, updateBlog, deleteBlog } = require("../controllers/user.controller")

const router = require("express").Router()
router
    .post("/create-blog", createBlog)
    .get("/read-blog", readBlog)
    .patch("/update-blog/:bid", updateBlog)
    .delete("/delete-blog/:bid", deleteBlog)

module.exports = router