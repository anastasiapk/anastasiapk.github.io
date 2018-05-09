//    var list = [
//        "YES!",
//        "Try again later",
//        "Nope..",
//        "Inable to determine.",
//        "Wouldn't rely on that.",
//        "Reply hazy, try again.",
//        "My reply is no.",
//        "Very doubtful.",
//        "Don't count on it.",
//        "Certainly",
//        "Shake me again",
//        ];
//
//function response() { 
//    var list = [
//        "YES!",
//        "Try again later",
//        "Nope..",
//        "Inable to determine.",
//        "Wouldn't rely on that.",
//        "Reply hazy, try again.",
//        "My reply is no.",
//        "Very doubtful.",
//        "Don't count on it.",
//        "Certainly",
//        "Shake me again",
//        ];
//    
//}
//
//
//$("#submit").on("click", function () {
//
//        console.log("test");
//    var number = Math.floor(Math.random()*11)
//        document.getElementById("response").innerHTML = list[1];
//  
//    var output = $("#list");
//
//    output.html (list);
//
//});





function response() { 
var list = [
    "YES!",
    "Try again later",
    "Nope..",
    "Inable to determine.",
    "Wouldn't rely on that.",
    "Reply hazy, try again.",
    "My reply is no.",
    "Very doubtful.",
    "Don't count on it.",
    "Certainly",
    "Shake me again",
    ];


    console.log("test");
var number = Math.floor(Math.random()*11)
    document.getElementById("response").innerHTML = list[number];
}


$("#submit").on("click", function response() {


var output = $("#list");
output.html (list);

});






//
//$("#submit").submit(function (event) {
//    
//    
//    console.log("test");
//    var number = Math.floor(Math.random()*11)
//    $("response").text(list[number]).show();
//    return;
////    document.getElementById("response").innerHTML = list[number];
////  
////    var output = $("#list");
////    output.html (list);
//
//});
//





//    
//    
//    items.push(list_item);
//    
//
//var output = $("#list");
//var list = " ";
//for(var i = 0; i < items.length; i++) {
//    list = list + "<p>" + items[i] + "</p>"
//}
//
//    
//    output.html (list);
//
//
//});
//
