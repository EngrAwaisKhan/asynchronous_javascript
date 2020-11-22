console.log('Start Group') // 0.0005 sec

function Morning(){
    console.log("It's Morning, Please take Breakfast")
}

function AfterNoon(){
    console.log("It's AfterNoon, Please take Lunch")
}

function Night(){
    console.log("It's Night, Please take Dinner")
}
setTimeout(()=>{AfterNoon()}, 2000)
setTimeout(()=>{Night()}, 3000)
setTimeout(()=>{Morning()}, 1000)



console.log("End Group")