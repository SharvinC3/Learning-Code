
  
document.getElementById("qwerty").innerHTML = "this time thingy is using javascript and this message is javascript";



document.getElementById("test").style.fontSize = "50px";
document.getElementById("test").style.color = "blue";
document.getElementById("test").style.backgroundColor = "black";
document.getElementById("test").innerHTML = "Hello world";


function light(sw) {
  let pic;
  if (sw == 0) {
    pic = "http://i.stack.imgur.com/SBv4T.gif"
  } 
  else if  (sw == 1) {
    pic = "https://cdn.glitch.com/0e4d1ff3-5897-47c5-9711-d026c01539b8%2Fbddfd6e4434f42662b009295c9bab86e.gif?v=1573157191712"
  }
  else if (sw == 2) { 
    pic = "https://miro.medium.com/max/900/1*q99J7XLYVWgOt69E8IuXqw.gif"
  }
  document.getElementById('myImage').src = pic;
}

function buttonOne() {
  document.getElementById('myImage').src = 'http://i.stack.imgur.com/SBv4T.gif';
}

function imageSwitcher(image, Id) {
    console.log(image)
    console.log(document.getElementById(Id))
  document.getElementById(Id).src = image;
}

function sharvinfunction()  
{  if (confirm('press ok to go back | press cancel to cancel going back')) {
document.getElementById('caps').innerHTML = 'click the button to show the date or hover '; 
 
}  else {
document.getElementById('caps').innerHTML = Date();


}

}


function charanfunction() {
  if (confirm('yes or no')) {  
    document.getElementById('12345').innerHTML = 'click to do it again';
  }
  else { 
    document.getElementById('12345').innerHTML = 'you used javascript';
  }
}

function pagefunction() {
    const element = document.getElementById('youtube')
    const x = window.prompt('type in password')
    if (x == 'sharvin2302') {
        if (element.style.display == 'block') {
            element.style = 'display: none;'
        }
        else{
            element.style = 'display: block;'
        }
    }
}

function paperfunction() {
    const x = document.getElementById('youtube')
    console.log('worked')

    if(document.getElementById('youtube').style.display = 'block') {
        document.getElementById('youtube').style.display = 'none'

    }

}



function rabbitfunction() {
    const sharvin = document.getElementById('place').value;
    const email = document.getElementById('living').value;
    const password = document.getElementById('myInput').value;
    const username = document.getElementById('ins').value;
    const password2 = document.getElementById('sharvininput').value;
    const charan = document.getElementById('f12').value
    const deepa = document.getElementById('f11').value
    const chandran = document.getElementById('f10').value

    const passwordObject = {
        sharvinvenkat: 'hi'
    }
    const newUsername = 'cool'
    const newPassword = 'hiu'
    passwordObject[newUsername] = {
        'password': newPassword,
        'email': 'cool@stuff.com'
    }
    console.log(passwordObject)
    if(passwordObject['awddw'] === undefined) {
        console.log('wow')
    }

    if(sharvin === '93' && email === 'sharvinvenkatchandran@gmail.com'&&username === 'sharvinvenkat'&&password === '2302'&&password2 === password) {
        alert('you got it')
        window.location.href = "./boringsite.html";
        document.getElementById('num').innerHTML = 'You got it right'
    }
    else if(sharvin === deepa && email === 'sharvinvenkatchandran@gmail.com'&& username === charan && password === chandran &&password2 === password) {
        alert('you got it')
        window.location.href = "./boringsite.html";
        document.getElementById('num').innerHTML = 'You got it right'
    }
    else {
        alert('Incorrect username or password')
        document.getElementById('num').innerHTML = 'Incorrect password or username'
    }
}

function yayfunction() {
    let y = window.prompt('type your secret username')
    let x = window.prompt('type your secret password')


    if(y =='sharvin'&&x == '2302')
    {
    alert('You got it right')
    window.location.href = "./boringsite.html";
    document.getElementById('num').innerHTML = 'You got it right'
    }
    else{
    alert('Incorrect secret password')
    document.getElementById('num').innerHTML = 'Incorrect secret username or password'

    }
}

function happyfunction() {
let x = window.prompt('how are you feeling (Options happy,sad,angry,skip,option,and /help)')
 
if(x =='happy' )
{
alert('happy day')

}

else if(x =='sad')
{ 
alert('sad day')

}
else if(x =='angry')
{
alert('angry day')

}
else if(x =='skip')
{
alert('you skipped')
}
else if(x =='option')
{
window.prompt('             Options:\r\nOption 1: happy \r\nOption 2: sad \r\nOption 3: angry \r\nOption 4: skip \r\nOption 5: option \r\nOption 6: /help ')

}
else if(x == '/help')
{
window.prompt('type in happy,sad,angry,skipped,option,or /help')

}
else
{
alert('not an option')

}
}


function deepafunction() {
let x = document.getElementById("myInput");
let y = document.getElementById('sharvininput')
if (x.type === "password"&&y.type === "password") {
x.type = "text";
y.type = "text";
width="500px";
document.getElementById('num').innerHTML = 'showing password and re-entered password'
} else {
x.type = "password";
y.type = "password";
document.getElementById('num').innerHTML = 'hiding password and re-entered password'
}
}

function shievinfunction() {
  let x = document.getElementById("ins");
  if (x.type === "search") {
    x.type = "password";
    document.getElementById('num').innerHTML = 'hiding username'
    width="500px";
  } else {
    x.type = "search";
    document.getElementById('num').innerHTML = 'showing username'
  }
}

function resetfunction()
{ 
document.getElementById('living').value = "";
document.getElementById('ins').value = "";
document.getElementById('myInput').value = "";
document.getElementById('sharvininput').value = "";
document.getElementById('place').value = 0;
document.getElementById('num').innerHTML = 'reset';
}


let x,y,z;
x = 10/2 ;
y = 5;
z = y + x;



function butonFunction()
{
let y = window.prompt('type in const')
if(y == 'const')
{
alert('good job')
alert('inspect,console type in sharvin ')
document.getElementById('num').innerHTML = 'good job';
}
else
{
alert('bad job')
document.getElementById('num').innerHTML = 'bad job';
}
}

document.getElementById("tab").innerHTML = "Z is equal to " + z + "";  

document.write('20+20');
console.log("it worked yay");


function qwertyfunction(){
if (confirm("Are you sure you want to quit?") ) {
    if (confirm("Save your work before leaving?") ) {
     document.getElementById('pause').innerHTML = 'clicked yes';
    } else {
      document.getElementById('pause').innerHTML = 'clicked no';
    }
} else {
  document.getElementById('pause').innerHTML = 'clicked cancel';
}
}

function constfunction()
{
document.getElementById('caps').innerHTML = new Date(); 
}

const sharvin = {
            hairColor: 'black',
            armColor: 'brown',
            size: 52,
            typeOfGamer: 'cool gamer',
            age: 9,
            momAndDad: 'nice',
            wish: 'toHaveADog'
        }

onload=alert("welcome to sharvin's site")

function rangeFunction() {
    const movie = document.getElementById('place').value;
    console.log(document.getElementById('place'))
    alert('your number is' + ' ' + movie)
}
