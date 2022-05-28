const category_list_img = document.querySelector(".row.category__list");
let array_category_img = [
    {
        image: "./src/images/imageHome/image 25.png",
        description: "Breakfast"
    },
    {
        image: "./src/images/imageHome/image 20.png",
        description: "Vegan"
    },
    {
        image: "./src/images/imageHome/image 21.png",
        description: "Meat"
    },
    {
        image: "./src/images/imageHome/image 22.png",
        description: "Dessert"
    },
    {
        image: "./src/images/imageHome/image 23.png",
        description: "Lunch"
    },
    {
        image: "./src/images/imageHome/image 24.png",
        description: "Chocolate"
    }
];
let htmls = array_category_img.map(function (value) {
    return ` <div class="col l-2 m-4 c-4  category__tittle">
<a href="#"><img src="${value.image}"></a> 

 <p>${value.description}</p>
</div>`
}).join("");
category_list_img.innerHTML = htmls;
/** 
<div class="col l-2 m-4 c-4  category__tittle">
  <a href=""><img src="./src/images/imageHome/image 24.png"></a> 
  <p>Chocolate</p>
</div> */