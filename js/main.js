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
            url:"http://www28039u.sakura.ne.jp/instagram_tag",
            type:"GET",
            data:{
                "tag":TAG_NAME
            },
            cache:false,
            dataType:"json"
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

    // instagramの画像URLがクロスドメインで取れないからダメだ。
    function show_instagram_glitch_image(json) {
        var image, anchor;
        
        $.each(json, function (index, data) {
            var xhr = $.ajax({
                type: "GET",
                url: data.images.low_resolution.url,
                cache: false,
                beforeSend: function(xhr){
                    xhr.overrideMimeType("text/plain; charset=x-user-defined");
                }
            });

            xhr.done(function (json) {
                var type = xhr.getResponseHeader("Content-Type");

                image = $("<img/>")
                    .attr("src", [
                        'data:',
                        type,
                        ';base64,',
                        base64encode(xhr.responseText.replace(/0/g, Math.floor(Math.random() * 10))),
                    ].join(''))
                anchor = $("<a/>")
                    .attr({
                        "href": data.link,
                        "target": "_blank"
                    })
                    .append(image);

                elem.append(anchor);
            });

            xhr.fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
        });
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