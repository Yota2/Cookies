var USERCOOKIENAME = "userName";

function setCookie(cookieName, cookieValue, expireDays) {

    var date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));

    var expires = "expires=" + date.toUTCString();

    document.cookie = cookieName + "=" + cookieValue + "; " + expires + ";path=/";
};

function getCookie(cookieName) {
    var name = cookieName + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];

        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        };

        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        };
    }
    return "";
};     

function removeCookie(cookieName){
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
};  