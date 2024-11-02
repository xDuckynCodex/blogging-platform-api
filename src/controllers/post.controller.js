'use strict'

const PostService = require("../services/post.service")

class PostController {
    async createPost(req, res, next) {
        return res.status(201).json(await PostService.createPost(req.body))
    }

    async updatePost(req, res, next) {
        return res.json(await PostService.updatePost(req.params, req.body))
    }

    async deletePost(req, res, next) {
        return res.json(await PostService.deletePost(req.params))
    }

    async getOnePost(req, res, next) {
        return res.json(await PostService.getOnePost(req.params))
    }

    async getPosts(req, res, next) {
        return res.json(await PostService.getPosts(req))
    }
}

module.exports = new PostController()