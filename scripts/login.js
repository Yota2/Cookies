$(function () {

    var user = getCookie(USERCOOKIENAME);

    if (user != "") {
        window.location = "welkom.html";
    };

    $('#loginButton').click(function (e) {
        var userName = $('#alias').val();

        if (userName != "") {
            setCookie(USERCOOKIENAME, userName, 365);
            window.location = "welkom.html";
        };

    });

});