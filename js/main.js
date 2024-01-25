const FindElement = (node,resp= document) => {
    return resp.querySelector(node)
}


const elButton = FindElement('.buton');


console.log(elButton);

const arr = [
    {
        id: 2,
    },

    {
        id: 3,
    },

    {
        id: 32,
    },

    {
        id: 23,
    },

    {
        id: 12,
    },
]

const elArr = arr.reduce((node,beri) => {
    return node + beri.id
},0)
console.log(elArr);
