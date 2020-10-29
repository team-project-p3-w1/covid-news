'use strict'

const axios = require('axios')
const { CovidData } = require('../models/')

class CovidApiController{

    static seedingCovidData(req, res,next) { //bisa sekaligus update karena data masuk ke database terus
        axios({
            method: 'get',
            url: 'https://data.covid19.go.id/public/api/update.json',
        }) 
        .then(res => {
            const result = res.data.update
            
            const jumlah_meninggal = result.penambahan.jumlah_meninggal
            const jumlah_sembuh = result.penambahan.jumlah_sembuh
            const jumlah_positif = result.penambahan.jumlah_positif
            const akumulasi_meninggal = result.total.jumlah_meninggal
            const akumulasi_sembuh = result.total.jumlah_sembuh
            const akumulasi_positif = result.total.jumlah_positif
            const tanggal = result.penambahan.tanggal
            
            return CovidData.create({
                jumlah_meninggal,
                jumlah_sembuh,
                jumlah_positif,
                akumulasi_meninggal,
                akumulasi_sembuh,
                akumulasi_positif,
                tanggal
            })
        })
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            next({name:'Cannot Get Updated COVID DATA'})
        })
    }

    static getCovidData (req, res,next) {
        CovidData.findAll({
            order: [ ['tanggal', 'DESC'] ],
            limit: 2
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            next({name:'Cannot Fetch Data'})
        })
    }
}

module.exports = CovidApiController
