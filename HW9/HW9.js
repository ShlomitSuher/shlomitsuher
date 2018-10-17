{

function rand(num){
    var arr= [];
    var max=0;
    var i;
    var j;
    var counter=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(i=0; i<num; i++){
        arr.push(Math.floor(Math.random() * 10)); //random number between 0-9
        counter[arr[i]]++;
    }
        for(j=0; j<counter.length; j++){
                if(counter[j]>max){
                    max=j;
                }
            }
return max;
//return arr;
}
//var numb=prompt("enter a number");
//alert(rand(numb));
var i;

function arr(){
    var arrA= [2, 15, 32, 33, 13, 5, 28, 19, 104, 17, 48, 3];
    var arrB= [];
    for(i=0; i<arrA.length ; i++){
        if(arrA[i]==1 || arrA[i]==2|| arrA[i]==3||arrA[i]==5||arrA[i]==7){
            arrB.push(arrA[i]);
        }
        else if(arrA[i]%2==0 ||arrA[i]%3==0||arrA[i]%5==0||arrA[i]%7==0||arrA[i]%9==0){
            continue;
        }
        else{
            arrB.push(arrA[i]);
        }
    }
    arrB.sort(sortNumber);
    return arrB;
    //alert(arrB);
}

function sortNumber(a,b){
    return a - b;
}

function dice(){
    var num1= Math.floor(Math.random()*6)+1;
    var num2= Math.floor(Math.random()*6)+1;
    var total= num1+num2;
    document.getElementById("d1").innerHTML=num1;
    document.getElementById("d2").innerHTML=num2;
    document.getElementById("result").innerHTML="You rolled "+ total;
    if(num1==num2){
        document.getElementById("result").innerHTML="You rolled Doubles! get a free turn.";
    }
}


function btnplus(){
    document.calculator.display.value+="+";
    document.calculator.display.style.textAlign="left";
}

function btnsub(){
    document.calculator.display.value+="-";
    document.calculator.display.style.textAlign="left";
}

function btnmult(){
    document.calculator.display.value+="*";
    document.calculator.display.style.textAlign="left";
}

function btnmod(){
    document.calculator.display.value+="%";
    document.calculator.display.style.textAlign="left";
}

function btndot(){
    document.calculator.display.value+=".";
    document.calculator.display.style.textAlign="left";
}
function btndiv(){
    document.calculator.display.value+="/";
    document.calculator.display.style.textAlign="left";
}

function btndel(){
    var exp= document.calculator.display.value;
    document.calculator.display.value= exp.substring(0,exp.length-1);
}

function btnclean(){
    document.calculator.display.value=" ";
    document.calculator.display.style.textAlign="left";
}



}












