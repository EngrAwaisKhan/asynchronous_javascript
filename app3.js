console.log("start")

function PrintGreeting(msg, alertgreat){
    if(msg == "Morning"){
        Morning();
        alertgreat("Hello World, in Morning");
    }else if(msg == "Evening"){
        Evening();
        alertgreat("Hello World, in evening");
    }else{
        Night();
        alertgreat("Hello World, in Night");
    }
}

// Day times
function Morning(){
    alert("Morning");
}
function Evening(){
    alert("Evening");
}
function Night(){
    alert("Night");
}

// Alert Message
function alertgreat(msg){
    console.log(msg);
}

// calling PrintGreating function
function callback(){
    setTimeout(() => {
        PrintGreeting("Night", alertgreat)
    }, 3000); 
    setTimeout(() => {
        PrintGreeting("Evening", alertgreat)
    }, 2000);
    setTimeout(() => {
        PrintGreeting("Morning", alertgreat)
    }, 1000);
}

callback();
setTimeout(() => {
    console.log("end")
}, 3000);
