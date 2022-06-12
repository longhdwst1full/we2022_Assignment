const header = document.querySelector(".header");
header.innerHTML = ` <div class="col l-2 m-2 header__logo">
<a href="./index.html"><img src="./images/icon/Logo.png" alt=""></a>
                    </div>
                    <div class="col l-6 m-7 header__menu">
                        <ul class="nav">
                            <!-- <i class='bx bx-menu'></i> -->
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./product.html">Products</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="./contactUs.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col l-4 m-3 header__signup">
                            <img class="cart_open_js" src="./images/icon/Cart.png" alt="">
                        <span class="menu__block">
                             <i class='bx bx-menu'></i>
                        </span>
                        <a href="./sign_in.html">
                            <button class="login">Sign In </button>
                        </a>
                        <a href="./refren.html">
                            <button class="registration">Sign Up</button>
                        </a>
                    </div>`