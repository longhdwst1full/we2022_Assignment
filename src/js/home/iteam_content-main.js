const iteam_content_main = document.querySelector(".iteam_tittle");
const iteam_array = [{
    image: './src/images/imageHome/image 26.png',
    description: "Big and Juicy Wagyu Beef Cheeseburger",
    icon_time: "./src/images/icon/time.png",
    icon_time_conten: "30 Minutes",
    icon_2dia: "./src/images/icon/dia.png",
    icon_3thia: "./src/images/icon/thia.png",
    icon_contetn: " Noodles"
},
{
    image: './src/images/imageHome/image 26 (1).png',
    description: "Fresh Lime Roasted Salmon",
    icon_time: "./src/images/icon/time.png",
    icon_time_conten: "30 Minutes",
    icon_2dia: "./src/images/icon/dia.png",
    icon_3thia: "./src/images/icon/thia.png",
    icon_contetn: " Noodles"
},
{
    image: './src/images/imageHome/image 26 (2).png',
    description: "The Best Easy One Pot Chicken and Rice",
    icon_time: "./src/images/icon/time.png",
    icon_time_conten: "30 Minutes",
    icon_2dia: "./src/images/icon/dia.png",
    icon_3thia: "./src/images/icon/thia.png",
    icon_contetn: " Noodles"
},
{
    image: './src/images/imageHome/image 26 (3).png',
    description: "Fresh and Healthy Mixed Mayonnaise ",
    icon_time: "./src/images/icon/time.png",
    icon_time_conten: "30 Minutes",
    icon_2dia: "./src/images/icon/dia.png",
    icon_3thia: "./src/images/icon/thia.png",
    icon_contetn: " Noodles"
},
{
    image: './src/images/imageHome/image 26 (4).png',
    description: "The Creamiest Creamy Chicken",
    icon_time: "./src/images/icon/time.png",
    icon_time_conten: "30 Minutes",
    icon_2dia: "./src/images/icon/dia.png",
    icon_3thia: "./src/images/icon/thia.png",
    icon_contetn: " Noodles"
},
{
    image: './src/images/imageHome/image 26 (5).png',
    description: "Fruity Pancake with Orange & Blueberry",
    icon_time: "./src/images/icon/time.png",
    icon_time_conten: "30 Minutes",
    icon_2dia: "./src/images/icon/dia.png",
    icon_3thia: "./src/images/icon/thia.png",
    icon_contetn: " Noodles"
}

];
/*
<div class="row iteam_tittle">                  
           <div class="col l-4 m-4 c-12 iteam">
              <div class="iteam__img"><img src="./images/image 26 (4).png" alt=""></div>
               <h5 class="iteam--description">Big and Juicy Wagyu Beef Cheeseburger</h5>
                  <div class="iteam__time">
                    <p><img src="./src/images/icon/time.png" alt=""> 30 Minutes</p>
                 <p><img src="./src/images/icon/dia.png" alt=""><img src="./src/images/icon/thia.png" alt="">
                                Noodles</p>
                        </div>
                    </div>
                </div> 


**/
let item = "";
// let iteam_main_render =
iteam_array.forEach(function (iteam) {

    console.log(iteam);
    iteam_content_main.innerHTML += `<div class="col l-4 m-4 c-12 iteam">
                <div class="iteam__img">
                <a href="./detail.html">  <img src="${iteam.image}"></a>
                </div>
                <a href="./detail.html"> <h5 class="iteam--description">
                    ${iteam.description}
                 </h5></a>
                 <div class="iteam__time">
                    <p>
                        <img src="${iteam.icon_time}">
                            ${iteam.icon_time_conten}
                    </p>
                    <p>
                        <img src="${iteam.icon_2dia}">
                        <img src="${iteam.icon_3thia}">
                            ${iteam.icon_contetn}
                    </p>   
                 </div>
            </div>`
})