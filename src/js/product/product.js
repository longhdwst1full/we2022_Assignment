const iteam_content_main = document.querySelector(".row .iteam_tittle");
const iteam_array = [{
        image: './src/images/imageProduct/image 26.png',
        description: "Fresh and Healthy Mixed Mayonnaise Salad",
        icon_time: "$30",
        icon_time_conten: "Add To Cart",
       
    },
    {
        image: './src/images/imageProduct/image 27.png',
        description: "The Creamiest Creamy Chicken",
        icon_time: "$30",
        icon_time_conten: "Add To Cart",
       
    },
    {
        image: './src/images/imageProduct/image 28.png',
        description: "Fruity Pancake with Orange & Blueberry",
        icon_time: "$30",
        icon_time_conten: "Add To Cart",
       
    },
    {
        image: './src/images/imageProduct/image 26.png',
        description: "Fresh and Healthy Mixed Mayonnaise Salad",
        icon_time: "$30",
        icon_time_conten: "Add To Cart",
       
    },
    {
        image: './src/images/imageProduct/image 27.png',
        description: "The Creamiest Creamy Chicken",
        icon_time: "$30",
        icon_time_conten: "Add To Cart",
       
    },
    {
        image: './src/images/imageProduct/image 28.png',
        description: "Fruity Pancake with Orange & Blueberry",
        icon_time: "$30",
        icon_time_conten: "Add To Cart",
       
    }

];

let item = "";
// let iteam_main_render =
iteam_array.forEach(function(iteam) {

    console.log(iteam);
    iteam_content_main.innerHTML += ` <div class="col l-4 m-4 c-12 iteam">
    <div class="iteam__img">
        <a href="#"><img src="${iteam.image}">
        </a></div>
        <a href=""> <h5 class="iteam--description">${iteam.description}</h5></a>
    <div class="iteam__time">
        <p>${iteam.icon_time}</p>
    </div>
    <button>${iteam.icon_time_conten}</button>
</div>
`
})