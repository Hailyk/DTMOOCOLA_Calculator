'use strict';
const DTMOOCOLA ="https://www.defensetravel.dod.mil"

const axios = require('axios').default;
const querystring = require('querystring');

function requestRate(year, month, day,locCode, colaCode, rank, YOS){

    let barracks = "NO";

    if(colaCode = 9){
        barracks = "YES"
        colaCode = 2
    }

    let request = axios.create({
        baseURL: DTMOOCOLA,
        timeout: 3000,
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Axios(DTMOOCOLA_Calculator)",
            "Access-Control-Allow-Origin": "*"
        }
    });
    request.post("/pdcgi/cola-oha/o_cola4.cgi",querystring.encode({
        "year":year,
        "month":month,
        "day":day,
        "LOCCODE2":locCode,
        "CINDEX":"",
        "RANK": rank,
        "SERVICE": YOS,
        "DEPEND":colaCode,
        "BARRACK": barracks,
        "submit2": "CALCULATE"
    })).then(function(res){
        if(res.status != 200){
            //do something when request fail
        }
        //parse html returned to json and look for daily rate.
    }).then(function(err){
        console.log(err);
    })
}
requestRate("2022","1","01","JP061","9","E4","3");