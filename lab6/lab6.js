// console.log(window)
// console.log(window.document)
// console.log(location);
// document.write("<br>" + location.protocol)
// document.write("<br>" + location.hostname)
// document.write("<br>" + location.port)
// document.write("<br>" + navigator)

// foo("hi", 23)
// function foo(arg) {
//     if(arg) {
//         var str = "hello"
//     }
//     console.log(str)
// }

// function b() {
//     function a() {
//         if(x==10) {
//             var x = 15;
//         }
//         console.log(x)
//     }
//     x = 10;
//     a();
// }
// var x = 20;
// b();


// var a = 1;
// let b = 2;
// function outer() {  
//     let c = 3;
//     var d = 4;
//     return function inner() {
//         let b = 5;
//         let c = 6;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log(d);
//     }
// }

// outer()()
// x = 1
// var a = 5
// var b = 10
// var c = function(a, b, c) {
//     document.write(x);
//     document.write(a);
//     var f = function(a, b, c) {
//         b = a;
//         document.write(b);
//         b = c;
//         var x = 5;
//     }
//     f(a, b, c);
//     document.write(b);
//     var x = 10;
// }
// c(8, 9, 10);
// document.write(b);
// document.write(x);

// var x = 9;
// function myFunction() {
//     return x*x;
// }
// document.write(myFunction());
// x = 5;
// document.write(myFunction());

var foo = 1;
function bar() {
    if(!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();