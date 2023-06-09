//products
let products = [
    {
        id: 1,
        model: "Speed Demon",
        item: "https://i.postimg.cc/yNK7hX1W/Screenshot-2023-05-30-123351.png",
        description: "The Speed Demon is all about going fast! Built for Speed and with performance in mind. The bottom contours consist of a V-hull running throughout the bottom that sitsin a deep concave and splays outwards to a pronounced ―floating-rail‖ this rail channel gives a faster ‗flow rate‘ and more lift and better release.",
        cost: 'R3,000',
    },
    {
        id: 2,
        model: "Sun Fish",
        item: "https://i.postimg.cc/sXDmh8bm/Screenshot-2023-05-30-123404.png",
        description: "A modern take on the original ‘Steve Lis’ fish, we put a shortboard rail and more nose and tail rocker, as well as narrowing the tail and going for a quad fin set up. All said you can use the sunfish as an easy paddling everyday board which can be surfed in hollow overhead surf or mushy waist high grovel.",
        cost: "R2,500",
    },
    {
        id: 3,
        model: "All-Rounder",
        item: "https://i.postimg.cc/Gt6x6ptg/Screenshot-2023-05-30-123432.png",
        description: "Super fun longboard with a bit more lift in the tail allowing for both good nose riding and good turning. It is as the name suggest a good ALL ROUNDER tending towards more performance surfing. Best with 8″ centre fin and and side trailers. All boards are are standard with high gloss polish finish, great spray designs and 3 fin removable fin systems. This board works great in all kinds of waves.",
        cost: "R3,500",
    },
    {
        id: 4,
        model: "Astro Glider",
        item:"https://i.postimg.cc/c1vjkg5m/Screenshot-2023-05-30-123612.png",
        description: "The Astro Glider is our modern take on the Keel Fish of the 70’s. It is short, fast, and drivey. It has a extra-wide tail outline, combined with modern rocker and concave bottom that help bring out speed and performance, making it a super fun board. Not too boaty, just floaty and fast, this board works great in all kinds of waves, picks up speed easily, and turns with a smooth flow.",
        cost: "R2,700",
    },
    {
        id: 5,
        model: "Slush Puppy",
        item:"https://i.postimg.cc/jjq3HL7y/Screenshot-2023-05-30-123729.png",
        description: "Purpose built with performance in min. Ridden up to 4 inches smaller than regular boards, depending on the riders weight and agility. The wider plain shape and standard squash tail adds to acceleration and drive.  Perfect for average to good waves.",
        cost: "R1,500",
    }
]
//
let divProducts = document.querySelector('.products');
products.forEach((data)=> {
    divProducts.innerHTML += `
    <div class="card border-black">
        <h4 class="display-6">${data.model}</h4>
        <img class="card-img-top" src="${data.item}" alt="img">
        <div class="card-body container-fluid">
            <p class="text-black">
                ${data.description}
            </p>
            <p class="text-black">
            Cost: <span>${data.cost}</span>
            </p> 
        </div>
    </div>
    `
})