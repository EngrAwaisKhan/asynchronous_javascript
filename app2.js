function printgreeting(msg, alertgreeting){
    alertgreeting(msg)
}

function alertgreeting(msg){
    alert(msg)
}

printgreeting("Hello World", alertgreeting)