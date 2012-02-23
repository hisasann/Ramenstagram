$(function () {

    var elem = $("#image_wrapper"),
        refresh = $("#refresh"),
        loading = $("#loading");

    refresh
        .bind("click", function() {
            get_instagram_image();
        })
        .trigger("click");

    function get_instagram_image() {
        loading.show();
        elem.html("");

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
            loading.hide();
            show_instagram_image(arrayShuffle(json.data));
        });

        xhr.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    }

    function show_instagram_image(json) {
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

});