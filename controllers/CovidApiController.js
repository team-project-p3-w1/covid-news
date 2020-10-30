'use strict'

const axios = require('axios')
const { CovidData } = require('../models/')

class CovidApiController{

    static seedingCovidData(req, res,next) {
        let dataCovid;

        axios({
            method: 'get',
            url: 'https://data.covid19.go.id/public/api/update.json',
        }) 
        .then(res => {
            dataCovid = res.data.update.harian

            const x = dataCovid.length - 2
            console.log(dataCovid[x])
            
            const jumlah_meninggal = dataCovid[x].jumlah_meninggal.value
            const jumlah_sembuh = dataCovid[x].jumlah_sembuh.value
            const jumlah_positif = dataCovid[x].jumlah_positif.value
            const akumulasi_meninggal = dataCovid[x].jumlah_meninggal_kum.value
            const akumulasi_sembuh = dataCovid[x].jumlah_sembuh_kum.value
            const akumulasi_positif = dataCovid[x].jumlah_positif_kum.value
            const tanggal = dataCovid[x].key_as_string

            
            
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
            const x = dataCovid.length - 1
            console.log(dataCovid[x])
            const jumlah_meninggal = dataCovid[x].jumlah_meninggal.value
            const jumlah_sembuh = dataCovid[x].jumlah_sembuh.value
            const jumlah_positif = dataCovid[x].jumlah_positif.value
            const akumulasi_meninggal = dataCovid[x].jumlah_meninggal_kum.value
            const akumulasi_sembuh = dataCovid[x].jumlah_sembuh_kum.value
            const akumulasi_positif = dataCovid[x].jumlah_positif_kum.value
            const tanggal = dataCovid[x].key_as_string

            
            
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
            order: [ ['id', 'DESC'] ],
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
