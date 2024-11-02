'use strict'
const postModel = require('../models/post.model')


class PostService {
    static async createPost({ title, content, category, tags }) {
        const post = await postModel.create({
            title,
            content,
            category,
            tags
        })
        return post
    }

    static async updatePost({ id }, update = {}) {
        const filter = { _id: id }, option = { upsert: true, new: true }
        return await postModel.findOneAndUpdate(filter, update, option)
    }

    static async deletePost({ id }) {
        return await postModel.deleteOne({ _id: id })
    }

    static async getOnePost({ id }) {
        return await postModel.findOne({ _id: id }).lean()
    }

    static async getPosts(req) {
        const { query } = req
        if (Object.keys(query).length == 0) return await postModel.find({}).lean();
        return await postModel.find({ tags: query.tern }).lean()
    }
}

module.exports = PostService