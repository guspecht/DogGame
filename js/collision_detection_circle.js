const circle1 = {x: 10, y:10, radius: 300}
const circle2 = {x: 500, y:500, radius: 150}

let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;
let distance = Math.sqrt(dx * dx + dy * dy);
let sumOfRadios = circle1.radius + circle2.radius;
console.log(distance);
console.log(sumOfRadios);

if(distance < sumOfRadios)
{
    console.log("Collision");
}
else if(distance === sumOfRadios)
{
    console.log("Are touching");
}
else if(distance > sumOfRadios)
{
    console.log("No Collision");
}

