console.log("started")

function AwardButton() {
    console.log("recived input")
    let change = document.getElementById("AwarderText").value;
    document.getElementById("Give").innerHTML = change;
    console.log(change)
}