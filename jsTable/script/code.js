let table = document.querySelector('.main')
let details = [
    {
        id:1,
        name:'2023 Mercedes-Benz Brabus G-Class',
        price:'R 20,916,174.00',
        image:'https://i.postimg.cc/VkP83TNK/Screenshot-2023-05-31-150003.png',
    },
    {
        id:2,
        name:'2021 Mercedes-Benz Brabus G-Class 4x4',
        price:'R 9,175,938.00',
        image:'https://i.postimg.cc/52yRKSBs/Screenshot-2023-05-31-150125.png',
    },
    {
        id:3,
        name:'2020 Mercedes-Benz Brabus G-Class',
        price:'R 5,380,741.00',
        image:'https://i.postimg.cc/tRDD0VCw/Screenshot-2023-05-31-150229.png',
    },
]
details.forEach((data) => {
    table.innerHTML += `
    <tr>
    <th>${data.name}</th>
    <th>${data.price}</th>
    <th><img src='${data.image}' style="width:190px"></th>
    <th><button>Add</button></th>
    <th><button>Delete</button></th>
    </tr>`
});
