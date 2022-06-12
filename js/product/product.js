const iteam_content_main = document.querySelector(".row .iteam_tittle");
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


let iteam_tittle = document.querySelector(".iteam_tittle");
let url_id_product = document.location.hash.slice(document.location.hash.length - 1);


let showproduct = document.querySelector('.hien');
let showproduct_flex = document.querySelector('.flex');


function showProduct(data) {
    showproduct_flex.innerHTML = "";
    data.forEach((iteam, index) => {
        showproduct_flex.innerHTML += `
            <li class=""><a href="./product.html?id=${index+1}">
            ${iteam.name}
            </a>

            </li>`
    })
}

showProduct(ListCategory)


function show_iteam_array(data) {
    iteam_content_main.innerHTML = ""
    data.forEach(function (iteam, index) {

        // console.log(iteam);
        iteam_content_main.innerHTML += ` 
    <div class="col l-4 m-4 c-12 iteam">
        <div class="iteam__img">
            <a href="./detail.html?#detai_item?id=${index}">
            <img src="${iteam.image}">
            </a>
            </div>
            <a href="./detail.html?#detai_item?id=${index}"> 
            <h5 class="iteam--description">${iteam.name}</h5>
            </a>
            <div class="iteam__time">
            <p class="price_js">$${iteam.price}</p>
        </div>
    <button>Add To Cart</button>
</div>
`
    })
}



let ul_li_a = document.querySelectorAll("ul.flex li a");

let inde_id;


function layindex() {

    ul_li_a.forEach(function (item, index) {
        item.onclick = function (e) {
            e.preventDefault();

            inde_id = index + 1;
            filter_prod(inde_id);
        }
    })

}

function filter_prod(number) {
    console.log(number)
    let proId_1 = iteam_array.filter(function (item) {
        return item.category === number;
    })
    show_iteam_array(proId_1);

}

if (url_id_product) {

    filter_prod(Number(url_id_product))

}
else {
    show_iteam_array(iteam_array)

    layindex()
}

const hien_form_mobie = document.querySelector("#filterSelect");

let index_data_product = hien_form_mobie.querySelector("option").getAttribute('data-index');
console.log(index_data_product);
let opption_product = document.querySelectorAll("#filterSelect>option")

hien_form_mobie.addEventListener('change', function () {
    console.log(this)
    console.log(index_data_product)
    ListCategory.forEach(function (item, index) {
        if (hien_form_mobie.value == "") {
            show_iteam_array(iteam_array)
        }
        else if (hien_form_mobie.value == item.name) {
            console.log(item.name, index)
            filter_prod(Number(index) + 1);

        }

    })

})