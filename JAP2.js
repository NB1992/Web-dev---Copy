// JavaScript Document

//AddeventListeners
one.addEventListener("click", myFunction);
Two.addEventListener("click", myFunction2);
Three.addEventListener("click", myFunction3);
Four.addEventListener("click", myFunction4);
Five.addEventListener("click", myFunction5);
//////////////////////////////////////////////
var One=document.getElementById("B1");

var Two=document.getElementById("B2");

var Three=document.getElementById("B3");

var Four=document.getElementById("B4");

var Five=document.getElementById("B5");

//////////////////////////////////////////
///Functions



function myFunction() 
{
   var myList = document.getElementById("T2");
var myNewItem = document.createElement("td");
var myenter= document.getElementById("message");
myNewItem.innerHTML=myenter.value;
myList.appendChild(myNewItem);


var myList2 =document.getElementById("T2") 
var myNewItem2 = document.createElement("td");
var myenter2= document.getElementById("message2");
myNewItem2.innerHTML=myenter2.value;
myList2.appendChild(myNewItem2);

var myList3 = document.getElementById("T2");
var myNewItem3 = document.createElement("td");
var myenter3= document.getElementById("message3");
myNewItem3.innerHTML=myenter3.value;
myList3.appendChild(myNewItem3);



var myList4 = document.getElementById("T2");
var myNewItem4 = document.createElement("td");
var myenter4= document.getElementById("message4");
myNewItem4.innerHTML=myenter4.value;
myList4.appendChild(myNewItem4);


var myList5 = document.getElementById("T2");
var myNewItem5 = document.createElement("td");
var myenter5 = document.getElementById("checkingDate");
myNewItem5.innerHTML = myenter5.value;
myList5.appendChild(myNewItem5);



}




function myFunction2() 
{
    var list=document.getElementById("");
 list.removeChild(list.childNodes[0]);
}




function myFunction3() 
{
    alert ("Hello World!");
}





function myFunction4() 
{
    alert ("Hello World!");
}



function myFunction5() 
{
    alert ("Hello World!");
}

//////////////////////////////////////