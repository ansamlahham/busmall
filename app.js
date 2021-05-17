'use strict' ;

// global 
let allimages = [];


let leftImgElement = document.getElementById('left-img');

let rightImgElement = document.getElementById('right-img');

let centerImgElement = document.getElementById('center-img');

let maxAttempts = 25;

let userCounter = 0 ;

let picturesName = [];
let picturesVotes =[];
let picturesShowen = [];

let leftImgIndex ;
let rightImgIndex ;
let centerImgIndex;

// constructer function

function MallImage(name ,path){
 
    
    this.name = name ;
    this.path = path ;
    this.votes= 0 ;
    this.show = 0 ;

allimages.push(this);
picturesName.push(this.name);
}



// let imageArray = [leftImgElement,centerImgElement,rightImgElement];
// console.log (imageArray);


new MallImage('bag','img/bag.jpg');
new MallImage('banana','img/banana.jpg');
new MallImage('bathroom','img/bathroom.jpg');
new MallImage('boots','img/boots.jpg');
new MallImage('breakfast','img/breakfast.jpg');
new MallImage('bubblegum','img/bubblegum.jpg');
new MallImage('chair','img/chair.jpg');
new MallImage('cthulhu','img/cthulhu.jpg');
new MallImage('dog-duck','img/dog-duck.jpg');
new MallImage('dragon','img/dragon.jpg');
new MallImage('pen','img/pen.jpg');
new MallImage('pet-sweep','img/pet-sweep.jpg');
new MallImage('scissors','img/scissors.jpg');
new MallImage('shark','img/shark.jpg');
new MallImage('sweep','img/sweep.png');
new MallImage('tauntaun','img/tauntaun.jpg');
new MallImage('unicorn','img/unicorn.jpg');
new MallImage('water-can','img/water-can.jpg');
new MallImage('wine-glass','img/wine-glass.jpg');
console.log(allimages);


function generateRandomIndex() {
    return Math.floor (Math.random() * allimages.length);
    
}

function renderThreeImages() {
    leftImgIndex = generateRandomIndex();
    rightImgIndex = generateRandomIndex();
    centerImgIndex = generateRandomIndex();

   
    do {
        rightImgIndex=generateRandomIndex();
        centerImgIndex = generateRandomIndex();

    } while (rightImgIndex === centerImgIndex || rightImgIndex === leftImgIndex || centerImgIndex ===leftImgIndex); 
  

  

leftImgElement.src=allimages[leftImgIndex].path;
rightImgElement.src=allimages[rightImgIndex].path;
centerImgElement.src=allimages[centerImgIndex].path;

allimages[leftImgIndex].show++;
allimages[rightImgIndex].show++;
allimages[centerImgIndex].show++;
}

renderThreeImages();

 //event listener

 leftImgElement.addEventListener('click' , handClick);
 
 rightImgElement.addEventListener('click' , handClick);

 
 centerImgElement.addEventListener('click' , handClick);

 function handClick(event) {
    

     userCounter++ ;

     if (userCounter <= maxAttempts) {

        if (event.target.id === 'left-img') {
            allimages[leftImgIndex].votes = allimages[leftImgIndex].votes + 1 ;

        }else if (event.target.id === 'right-img'){
        allimages[rightImgIndex].votes = allimages[rightImgIndex].votes + 1 ;
    }else if (event.target.id === 'center-img'){
    allimages[centerImgIndex].votes = allimages[centerImgIndex].votes + 1 ;
}
        renderThreeImages();
    
}else { 
leftImgElement.removeEventListener('click' , handClick);
centerImgElement.removeEventListener('click', handClick);
rightImgElement.removeEventListener('click' , handClick);

// let list = document.getElementById('results');
// let btn = document.getElementById('btn');
// btn.addEventListener('click',results);
// function results(){

// let liElement ;
// for (let i= 0; i < allimages.length; i++) {
//     liElement = document.createElement('li');
//     list.appendChild(liElement);
//     liElement.textContent= `Image ${i} : ${allimages[i].name} has ${allimages[i].votes} votes`;

//      }
//     }
for (let i= 0; i< allimages.length; i++) {
    picturesVotes.push(allimages[i].votes);
    picturesShowen.push(allimages[i].show);
    
}
theChart();
}
}

// console.log (allimages);


function theChart() {
    let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: picturesName,
        datasets: [{
            label: '# of Votes',
            data: picturesVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
        
               
            ],
            borderWidth: 1
        },{
            label: '# of pictures shown',
            data: picturesShowen ,
            backgroundColor: 'black',
            borderColor : 'red'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

    
}
