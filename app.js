/*const name = "Swetha";
const age = 33;
console.log(`Hello it's me and my name is ${name} and my age is ${age}`);*/

/*const age = 10;

if(age > 18) {
    console.log("You are good to go!");
} 

else if(age < 15) {
    console.log("Wow you are really young...why are you even here");
}

else {
    console.log("Youa are not old enough");

}
*/ 

/*const dice1 = 6;
const dice2 = 3;
if(dice1 === 6 && dice2 === 6) {// &&-And , ||-OR //
    console.log("You are rolled out");
} else {
    console.log("You did not");
}*/

//ARRAYS//
/*const schedule = ["Wake up", "Eat", "Film a video", "Watch things on netflix"];
schedule.push("Hey a new thing got added");//add the element in the last//
schedule.pop();// remove last element//
schedule.shift();//remove beginning//
schedule.shift("add new one");// add the element in the beggining//
console.log(schedule);
console.log(schedule.indexOf("Eat"));//get the index number//*/

// Objects and This Keyword//

/*const user = {
    name: "Swetha",
    age: 33,
    married: true,
    purchases: ["phone", "car", "laptop"]*/


/*function apples(){
    console.log('apple');
}
window.apples();
//This//

console.log(this);*/
// for loop
/*const names = ["Ed", "John", "Maria", "Burrito", "Harry", "Potter"];
for(name of names) {
    console.log(name);
    if(name==='Maria') {
        console.log("Maria is in my list!");
        break;
    }

}*/

// while loop
/*while (loading < 100) {
    console.log("Website is still loading");

    loading++;
}*/

//dom//
/*const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");*/

/*function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime==null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
    }
    requestAnimationFrame(animation);
}
smoothScroll('.section1',1000);*/

function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');

    }
}
    window.addEventListener('scroll',scrollAppear);