console.log("started")

function AwardButton() {
    console.log("recived input A")
    let change = document.getElementById("AwarderText").value;
    if (change == "") {
        document.getElementById("Give").innerHTML = "invalid";
        console.log("that dont work")
    } else {
        document.getElementById("Give").innerHTML = change;
        console.log(change)
    }
}

function ReceiveButton() {
    console.log("recived input R")
    let change = document.getElementById("ReceiverText").value;
    if (change == "") {
        document.getElementById("Take").innerHTML = "invalid";
        console.log("that dont work")
    } else {
        document.getElementById("Take").innerHTML = change;
        console.log(change)
    }
}

function SetTime() {
    const date = Date();
    console.log(date)
    // const dayMonthYear =
}

setInterval(SetTime, 1000)