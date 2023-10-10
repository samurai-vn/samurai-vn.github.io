/** Problem 1 */
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'john',
    loginOK() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
/** Solution for problem 1 */
// askPassword(user.loginOK.bind(user), user.loginFail.bind(user))//using bind
// askPassword(()=>user.loginOK.call(user), ()=>user.loginFail.call(user)); //using call
// askPassword(()=>user.loginOK.apply(user), ()=>user.loginFail.apply(user)); //using appy
// const OK = function() {
//     user.loginOK();
// }
// const FAIL = function() {
//     user.loginFail();
// }
// askPassword(OK, FAIL); //using wrapper method
/**==================================================================================================== */
/** Problem 2 */
// let group = {
//     title: "OurGrpoup",
//     students: ["John", "Pete", "Alice"],

//     showlist: function () {
//         this.students.forEach(
//             function (student) {
//                 console.log(this.title + ": " + student);
//             }.bind(this))
//     }

// };
// group.showlist();




