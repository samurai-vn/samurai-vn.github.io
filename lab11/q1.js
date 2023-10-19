Array.prototype.even = function() {
    return this.filter(e => e % 2 == 0); 
}

Array.prototype.odd = function(){
    return this.filter(e => e % 2 != 0);
}