const iteam_content_main = document.querySelector(".iteam_tittle");
const iteam_array = [{
    image: './images/imageHome/image 26.png',
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    price: 30,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    category: 1
},
{
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    price: 10,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 1,
    image: './images/imageHome/image 26 (1).png',

},
{
    image: './images/imageHome/image 26 (2).png',
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    price: 20,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 3
},
{
    image: './images/imageHome/image 26 (3).png',
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise ",
    price: 50,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 4
},
{
    image: './images/imageHome/image 26 (4).png',
    id: 5,
    name: "The Creamiest Creamy Chicken",
    price: 60,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 5
},
{
    image: './images/imageHome/image 26 (5).png',
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 15,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./images/imageHome/image 26 (5).png",
    category: 6
}

];

let item = "";
function showProduct(data) {
    iteam_content_main.innerHTML = "";
    data.forEach(function (iteam, index) {
        console.log(iteam, index);
        iteam_content_main.innerHTML += `<div class="col l-4 m-4 c-12 iteam">
                    <div class="iteam__img">
                        <a href="./detail.html?#detai_item?id=${index}"> 
                        
                        <img src="${iteam.image}">
                        </a>
                    </div>
                        <a href="./detail.html?#detai_item?id=${index}">
                        <h5 class="iteam--description">
                            ${iteam.name}
                        </h5>
                        </a>
                     <div class="iteam__time">
                        <p>
                            <img src="./images/icon/time.png">
                            30 Minutes
                        </p>
                        <p>
                            <img src="./images/icon/ForkKnife.png">
                            Snack
                        </p>   
                     </div>
                </div>`
    })
}


showProduct(iteam_array)

function showCategory() {

}


const filterSelect = document.querySelector("#filter-select")
function filterProduct() {
    const over30 = iteam_array.filter(function (item) {
        return item.price > 30
    })
    const under30 = iteam_array.filter(function (item) {
        return item.price <= 30
    })
    if (filterSelect.value == 'over30') {
        showProduct(over30)
    }
    if (filterSelect.value == 'under30') {
        showProduct(under30)
    }
    if (filterSelect.value == 'all') {
        showProduct(iteam_array)
    }
}
filterSelect.addEventListener("change", filterProduct)




// iteam_icon product
const category_list_img = document.querySelector(".row.category__list");


let ListCategory = [
    {
        id: 1,
        image: "./images/imageHome/image 25.png",
        name: "Breakfast"
    },
    {
        id: 2,
        image: "./images/imageHome/image 20.png",
        name: "Vegan"
    },
    {
        id: 3,
        image: "./images/imageHome/image 21.png",
        name: "Meat"
    },
    {
        id: 4,
        image: "./images/imageHome/image 22.png",
        name: "Dessert"
    },
    {
        id: 5,
        image: "./images/imageHome/image 23.png",
        name: "Lunch"
    },
    {
        id: 6,
        image: "./images/imageHome/image 24.png",
        name: "Chocolate"
    }
];
let htmls = ListCategory.map(function (value, index) {
    return ` <div class="col l-2 m-4 c-4  category__tittle">
<a href="./product.html?#list_category?id=${Number(index + 1)}">
<img src="${value.image}"></a> 

 <p>${value.name}</p>
</div>`
}).join("");
category_list_img.innerHTML = htmls;


// function detailProduct() {
//     const prdId = new URLSearchParams(window.location.search).get('id')
//     console.log(prdId)
//     const product = iteam_array.find(function(item){
//         return item.id == prdId
//     })
//     // console.log(product);
//     const detailProductDiv = document.querySelector('.detail-product')
//     // console.log(detailProductDiv);
//     detailProductDiv.innerHTML = `
//         <div class="product-info">
//             <h2>${product.name}</h2>
//             <p class="price">$ ${product.price}</p>
//             <p class="desc">${product.desc}</p>
//             <form action="">
//                 <input type="text" placeholder="Quantity">
//                 <button type="submit">Add To Cart</button>
//             </form>
//         </div>
//         <div class="product-img">
//             <img src="${product.image}" alt="">
//         </div>
//     `
// }
// detailProduct()