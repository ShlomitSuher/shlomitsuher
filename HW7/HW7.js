{


var car={
    company: " ",
    type: " ",
    engineSize: " ",
    color: " ",
    seatsNumber: " "
};

function checkAll(){

    if (!company()){
        return;
    }
    if (!type1()){
        return;
    }
    if (engineSize()==false){
        return;
    }
    if (color()== false){
        return;
    }
    if (seatsNumber()==false){
        return;
    }


    revealDiv(); 

}

function company(){
    var ok = false;
    var str1= document.getElementById("input1").value;
    if (str1.length>2){
        car.company=document.getElementById("input1").value;
        document.getElementById("sp1").innerHTML=" ";
        ok=true;
    }
    else{
        document.getElementById("sp1").innerHTML="Too short!";
    }
    return ok;
}

function type1(){
    var ok = false;
    var str2= document.getElementById("input2").value;
    if (str2.length>2){
        car.type=document.getElementById("input2").value;
        document.getElementById("sp2").innerHTML=" ";
        ok= true;
    }
    else{
        document.getElementById("sp2").innerHTML="Too short!";

    }

    return ok;
}

function engineSize(){
    var ok = false;
    var num= document.getElementById("input3").value;
    if(num>800 && num<6000){
        car.engineSize=document.getElementById("input3").value;
        document.getElementById("sp3").innerHTML=" ";
        ok = true;
    }
    else if(num<800){
        document.getElementById("sp3").innerHTML="Too small!"; 
    }
    else if(num>6000){
        document.getElementById("sp3").innerHTML="Too big!";
    }

    return ok;
}

function color(){
    var ok = false;
    document.getElementById("sp4").innerHTML=" ";
    var col1= document.getElementById("cb1").checked;
    var col2= document.getElementById("cb2").checked;
    var col3= document.getElementById("cb3").checked;
    var col4= document.getElementById("cb4").checked;
    if (col1==true && col2==false && col3==false && col4==false){
        car.color="Red";
        ok = true;
    }
    else if (col1==false && col2==true &&col3==false && col4==false){
        car.color="Blue";
        ok = true;
    
    }
    else if (col1==false && col2==false &&col3==true && col4==false){
        car.color="White";
        ok  = true;

    }
    else if (col1==false && col2==false &&col3==false && col4==true){
        car.color="Black";
        ok = true;
    }
    else{
        document.getElementById("sp4").innerHTML="Choose one color";
    }

    return ok;
}

function seatsNumber(){
    var ok = false;
    var select= document.getElementById("sn1");
    var ans=  parseInt(select.options[select.selectedIndex].value);
   
    if(ans==2){
        car.seatsNumber=2;
        ok = true;
        document.getElementById("sp5").innerHTML=" ";
    }
    else if(ans==4){
        car.seatsNumber=4;
        ok = true;
        document.getElementById("sp5").innerHTML=" ";
    }
    else if(ans==5){
        car.seatsNumber=5;
        ok = true;
        document.getElementById("sp5").innerHTML=" ";
    }
    else{
       document.getElementById("sp5").innerHTML="Choose number of seats";
    }

    return ok;

}



function revealDiv(){
    document.getElementById("div1").style.display= "block";
    document.getElementById("company").innerHTML=car.company;
    document.getElementById("type").innerHTML=car.type;
    document.getElementById("engine").innerHTML=car.engineSize;
    document.getElementById("color").innerHTML=car.color;
    document.getElementById("seats").innerHTML=car.seatsNumber;




}


















}
