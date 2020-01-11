/*  Anna Sullivan
    sullivan_a04b.js
    INFO2124WW
    Thoendel
    1/11/2020
*/

{
    let firstName = "Anna";
    let weightIlbs = "240.22";
    let heightInches = 68.99;
    let ageYears = "25";
    const marsGravity = 0.38;
    const inchesToMeters = 2.54;
    
    console.log(`\nHello there, ${firstName}! On earth you weigh ${parseFloat(weightIlbs)} pounds.
But, since gravity is weaker on the Mars, you would only weight ${parseFloat(weightIlbs) * marsGravity} pounds there! \n
Neat huh? Want to know what else is neat? \n
Mars takes longer to rotate around the Sun than does Earth. This means the Mars year is actually
longer than our "terran" year. So although you are ${parseInt(ageYears)} years old on Earth, you're
only ${Number(ageYears) * 365 / 687} years old on Mars. \n
Did you know, the European Space Agency requires potential astronauts to measure between 
153 and 190 cm? Just incase you ever decide to move to Europe and want to be
an astronaut, your height in metric is ${String(heightInches * inchesToMeters)} cm.`);
    

}