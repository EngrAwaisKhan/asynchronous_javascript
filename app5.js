console.log("start");
const anyfunction = () =>{
    return(((Math.floor(Math.random() * 10)) %2) ===0) ? true: false
}

const resolvefunction = () => console.log("success");
const rejectfunction = () => console.log("failure");

const result = new Promise((resolve, reject)=> {
    setTimeout(() => {
        anyfunction() ? resolve() : reject()
    }, 2000);
})

    result.then(resolvefunction).catch(rejectfunction);


    console.log("Hello World");