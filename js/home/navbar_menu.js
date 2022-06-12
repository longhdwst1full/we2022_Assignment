var icon_nav = document.querySelector(".menu__block");
var sub_menu_hide = document.querySelector('.sub_menu_hide');
var sub_menu_content = document.querySelector('.sub_menu_content');

function open_nav() {

    sub_menu_hide.classList.toggle("hidden");
}

icon_nav.addEventListener('click', open_nav);
sub_menu_hide.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        open_nav();
    }
});
