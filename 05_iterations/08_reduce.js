const myNum = [1,2,3]

const myTotal =  myNum.reduce( (acc,cur)=>{
    console.log(`acc: ${acc}, cur: ${cur}`);
    return acc + cur
},0 );

// const myTotal =  myNum.reduce( (acc,cur)=> (acc + cur),0 );
console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "web course",
        price: 8999,
    },
    {
        itemName: "dsa course",
        price: 5999,
    },
    {
        itemName: "phyton course",
        price: 4999,
    }
];

const total = shoppingCard.reduce( (acc, item)=>{
    return acc + item.price;
},0 );

console.log(total);
