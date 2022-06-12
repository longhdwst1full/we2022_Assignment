const iteam_content_main = document.querySelector(".row .iteam_tittle");
const iteam_array = [{
    image: 'https://bears.vn/wp-content/uploads/2019/08/1-3.jpg',
    id: 1,
    name: "Pizza thập cẩm",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae repellat et inventore aliquid animi ea nisi eius quas veniam quisquam ullam quos ab commodi reiciendis veritatis perferendis, dolorum harum?",
    category: 1
},
{
    id: 2,
    name: "Pasta- mì ý thượng hạng",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae repellat et inventore aliquid animi ea nisi eius quas veniam quisquam ullam quos ab commodi reiciendis veritatis perferendis, dolorum harum?",

    category: 2,
    image: 'https://cdn.daynauan.info.vn/wp-content/uploads/2018/03/hinh-mi-y-xot-bo-bam.jpg',

},
{
    image: 'https://afamilycdn.com/150157425591193600/2021/4/20/base64-1618910967516899249294.png',
    id: 3,
    name: "Salad - rau củ quả",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae repellat et inventore aliquid animi ea nisi eius quas veniam quisquam ullam quos ab commodi reiciendis veritatis perferendis, dolorum harum?",

    category: 3
},
{
    image: 'https://www.top10vietnam.vn/wp-content/uploads/2020/06/cua-hang-bbq-chicken.jpg',
    id: 4,
    name: "BBQ Chicken  dai ngon đến từng vị",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae repellat et inventore aliquid animi ea nisi eius quas veniam quisquam ullam quos ab commodi reiciendis veritatis perferendis, dolorum harum?",

    category: 4
},
{
    image: 'https://xebanhmithonhiky.vn/wp-content/uploads/2020/11/kinh-doanh-banh-mi-humberger-1024x768.jpg',
    id: 5,
    name: "Humberger thập cẩm",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae repellat et inventore aliquid animi ea nisi eius quas veniam quisquam ullam quos ab commodi reiciendis veritatis perferendis, dolorum harum?",

    category: 5
},
{
    image: 'https://khoaikhau.com/wp-content/uploads/2020/09/mon-beefsteak-da-chuan-bi-xong-tai-mot-steakhouse.jpg',
    id: 6,
    name: "Beefsteak-thịt bò hảo hạng",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repudiandae repellat et inventore aliquid animi ea nisi eius quas veniam quisquam ullam quos ab commodi reiciendis veritatis perferendis, dolorum harum?",

    category: 6
}
];



let ListCategory = [
    {
        id: 1,
       
        name: "Pizza"
    },
    {
        id: 2,
       
        name: "Pasta"
    },
    {
        id: 3,
        name: "Salad"
    },
    {
        id: 4,
        name: "BBQ Chicken"
    },
    {
        id: 5,
        name: "Humberger"
    },
    {
        id: 6,
        name: "Beefsteak"
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
            <a href="#">
            <img src="${iteam.image}">
            </a>
            </div>
            <a href="#"> 
            <h5 class="iteam--description">${iteam.name}</h5>
            </a>
           
            <p class="iteam--description">${iteam.desc}</p>  
            
</div>
`
    })
}



let ul_li_a = document.querySelectorAll("ul.flex li a");
let all = document.querySelector(".all");

let inde_id;
all.onclick=function(e) {
    console.log(e.target)
    show_iteam_array(iteam_array)
}

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
