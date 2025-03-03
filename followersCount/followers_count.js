let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count==10){
        alert("10 Followers alert");
    }
    else if(count==20){
        alert("20 followers alert");
    }
}