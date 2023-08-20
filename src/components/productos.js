const productos =[
    {
        id:'0',
        name:'',
        price: 23,
        img: '',
        description:'blabla',
    },
    {
        id:'1',
        name:'',
        price: 23,
        img: '',
        description:'blabla',
    },
    {
        id:'2',
        name:'',
        price: 23,
        img: '',
        description:'blabla',
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
        
    })
}
