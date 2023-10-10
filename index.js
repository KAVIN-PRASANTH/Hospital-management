window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var wh=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=70;
        if(revealtop<wh-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

let TotalCount=document.querySelectorAll('.count-num');
let i=0,i1=0,i2=0,i3=0,i4=0,i5=0;
let counter=0;
window.onscroll = ()=> {
     
        if (document.documentElement.scrollTop > 1200) {
           callCountFunction(); 
        } 
     
}
 function callCountFunction(){
       const myTimeout = setInterval(myGreeting,1000);
       const myTimeout1 = setInterval(myGreeting1,1000);
       const myTimeout2 = setInterval(myGreeting2,1000);
       const myTimeout3 = setInterval(myGreeting3,500);
       const myTimeout4 = setInterval(myGreeting4,1000);
       const myTimeout5 = setInterval(myGreeting5,1000);

 }

function myGreeting() {
    if(i==140){
        myStopFunction();
    }
    TotalCount[0].innerHTML=i++ +"+";
}
function myStopFunction() {
  clearTimeout(myTimeout);
}

function myGreeting1() {
    if(i1==50){
        myStopFunction1();
    }
    TotalCount[1].innerHTML=i1++ +"+";
}
function myStopFunction1() {
  clearTimeout(myTimeout1);
}

function myGreeting2(){
    if(i2==100){
        myStopFunction2();
    }
    TotalCount[2].innerHTML=i2++ +"+";
}
function myStopFunction2() {
  clearTimeout(myTimeout2);
}

function myGreeting3() {
    if(i3==250){
        myStopFunction3();
    }
    TotalCount[3].innerHTML=i3++ +"+";
}
function myStopFunction3() {
  clearTimeout(myTimeout3);
}

function myGreeting4(){
    if(i4==30){
        myStopFunction4();
    }
    TotalCount[4].innerHTML=i4++ +"+";
}
function myStopFunction4() {
  clearTimeout(myTimeout4);
}

function myGreeting5(){
    if(i5==60){
        myStopFunction5();
    }
    TotalCount[5].innerHTML=i5++ +"+";
}
function myStopFunction5(){
  clearTimeout(myTimeout5);
}
    

 
