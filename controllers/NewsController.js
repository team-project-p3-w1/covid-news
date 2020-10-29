'use strict'
const axios = require('axios')

class NewsController{
    static accessNews(req, res) { 
        const today = new Date()
        axios({
            method: 'get',
            url: 'https://newsapi.org/v2/everything',
            params: {
                q: "+covid",
                language: "id",
                sortBy: "publishedAt",
                apiKey: "72b9d7ec1d6e4eff857c29f7c479fa22"
            }
        })
        .then(res => {
            const news = res.data.articles
            console.log(news[0].source)

            const displayNews = []
            
            for(let i = 0; i < 5; i++){ //buat ambil 5 berita terbaru ttg covid
                let data = {
                    sumber: news[i].source.name,
                    judul: news[i].title,
                    penulis: news[i].author,
                    description: news[i].description,
                    link: news[i].url,
                    tanggal_terbit : news[i].publishedAt
                }
                displayNews.push(data)
            }
            return displayNews
        })
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            next({name:'Cannot Fetch News Data'})
        })
    }
}

module.exports = NewsController
