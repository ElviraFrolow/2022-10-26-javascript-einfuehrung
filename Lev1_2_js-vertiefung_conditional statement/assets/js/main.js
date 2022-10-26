function getValue(event) {
    event.preventDefault();
    
    const kaiserschmarrn = document.getElementById("number-input").value;

    if (kaiserschmarrn <=10 && kaiserschmarrn >=8) { 
        console.log("Super");
    }

    else if (kaiserschmarrn <=7 &&  kaiserschmarrn >=6) {
        console.log("gut");
    }

    else if (kaiserschmarrn <=5 &&  kaiserschmarrn >=3) {
        console.log("okay");
    }

    else if (kaiserschmarrn >= 10 ) {
        console.log("error");
    }

    else  {
        console.log("schlecht");
    }

}