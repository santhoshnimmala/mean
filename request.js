var request = require('request');


request('https://google.co.in',function(error,response,body) {
    
    if(!error&&response.statusCode===404){
        
        console.log(body)
    }
    else {
        
        console.log(error)
    }
  
});



