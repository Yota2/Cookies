$(function () {

    var user = getCookie(USERCOOKIENAME);

    if (user != "") {
        window.location = "pages/welkom.html";
    } else {
        window.location = "pages/login.html";
    };
});