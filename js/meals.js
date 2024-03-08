    const urlParams = new URLSearchParams(window.location.search)
    let idParams = urlParams.get("i")
    const API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
    async function getService (){
        try {
            const res = await fetch(API)
            const data = await res.json()
            console.log(data.meals[0])
            showService(data.meals[0])
        } catch (error) {
            console.log(error)
        }
    }

getService()
let mainContent = document.querySelector(".main-content")

function showService (data){
    let ingrid = ""
    for(let i=0;i<20;i++){
        let showIngrid = data["strIngredient"+i]
        if(showIngrid){
            ingrid+=`
            <div class="ingrid-image">
            <img src="" alt="">
            <p><${showIngrid}/p>
        </div>
            `
        }
    }


    mainContent.innerHTML = `
    
            
    <div class="text-main">
    <div class="flag-info">
        <img src="https://www.themealdb.com/images/icons/flags/big/32/ru.png" alt="">
        <h2>Lamb Pilaf (Plov)</h2>
    </div>
    <h4>

        Ingredients</h4>
</div>



<div class="main-container">
    <div class="image-content">
        <img src="${data.strMealThumb}" alt="">
    </div>

    <div class="ingrid-container">${ingrid}
  
       
    </div>

</div>

    `
}