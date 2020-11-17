function Convert(){
  if(document.getElementById("input").value!=""){
    let number=document.getElementById("input").value;
    if(document.getElementById("bin").checked==1){
        if(isBinary(number)){

    document.getElementById("output").value=Bin2Dec(number);
      }
        else {
        alert("Numarul nu este binar");
      }
    }
    else if (document.getElementById("dec").checked==1) {
      if(isDecimal(number)){
          document.getElementById("output").value=Dec2Bin(number);
      }
      else {
        alert("Insert a positive number")
      }
    }
  }
  else {
    alert("The fild is empty");
  }
}
function Dec2Bin(number){

let test=Number(number);
return test.toString(2);
}
function Bin2Dec(number){
  let returnedNumber=0;
  for(let i=number.length-1;i>=0;i--){
    returnedNumber+=Math.pow(2,number.length-1-i)*number[i];
  }
  return returnedNumber;
}
function ChangeText(){
  if(document.getElementById("bin").checked==1){
    document.getElementById("input").placeholder="Enter binary number";}
  else if (document.getElementById("dec").checked==1) {
    document.getElementById("input").placeholder="Enter decimal number";
}
    document.getElementById("input").value="";
    document.getElementById("output").value="";
}
function isBinary(number){
  let test=0;
  while (number>0) {
    test=number%10;
    if(test==1 || test==0){
      return true;
    }else
      return false;}}
function isDecimal(number){
  if(number>=0){
    return true ;
  }
  else return false;
}
