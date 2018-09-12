{

function func1(){
    var num= parseInt(document.getElementById("num1").value);
        if(num>0){
        document.getElementById("Ans").innerHTML="Positive";
        }
         if(num<0){
        document.getElementById("Ans").innerHTML="Negative";
     }
    }

function func2(){
    var num= parseInt(document.getElementById("num1").value);
    if(num%2==0){
        document.getElementById("Ans1").innerHTML="Even";
    }
    else{
        document.getElementById("Ans1").innerHTML="Odd";
    }
}

function func3(){
    var str=document.getElementById("str1").value;
    var len= str.length;
    if(len>=2){
        alert("Too much!");
    }
    else{
    if(str== str.toUpperCase()){
        alert("Capital letter");
    }
    if(str==str.toLowerCase()){
        alert("Small letter");
    }
}
}


function func4(){
    var str1=document.getElementById("input1").value;
    var str2=document.getElementById("input2").value;
    //var len1= str1.length;
    //var len2= str2.length;
    var len= str1.length-str2.length;
    if(len >0){
        document.getElementById("sp1").innerHTML="The longest";
        document.getElementById("sp2").innerHTML=" ";
    }
    if(len <0){
        document.getElementById("sp2").innerHTML="The longest";
        document.getElementById("sp1").innerHTML="....................................................";
    }
    if (len==0){
        document.getElementById("sp1").innerHTML="Equal";
        document.getElementById("sp2").innerHTML=" ";
    }
}

function func5(){
    var str1=document.getElementById("input1").value;
    var str2=document.getElementById("input2").value;
    var len1= str1.length;
    var len2= str2.length;
    var len= str1.length-str2.length;
    var absVal= absoluteValue(len);
    
        if (len1-len2>0){
        var cut1= str1.slice(0, len1-absVal);
        document.getElementById("input1").innerHTML=cut1;
    }
    else if(len1-len2<0){
        var cut2= str2.slice(0, len2-absVal);
        document.getElementById("input2").innerHTML=cut2;
    }

}

function func6(){
    var str= document.getElementById("str2").value;
    //var len = str.Lenght;
    //var index = 0;
   // while(index <= len/2 && str[index] == str[len - index - 1]) index++;

if(str.length==4){
if(str == str.split('').reverse().join('')){
    document.getElementById("p1").innerHTML="true";
}
else{
    document.getElementById("p1").innerHTML="false";
}
}
if(str.length !=4){
    alert("4 letters please!");
 }
}



        
       
   }












