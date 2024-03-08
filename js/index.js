const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"

async function getService (){
 try {
    const res = await fetch(API)
    const data =await res.json()
    console.log(data.meals)
    showService(data.meals)
    
 } catch (error) {
    console.log(error)
 }
}
getService()
let meinContent = document.querySelector(".main-content")

function showService (data){
meinContent.innerHTML = data.map((item)=>{
    return`
    <div onclick="gotoMeals('${item.idMeal}')" class="meal-image">
    <img src="${item.strMealThumb}" />
    <p>${item.strMeal}</p>
    </div>
    `

}).join("")

}

function gotoMeals (id){
    window.location.href = `/html/meals.html?i=${id}`
}
