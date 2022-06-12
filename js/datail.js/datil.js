const iteam_array = [{
    image: './images/imageHome/image 26.png',
    id: 1,
    name:"Big and Juicy Wagyu Beef Cheeseburger",
    price:30,
    desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    category:1
},
{
    id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
       
        category:1,
    image: './images/imageHome/image 26 (1).png',
    
},
{
    image: './images/imageHome/image 26 (2).png',
    id: 3,
    name:"The Best Easy One Pot Chicken and Rice",
    price:20,
    desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    
    category: 3
},
{
    image: './images/imageHome/image 26 (3).png',
    id: 4,
    name:"Fresh and Healthy Mixed Mayonnaise ",
    price:50,
    desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    
    category: 4
},
{
    image: './images/imageHome/image 26 (4).png',
    id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
       
        category: 5
},
{
    image: './images/imageHome/image 26 (5).png',
    id: 6,
    name:"Fruity Pancake with Orange & Blueberry",
    price:15,
    desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image:"./images/imageHome/image 26 (5).png",
    category: 6
}

];


let id_url=Number(document.location.hash.slice(document.location.hash.length-1))
console.log(id_url)
let bander_datail=document.querySelector(".bander");
// function show_bander(data){
    // iteam_array.forEach(function(iteam){
    //     if(iteam.id==2){

        
        bander_datail.innerHTML =` <div class="col l-6 m-12 c-12 bander__content">


        <h2>${iteam_array[id_url].name}</h2>

        <h2> <span>$${iteam_array[id_url].price}</span></h2>

        <p class="bander__content--descr">${iteam_array[id_url].desc}</p>
        <form action="">

            <input type="text" name="" id="" placeholder="Quantity">
            <button>Add To Cart</button>

        </form>
    </div>
    <div class="col l-6 m-12 c-12">
        <div class="bander__img" id="detai_item">
            <a href="#"> <img src="${iteam_array[id_url].image}" alt=""></a>

        </div>
    </div>`
    // }})
// }


let iteam_tittle=document.querySelector('.iteam_tittle');

iteam_array.forEach((iteam)=>{
    if(iteam.id<4){
    iteam_tittle.innerHTML+=` 

    <div class="col l-4 m-4 c-12 iteam">
        <div class="iteam__img"><img src="${iteam.image}" alt=""></div>
        <h5 class="iteam--description">${iteam.name}</h5>
        <div class="iteam__time">
            <p>$${iteam.price}</p>
        </div>
        <button>Add To Cart</button>
    </div>

`}
})
