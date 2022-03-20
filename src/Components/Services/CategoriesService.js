import http from './httpService.js';


export const getCategories=()=>{
    const apiEndPoint=`https://www.themealdb.com/api/json/v1/1/categories.php`;
    return http.get(apiEndPoint);
}


export const getsubcategories=()=>{
    const apiEndPoint=`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
    return http.get(apiEndPoint);
}
