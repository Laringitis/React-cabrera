const productos =[
    {
        id:'0',
        name:'bulbasaur',
        price: 23,
        img: '',
        category: 'planta',
        description:'blabla',
    },
    {
        id:'1',
        name:'charmander',
        price: 23,
        img: '',
        category: 'fuego',
        description:'blabla',
    },
    {
        id:'2',
        category: 'agua',
        name:'squirtle',
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
export const getProductById=(productId) =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(productos.find(prod=> prod.id === productId))
        }, timeout);
    })
}