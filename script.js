console.log("started")

function AwardButton() {
    console.log("recived input A")
    let change = document.getElementById("AwarderText").value;
    if (change == "") {
        document.getElementById("Give").innerHTML = "Empty";
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
        document.getElementById("Take").innerHTML = "Empty";
        console.log("that dont work")
    } else {
        document.getElementById("Take").innerHTML = change;
        console.log(change)
    }
}

function SetTime() {
    const date = new Date();

    const month = date.getMonth() + 1

    const day = date.getDay() + 2

    const year = date.getFullYear()

    combinedDate = month + "/" + day + "/" + year
    console.log(combinedDate)
    document.getElementById("Time").textContent = combinedDate
    // const dayMonthYear =
}

setInterval(SetTime, 1000)

function certificateChange(inputCertificate, left, middle, right) {
    document.getElementById("leImportant").src = inputCertificate

    document.getElementById("Give").style.transform = `translate(313px, ${left}px)`
    document.getElementById("Time").style.transform = `translate(0px, ${middle}px)`
    document.getElementById("Take").style.transform = `translate(-313px, ${right}px)`
    console.log(left, middle, right)
}
