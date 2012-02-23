$(function () {

    var elem = $("#image_wrapper");

    get_instagram_image();

    function get_instagram_image() {
        var TAG_NAME = "ramen";
        var xhr = $.ajax({
            url:"https://api.instagram.com/v1/tags/" + TAG_NAME + "/media/recent",
            type:"GET",
            data:{
                "access_token":"197750.f59def8.d84e874c9cf74779a2df73cc4e53056f"
            },
            cache:false,
            dataType:"jsonp"
        });

        xhr.done(function (json) {
            console.log(json);
            show_instagram_image(arrayShuffle(json.data));
        });

        xhr.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    }

    function show_instagram_image(json) {
        elem.html("");

        var html = [];
        $.each(json, function (index, data) {
            html.push('<a href="' + data.link + '" target="_blank"><img src="' + data.images.low_resolution.url + '"></a>');
        });

        elem.html(html.join(""));
    }

    function arrayShuffle(list) {
        var i = list.length;

        while (--i) {
            var j = Math.floor(Math.random() * (i + 1));
            if (i == j) continue;
            var k = list[i];
            list[i] = list[j];
            list[j] = k;
        }
        return list;
    }

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