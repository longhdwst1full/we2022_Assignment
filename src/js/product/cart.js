const list_category = document.querySelector(".row.content__main");

const btn_buy = list_category.querySelectorAll("button");
let item_product = document.querySelector(".iteam");
btn_buy.forEach(function (btn, index) {
    // console.log(btn, index);
    btn.onclick = function () {

        let btn_current = this;
        let product_paren_btn = btn_current.parentElement
        // getData()
        let img_product = product_paren_btn.querySelector("img").src
        let name_product = product_paren_btn.querySelector("h5").innerText
        let price_product = product_paren_btn.querySelector("p.price_js").innerText;

        console.log(price_product.slice(1));
        let price__ = price_product.slice(1);

        add_cart_product(img_product, name_product, price__)
        // console.log(img_product)
    }

})
function add_cart_product(img_product, name_product, price_product) {
    let addtr = document.createElement("tr");


    let carItem = document.querySelectorAll('tbody tr');


    for (let i = 0; i < carItem.length; i++) {
        let proctT = document.querySelectorAll(".naem_prod")
        if (proctT[i].innerHTML == name_product) {
            let msg = "Sản phầm này đã có trong giở hàng rồi";
            alert(msg);
            return;
        }
    }



    let trcontent = `
        <tr>
            <td style="">
                <span class="naem_prod">${name_product}</span>
            </td>

            <td>
                    <img src="${img_product}" alt="">
            </td>
            <td>
                <p><span>${price_product}</span></p>
            <td>
                <input type="number" style="" value="1" min="1" max="">
            </td>
            <td style="cursor: pointer;">
                <button>Xóa</button>
            </td>
        </tr>`;
    addtr.innerHTML = trcontent;
    let cartTable = document.querySelector("tbody");
    cartTable.append(addtr);
    total_products()
    delete_cart()
}


function total_products() {
    let carItem = document.querySelectorAll('tbody tr');
    let total_detal = 0;

    for (let i = 0; i < carItem.length; i++) {
        let input_Value_product = carItem[i].querySelector("input").value;

        console.log(input_Value_product)

        let price_Value_product = carItem[i].querySelector("p span").innerText;

        console.log(price_Value_product)


        total1 = input_Value_product * Number(price_Value_product)
        total_detal += total1;
    }
    let show_price_total = document.querySelector(".tt_show");
    show_price_total.innerHTML = total_detal;

    inputchange();
}


function delete_cart() {
    let carItem = document.querySelectorAll('tbody tr');

    for (let i = 0; i < carItem.length; i++) {
        let proct_delete = document.querySelectorAll("td button");
        // console.log(proct_delete)
        proct_delete[i].addEventListener("click", function (e) {

            let proct_delete_item = e.target;
            let cartitem = proct_delete_item.parentElement.parentElement;
            cartitem.remove();
            total_products()

        })


    }
}

function inputchange() {
    let carItem = document.querySelectorAll('tbody tr');

    for (let i = 0; i < carItem.length; i++) {
        let inputValue = carItem[i].querySelector("td input");
        inputValue.addEventListener("change", function () {
            total_products();
        })
    }
}




const opent_cart = document.querySelector(".cart_open_js");


var container223 = document.querySelector('.container223');


function open_nav() {

    container223.classList.toggle("hidden");
}

opent_cart.addEventListener('click', open_nav);
container223.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        open_nav();
    }
});
// opent_cart.onclick=function(){
//    container223.classList.toggle("hidden")
// }