import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.
As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    let result = new Array();
    for (let car of car_data){
        if (car.torque >= minTorque && car.horsepower >= minHorsepower){
            result.push(car);
        }
    }
    result.sort((a, b) => parseFloat(b.horsepower) - parseFloat(a.horsepower));    
    return result;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let result = new Array();
    for (let car of car_data){
        if (car.highway_mpg >= minHighway && car.city_mpg >= minCity){
            result.push(car);
        }
    }
    result.sort((a, b) => parseFloat(b.highway_mpg) - parseFloat(a.highway_mpg));    
    return result;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    let result = new Array();
    for (let car of car_data){
        if (car.id.toLowerCase().includes(searchTerm.toLowerCase())){
            result.push(car);
        }
    }
    result.sort((a, b) => parseFloat(a.id.toLowerCase().indexOf(searchTerm.toLowerCase())) - parseFloat(b.id.toLowerCase().indexOf(searchTerm.toLowerCase())));    
    return result;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    let result = new Array();
    for (let car of car_data){
        if (years.includes(car.year)){
            result.push(car);
        }
    }
    result.sort((a, b) => parseFloat(b.year) - parseFloat(a.year));    
    return result;
}
