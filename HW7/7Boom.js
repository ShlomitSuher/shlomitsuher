{



function boom(){
    var i=1;
    var str= " ";
    while(i<=100){
        if(parseInt(i/10)==7 || parseInt(i%7)==0 || parseInt(i%10)==7){
            str+="BOOM"+"<br>";
            i++;
        }
        else{
            str +=i+"<br>";
            i++;
        }
    }

    document.getElementById("b7").innerHTML=str;
}








}
