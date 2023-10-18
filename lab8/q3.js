Array.prototype.mySort = function() {
    this.sort();
}
/** Testing */
console.log(Array.prototype);
let arr = [1, 2, 5, 3, 9, 5];
console.log("Before sort " + arr);
arr.mySort();
console.log("After sort: " + arr);

