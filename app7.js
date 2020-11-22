console.log("start");

function API_Fetch(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("new Promise")
            // resolve("data")
            reject("Define Error Here,")
        },1000)
    })
    return promise
}

async function _asyncJS(){
    try{
        let data = await API_Fetch()  //true, complete
        console.log(data, "successful")
    }catch(error){
        console.log(error, "error")
    }
}

_asyncJS()

setTimeout(function() {
    console.log("end");
}, 2000) 