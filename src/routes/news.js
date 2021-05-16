const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');


newsRouter.get('', async (req, res) => {
    //res.render('news');
    try {
        var url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6f5bf6838e9b47048160d10d64b16451';

        const news_get = await axios.get(url)
        res.render('news', { articles: news_get.data.articles })
    } catch (err) {
        if (err.response) {
            res.render('news', { articles: null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            res.render('news', { articles: null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles: null })
            console.error('Error', err.message)
        }

    }
})




module.exports = newsRouter
