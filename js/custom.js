if (!window.CUSTOM_CURSOR_LOADED) {
    $("html").click(function(e) {
            var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
            var a = new Array
            ("通", "江", "止", "遇", "蟹", "臻", "山", "效", "果", "假", "宕", "梗", "曾", "流", "深", "咸", "幫", "滂", "並", "明", "端", "透", "定", "泥", "知", "徹", "澄", "孃", "來", "精", "清", "從", "心", "邪", "莊", "初", "崇", "生", "俟", "章", "昌", "常", "日", "書", "船", "以", "見", "溪", "羣", "疑", "影", "曉", "匣");
            var $i = $("<span/>").text(a[Math.floor(Math.random() * a.length)]);
         // a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
            y = e.pageY;
            $i.css({
                "z-index": 2147483647,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "font-size": "1rem",
                "color": randomColor
                  });
             $("html").append($i);
             console.log("Sample log");
             $i.animate({
                "top": y - 200,
                "opacity": 0
            },2000, function() {
                $i.css('display', 'none');
            });

    });
    window.CUSTOM_CURSOR_LOADED = true;
}
// // var a_idx = 0;
// jQuery(document).ready(function($) {
//     // var time = $.timeStamp;
//     var isClick = false;
//     $("html").click(function(e) {
//         // var timego = e.timeStamp - time;
//         // if(timego > 1536){
//             if (isClick) {
//                 isClick = false;
//                 return false;
//             }
//             var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
//             var a = new Array
//             ("通", "江", "止", "遇", "蟹", "臻", "山", "效", "果", "假", "宕", "梗", "曾", "流", "深", "咸");
//             var $i = $("<span/>").text(a[Math.floor(Math.random() * a.length)]);
//          // a_idx = (a_idx + 1) % a.length;
//             var x = e.pageX,
//             y = e.pageY;
//             $i.css({
//                 "z-index": 8,
//                 "top": y - 20,
//                 "left": x,
//                 "position": "absolute",
//                 "font-weight": "bold",
//                 "color": randomColor
//                   });
//              $("html").append($i);
//              console.log("Sample log");
//              $i.animate({
//                 "top": y - 200,
//                 "opacity": 0
//             },2000, function() {
//                 $i.css('display', 'none');
//             });

//             isClick = true;

//  // if (time == 0) {

//  //        time = 2; //设定间隔时间（秒）

 

//  //        //启动计时器，倒计时time秒后自动关闭计时器。

//  //        var index = setInterval(function(){

//  //            time--;

//  //            if (time == 0) {

//  //                clearInterval(index);

//  //            }

//  //        }, 2000);

//  //    }


// // };
// // };

// // time = e.timeStamp;
//     // });
//     // setTimeout('delay()', 2000);
// });
// });

// // function delay() {
// //     $(".buryit").removeAttr("onclick");
// // }

// // var a_idx = 0;
// // jQuery(document).ready(function($) {
// //     var fontAll = ["通", "江", "止", "遇", "蟹", "臻", "山", "效", "果", "假", "宕", "梗", "曾", "流", "深", "咸"];
// //     $("body").click(function (e) {
// //         var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
// //         var $i = $("<span/>").text(a[a_idx]);
// //         a_idx = (a_idx + 1) % a.length;
// //         var x = e.pageX,
// //         y = e.pageY;
// //         $i.css({
// //             "z-index": 5,
// //             "top": y - 20,
// //             "left": x,
// //             "position": "absolute",
// //             "font-weight": "bold",
// //             "color": randomColor
// //         });
// //         $("body").append($i);
// //         $i.animate({
// //             "top": y - 180,
// //             "opacity": 0
// //         },
// //             3000,
// //             function() {
// //                 $i.css('display', 'none');
// //         });

// //             });
// //         });

