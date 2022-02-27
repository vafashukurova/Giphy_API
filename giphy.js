
var giphy = function () {
    $(".btn").on('click', function (e) {

        e.preventDefault()

        $.ajax({
            url : "https://api.giphy.com/v1/gifs/search?api_key=3DpJ6yvYHR5dLfeDhGDXLaeCCdEGHE2p&q=" + $(this).text() + "&limit=25&offset=0&rating=g&lang=en",
            method: "GET",
            success: function (response) {
                $(".giphy-content img").remove();
                for (let i = 0; i <= 10; i++) {
                    var img = $('<img id="dynamic">');
                    img.attr('src', response.data[i].images.original.url);
                    img.appendTo('.giphy-content');
                }
            }
        });

        // $(".giphy-content").empty();
    });
}

$(".button").on("click", giphy);
$("#submit").click(function () {
    var imgName = $(".search-content input");
    var btn = $('<button class="btn" type="submit" id="animalName">');
    btn.html(imgName.val());
    $(".button").append(btn);
    imgName.val();
});