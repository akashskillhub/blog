const { getAllUsers, getAllBlogs, blockUnblockUserAccount, publishUnpublishBlog } = require("../controllers/admin.controller")

const router = require("express").Router()
router
    .get("/users", getAllUsers)
    .get("/blogs", getAllBlogs)
    .patch("/block-unblock-user/:uid", blockUnblockUserAccount)
    .patch("/publish-unpublish-blog/:bid", publishUnpublishBlog)

module.exports = router