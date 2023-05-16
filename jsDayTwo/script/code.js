let subjects = ['Python', 'C++', 'VB.Net', 'Javascript', 'Assembly'];
//display the last element
console.log(subjects.at(-1));
//display the middle element
let x = Math.floor(subjects.length/2);
console.log(x);
if (x % 2 == 0){
    console.log(subjects[x]);
}else {
    console.log(subjects.slice[x-1, x+1]);
}