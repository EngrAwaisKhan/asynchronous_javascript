console.log("Start");

function success(){
    console.log("Success");
}

function failure(){
    console.log("Failure");
}

function ChkUserPromise(userinput, success, failure){
    userinput === true ? success() : failure();
}

ChkUserPromise(true, success, failure);
console.log("End");