$(function () {

    var user = getCookie(USERCOOKIENAME);

    if (user != "") {
        $('#welkomAlias').text(user);
    } else {
        window.location = "login.html";
    };

    $('#logoutButton').click(function () {
        removeCookie(USERCOOKIENAME);
    });

});