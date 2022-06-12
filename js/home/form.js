function show_error(element, message) {
    document.getElementById(element).innerHTML = message;
    document.getElementById(element).style.color = "red";
    document.getElementById(element).style.fontSize = "15px";
    document.getElementById(element).style.textTransform = "unset";
    document.getElementById(element).style.margin = "7px 0px";
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function validate() {
    const hoten = $("#hoten");
    const email = $("#email");
     const subject = $("#subject");
    const messages = $("#messages");
    const ENquiry = $("#ENquiry");
    let flage = true;
    var regex = /^([\w\.])+\@(([\w])+\.)+([\w]{2,4})+$/;
    var regSDT = /^0[0-9]{9}$/;
    // hotenn
    if (hoten.value.length == 0) {
        show_error("error_name", "Bạn chưa nhập trường này ");
        flage = false;
    }
    else {
        show_error("error_name", "");
    }

// subject
    if (subject.value.length == 0) {
        show_error("error_subject", "Bạn chưa nhập trường này ");
        flage = false;
    }
    else {
        show_error("error_subject", "");
    }

// email
    if (email.value.length == 0) {
        show_error("error_email", "Mời bạn nhập vào email");
        flage = false;

    }
    else if (regex.test(email.value) == false) {
        show_error("error_email", "Bạn nhập sai định dạng email");
        flage = false;
    }

    else {
        show_error("error_email", "");
    }


// messages
    
    if (messages.value == "") {
        show_error("error_messages", "Mời bạn nhập vào thông điêp nào ");
        flage = false;

    }
   
    else {    
        show_error("error_messages", "");
    }


    
        if (ENquiry.value=="") {
            show_error("error_ENquiry", "Bạn chưa chọn loại nào cả");
            flage = false;
            return false;
        }
        else show_error("error_ENquiry", "");


 

    if (flage == false) {
        return false
    }
    else {
        alert("Bạn đã gửi thành công")
        return true;
    }
}
