
const $ = document.querySelector.bind(document);
let pro_control=$('#error_email_form')
const $$ = document.querySelectorAll.bind(document);
const email_form = $("#email_form");
    const pass_pass = $("#pass_pass");
const formSignin = $('.form_signin')
formSignin.onsubmit = function validate(e) {
    e.preventDefault();
    // console.log(1);
    

    let flage = true;
    var regex = /^([\w\.])+\@(([\w])+\.)+([\w]{2,4})+$/;


    // email
    if (email_form.value.length == 0) {
        show_error("error_email_form", "Mời bạn nhập vào email");
        flage = false;

    }
    else if (regex.test(email_form.value) == false) {
        show_error("error_email_form", "Bạn nhập sai định dạng email");
        flage = false;
    }

    else {
        show_error("error_email_form", "");
    }

    // pass_pass
    if (pass_pass.value.length == 0) {
        show_error("error_pass_pass", "Bạn chưa nhập trường này ");
        flage = false;
    }
    else {
        show_error("error_pass_pass", "");
    }

    if (flage == false) {
        return false
    }
    else {
        alert("Đăng Nhập thành công")
        return true;
    }


    window.location.assign('index.html')
}
function show_error(element, message) {
   
    document.getElementById(element).innerHTML = message;
    document.getElementById(element).style.color = "red";
    document.getElementById(element).style.fontSize = "15px";
    document.getElementById(element).style.textTransform = "unset";
    document.getElementById(element).style.margin = "0px 0px 20px";
}