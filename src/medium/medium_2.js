import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

 export const allCarStats = {
    avgMpg: {'city': cityMPG(), 'highway': highwayMPG()},
    allYearStats: getStatistics(getYears()),
    ratioHybrids: hybrid(),
};

 function cityMPG(){
    let arr =[];
    let sum = 0;
    for (let i in mpg_data){
        arr.push(mpg_data[i].city_mpg);
        sum = sum + mpg_data[i].city_mpg;
    }
    return sum / arr.length;
}
function highwayMPG(){
    let arr =[];
    let sum = 0;
    for (let i in mpg_data){
        arr.push(mpg_data[i].highway_mpg);
        sum = sum + mpg_data[i].highway_mpg;
    }
    return sum / arr.length;
}
function getYears(){
    let years =[];
    for (let i in mpg_data){
        years.push(mpg_data[i].year);
    }
    return years;
}
function hybrid(){
    let arr =[];
    let sum = 0;
    for (let i in mpg_data){
        arr.push(mpg_data[i].hybrid);
        sum = sum + mpg_data[i].hybrid;
    }
    return sum / arr.length;
}

export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: avgMpgByYearAndHybrid()
};

function avgMPG(year){
    let city_mpg_hy =[];
    let highway_mpg_hy =[];
    let city_mpg_not_hy =[];
    let highway_mpg_not_hy =[];
    let city_hy = 0;
    let highway_hy = 0;
    let city_not_hy = 0;
    let highway_not_hy = 0;
    for (let i in mpg_data){
        if (mpg_data[i].year == year){
        if (mpg_data[i].hybrid){
            city_mpg_hy.push(mpg_data[i].city_mpg);
            city_hy = city_hy + mpg_data[i].city_mpg;
            highway_mpg_hy.push(mpg_data[i].highway_mpg);
            highway_hy = highway_hy + mpg_data[i].highway_mpg;
        }
        else{
            city_mpg_not_hy.push(mpg_data[i].city_mpg);
            city_not_hy = city_not_hy + mpg_data[i].city_mpg;
            highway_mpg_not_hy.push(mpg_data[i].highway_mpg);
            highway_not_hy = highway_not_hy + mpg_data[i].highway_mpg;
        }
        }
    }
    city_hy = city_hy / city_mpg_hy.length;
    highway_hy = highway_hy / highway_mpg_hy.length;
    city_not_hy = city_not_hy / city_mpg_not_hy.length;
    highway_not_hy = highway_not_hy / highway_mpg_not_hy.length;

    let hybrid = {'city': city_hy, 'highway': highway_hy};
    let notHybrid = {'city': city_not_hy, 'highway': highway_not_hy};
    let year_info = {hybrid, notHybrid};
    return year_info;
}

function avgMpgByYearAndHybrid(){
    let obj = {};
    let years = getYears();
    let distinctYears = [...new Set(years)];
    for (let i of distinctYears){
        obj[i] = avgMPG(i);
    }
    return obj;
}
