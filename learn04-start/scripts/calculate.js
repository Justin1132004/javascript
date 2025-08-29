    var numrooms = 1

function addDate(){
    let today = new Date();
    document.getElementById("mydate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
}

function estimate() {

    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;

    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
    let cost2 = (totalSqFt2 * .65);
    document.getElementById("rm2cost").value = cost2;

    let length3 = parseFloat(document.getElementById("rm3length").value);
    let width3 = parseFloat(document.getElementById("rm3width").value);
    let height3 = parseFloat(document.getElementById("rm3height").value);
    let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
    let cost3 = (totalSqFt3 * .65);
    document.getElementById("rm3cost").value = cost3;

    var totalcost = cost 
    if (numrooms == 2){ //Again, used an external source here after listening to what she was saying in the third video. I am putting these credit comments to show I'm not using AI or anything to get ahead and to see if I sought out the right resources. https://www.w3schools.com/js/js_if_else.asp
    var totalcost = cost + cost2
    }
    if (numrooms == 3){
    var totalcost = cost + cost2 + cost3
    }
    document.getElementById("estimate").innerHTML = (name + ", your estimate is $ " + totalcost);
}

function showoneroom() {
    numrooms = 1
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
}

function showtworooms() {
    numrooms = 2
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "none";
}

function showthreerooms() {
    numrooms = 3
    document.getElementById("room2").style.display = "block";
    document.getElementById("room3").style.display = "block";
}