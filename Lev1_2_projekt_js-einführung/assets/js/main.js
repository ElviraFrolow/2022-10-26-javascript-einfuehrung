function getColor(event) {
    event.preventDefault();
    let kaiserschmarrn = document.getElementById("text").value;
    document.body.style.backgroundColor = kaiserschmarrn;
    
    console.log(kaiserschmarrn)
}

