var maxTime = 100;

var evenDouble = function(v,callback){
    
    
};

var handleResults = function(err,results,time){
    
    if(err){
        console.log("error:"+err.message);
    } else {
        console.log("the result are :" + results + "("+ time +"ms)");
        
    }
};

evenDouble(2,handleResults);

console.log("-------------");


module.exports.evenDouble = evenDouble;
