// $(document).ready(function () {
//     $.getJSON("https://api.icndb.com/jokes/random", function (json) {
//         $(".message").html((json.value.joke));
//     });
// });


$(".btn").on("click", function () {
    console.log('clicked');
    $.getJSON("https://api.icndb.com/jokes/random", function (json) {
        $(".message").html((json.value.joke));    
    });
    // console.log(.getJSON);
});






