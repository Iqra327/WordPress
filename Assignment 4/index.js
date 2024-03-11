// let input1 = parseInt(window.prompt("Enter Your Number: "));
// let input2 = parseInt(window.prompt("Enter your limit: "));
// if(input1 < 20 ){
//   for(let i=20; i=input1 * i; i--);
// }else(){
//   for(let i = 1; i=input1 * i; i++);
// }
// alert(input1);
// alert(input2);
// Accepting input from the user
let input1 = parseInt(window.prompt("Enter Your Number: "));
let input2 = parseInt(window.prompt("Enter your limit: "));

// Checking if the table is for integers less than 20
if (input1 < 20) {
  // Printing the table in reverse order
  for (let i = input2; i >= 1; i--) {
    // Displaying the result on an HTML document
    document.write(input1 + " x " + i + " = " + input1 * i + "<br><br>");
  }
} else {
  // Printing the table forward
  for (let i = 1; i <= input2; i++) {
    // Displaying the result on an HTML document
    document.write(input1 + " x " + i + " = " + input1 * i + "<br><br>");
  }
}
