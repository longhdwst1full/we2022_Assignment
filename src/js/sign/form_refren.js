function show_error(element, message) {
    document.getElementById(element).innerHTML = message;
    document.getElementById(element).style.color = "red";
    document.getElementById(element).style.fontSize = "15px";
    document.getElementById(element).style.textTransform = "unset";
    document.getElementById(element).style.margin = "0px 0px 20px";
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function validate() {
    
    const email_form = $("#email_form");
     const pass_pass = $("#pass_pass");
     const pass_pass_repla = $("#pass_pass-repla");
    
    let flage = true;
    var regex = /^([\w\.])+\@(([\w])+\.)+([\w]{2,4})+$/;
    
   
// pass_pass
    if (pass_pass.value.length == 0) {
        show_error("error_pass_pass", "Bạn chưa nhập trường này ");
        flage = false;
    }
    else {
        show_error("error_pass_pass", "");
    }


    if(pass_pass_repla.value=="") {
        show_error("error_pass_pass-repla", "Bạn chưa nhập trường này ");
        flage = false;
    }
    else if(pass_pass_repla.value!=pass_pass.value) {
        show_error("error_pass_pass-repla", "Mật khẩu không trùng");
        flage = false;

    }
    else{
        show_error("error_pass_pass-repla", "");
       

    }
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


    if (flage == false) {
        return false
    }
    else {
        alert("Đăng kí thành công")
        return true;
    }
}
