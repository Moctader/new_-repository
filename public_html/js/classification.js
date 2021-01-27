/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function v10() {
    const ERROR = "Points should be between 0 - 60.";
    
    let points = Number(document.getElementById("points").value)

    
    if (points <= 29) {
        document.getElementById("grade").innerHTML = "fail";
        return;
    }
    if (points <= 34) {
        document.getElementById("grade").innerHTML = "satisfactory";
        return;
    }

    if (points <= 39) {
        document.getElementById("grade").innerHTML = "fair";
        return;
    }

    if (points <= 49) {
        document.getElementById("grade").innerHTML = "good";
        return;
    }

    if (points <= 60) {
        document.getElementById("grade").innerHTML = "excellent";
        return;
    } else {
        document.getElementById("grade_error").innerHTML = "grade_error";
        return;
    }

}

function v11() {
    const ERROR = "Hours should be between 0 - 24.";
    let clock = Number(document.getElementById("clock").value)

    if (clock <= 3 ){
        document.getElementById("greeting").innerHTML = "Good night";
        return;
    }

    if (clock <= 11 ){
        document.getElementById("greeting").innerHTML = "Good morning";
        return;
    }

    if (clock <= 17 ){
        document.getElementById("greeting").innerHTML = "Good afternoon";
        return;
    }

    if (clock <= 20 ){
        document.getElementById("greeting").innerHTML = "Good evening";
        return;
    }

    if (clock <= 24 ){
        document.getElementById("greeting").innerHTML = "Good night";
        return;
    } else {
        document.getElementById("clock_error").innerHTML = "clock_error";
        return;
    }



}

function v12() {
    const ERROR_NEG = "Number of guests cannot be negative.";
    const ERROR_DIGIT = "Number of guests must be integer.";
    const ERROR_FEW = "Party is cancelled due to too few guests."; 
    
    const ADDRESS1 = "Naapuritie 1";
    const ADDRESS2 = "Naapuritie 12";
    const ADDRESS3 = "Juhlasalintie 34";

    // 1.

    document.getElementById("shopping_list").innerHTML=""
    document.getElementById("address").innerHTML=""
    document.getElementById("party_error").innerHTML=""

    // 2.

    let vieraat = Number(document.getElementById("guests").Value)

    // 3.
    if (vieraat < 0) {
        document.getElementById("party_error").innerHTML = ERROR_NEG;
        return;

    }

    if (Number.isInteger(vieraat) === false) {
        document.getElementById("party_error").innerHTML = ERROR_DIGIT;
        return;
    }

    if (vieraat <= 3) {
        document.getElementById("party_error").innerHTML = ERROR_FEW;
        return;
    }

    // 4

    let makkarat = 0;
    let joumat = 0;
    let tomatti = 0;
    let munat = 0;
    let osoite = "";

    if (vieraat <= 15){
        // 4-15
        // sausages: 3, drinks: 5
        // tomatoes: 2, eggs: 1
        makkarat = 3 * vieraat;
        joumat = 5 * vieraat;
        tomatti = 2 * vieraat;
        munat = vieraat;
        osoite = ADDRESS1;

    } else {
        // 16
        // sausages: 2, drinks: 3
        // tomatoes: 1, eggs: 0.5 
        makkarat = 2 * vieraat;
        joumat = 3 * vieraat;
        tomatti = vieraat;
        munat = vieraat * 0.5;

        if (vieraat <= 50) {
            // 16-50
            osoite = ADDRESS2;
        } else {
            // 51 ..
            osoite = ADDRESS3;
        }
    }

    // 5
    document.getElementById("shopping_list").innerHTML=
      "shopping_list: <br>" + 
      "- Sausages" + makkarat + " pcs<br>" +
      "- Drinks" + joumat + " bottles<br>" +
      "- Tomatoes" + tomatti + " pcs<br>" +
      "- Eggs" + munat + " pcs" 

    document.getElementById("address").innerHTML= osoite;

  



}

function v13() {
	const ERROR = "Number of right answers cannot be bigger than number of questions.";
	const RES1 = "Less than 25% right, you should study more.<br>";
	const RES2 = "Less than 50% right, nearly passed.<br>";
	const RES3 = "More than 50% right, good work.<br>";
	const RES4 = "More than 75% right, excellent.<br>";
	
	const prize1 = '<img src="img/prize1.png">';
	const prize2 = '<img src="img/prize2.png">';
	const prize3 = '<img src="img/prize3.png">';
	const prize4 = '<img src="img/prize4.png">';
}





