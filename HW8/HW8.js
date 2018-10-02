{



function even(){
    var i=-50;
    var str= " ";
    while(i<=380){
        if(parseInt(i%2)==0){
            str+= i+" ";
            i++;
        }
        else{
            i++;
        }
    }

    document.getElementById("b7").innerHTML=str;
}


function randomNum(){
    var res= Math.floor(Math.random()*1000-1)+1;
    document.getElementById("p1").innerHTML=res;
}

function Reverse(){
    var word= document.getElementById("input1").value;
    var len= word.length;
    var revWord= " ";

    for(i= len-1; i>=0; i--){
        revWord= revWord+ word.charAt(i);
    }
    document.getElementById("p2").innerHTML=revWord;
}

function func(int1){
    var int1= parseInt(document.getElementById("num1").value);
    var length= 0;
    var temp=1;
    if(int1==0){
        document.getElementById("p3").innerHTML="1";
    }
    else if(int1<0){
        int1= int1*(-1);
        while(temp<=int1){
            temp*=10;
            length++;
        }
        document.getElementById("p3").innerHTML=length;
    }
    else{
    while(temp<=int1){
        temp*=10;
        length++;
    }
   // return lenght;
   document.getElementById("p3").innerHTML=length;
}
}

function random(){
    var res= Math.floor(Math.random()*20000)+(-10000);
   // document.getElementById("p4").innerHTML=res;
    var max=0;
         while(res>=0){ 
       res= Math.floor(Math.random()*20000)+(-10000);
        if(res>max){
            max= res;
        }
    }    
    return max;
    //document.getElementById("p4").innerHTML=max;
  }

    function addSpace(){
     var string= document.getElementById("input2").value;
     var i;
     var newStr="";
     for(i=0; i <= string.length; i++){
     if(string.charAt(i)== ' '){
       // return NULL;
       document.getElementById("p6").innerHTML="Null";
    } 
    else{
       newStr= string.replace(/([A-Z])/g, ' $1').trim();
        /*for(i=0; i <= string.length; i++){
            if (string[i]>='A' && string[i]<='Z' && i!=0){
                string[i] = (string[i]+32); 
                newStr= newStr+ string[i];
            } 
            else{
                string[i]= string[i];
                newStr= newStr+ string[i];
            }*/
       }
    }
        //return newStr;
document.getElementById("p6").innerHTML=newStr;
    }

    
    

    function palindrome(){
        var str= document.getElementById("input3").value;
    if(str == str.split('').reverse().join('')){
        //return true;
        document.getElementById("p7").innerHTML="true";
    }
    else{
        //return false;
        document.getElementById("p7").innerHTML="false";
    }
    }
    


function bubbles(){
    var str=document.getElementById("input4").value;
    var st= str.toCharArray();
    var i;
    var j;
    var temp= " ";
    var k;
    var sorted= " ";
        for(i=0; i<st.length; i++){
              for(j=0; j<st.length; j++){
                    if(st[i]<st[j]){
                       temp= st[i];
                       st[i]=st[j];
                       st[j]=temp;
            }
        }
    }
for (k=0; k<st.length; k++){
    sorted= sorted+st[k];
}
//return sorted;
document.getElementById("p8").innerHTML=sorted;
}

function func7(){
    var string1= document.getElementById("input5").value;
    var string2= document.getElementById("input6").value;
    var str1=string1.toCharArray();
    var i=0;
    var str2= string2.toCharArray();
    var j=0;
    var counter=0;
    if(string1.length>=string2.length){
        while(i<str1.length){
            if(str1[i]==str2[j]){
                      j++;
            }
            else{
                j=0; 
            }
            if(j==str2.length){
                j=0;
                counter++;
            }
            i++;
        }
        document.getElementById("p9").innerHTML=counter;
    }
    //return counter;
        /*if(string1.equals(string2)){
        //string1.contains(string2);
        counter++;
        }
    }
    else{
        if(string2.equals(string1)){
            counter++;
        }
    }*/
    
}

function nonum(str){
    var str= document.getElementById("input7").value;
    var onlyLetters= str.replace(/[^A-Za-z]+/g, '');
    document.getElementById("p10").innerHTML=onlyLetters;
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












