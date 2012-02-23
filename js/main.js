$(function() {

//    var code = is_has_code();
//    if (code) {
//        save_access_token(code);
//    } else {
//        if (!code) {
//            show_oauth_authorize();
//        }
//    }
//
//    $("#refresh").click(function() {
//
//    });
//
//    function is_has_code() {
//        var query = window.location.search.substring(1);
//        var param = query.split("=");
//
//        if (param[0] !== "code") {
//            return null;
//        }
//
//        return param[1];
//    }
//
//    function is_has_access_token() {
//        return !!$.cookie("access_token");
//    }
//
//    function save_access_token(code) {
//        var xhr = $.ajax({
//            url: "https://api.instagram.com/oauth/access_token",
//            type: "POST",
//            data: {
//                "client_id": "a09cc5c96225438dbbe830c0dac2ab69",
//                "client_secret": "ada9cc93f616443c8aaab3f8779309c0",
//                "grant_type": "authorization_code",
//                "redirect_uri": "http://hisasann.github.com/Ramenstagram/",
//                "code": code
//            },
//            cache: false,
//            dataType: "json"
//        });
//
//        xhr.done(function(json) {
//            console.log(json);
//            $.cookie("access_token", json.access_token, { path: "/", expires: 365 });
//        });
//
//        xhr.fail(function(jqXHR, textStatus) {
//            alert( "Request failed: " + textStatus );
//        });
//    }
//
//    function show_oauth_authorize() {
//        location.href = "https://api.instagram.com/oauth/authorize/?client_id=a09cc5c96225438dbbe830c0dac2ab69&redirect_uri=http://hisasann.github.com/Ramenstagram/&response_type=code";
//    }
});