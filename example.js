var getDies = function(size) {
    
    var result = Math.ceil(size*Math.random());
    return result;
};

var roll = getDies(5)

if (roll<=2 && roll<=3){
    
    console.log("greate roll");
}

console.log(roll)