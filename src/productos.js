const productos = [
    {
        id:'1',
        name:'bulbasaur',
        price: '23',
        img: '',
        category: 'planta',
        description:'blabla',
        stock: '3',
    },
    {
        id:'2',
        name:'charmander',
        price: '23',
        img: '',
        category: 'fuego',
        description:'blabla',
        stock: '4'
    },
    {
        id:'3',
        category: 'agua',
        name:'squirtle',
        price: '23',
        img: '',
        description:'blabla',
        stock: '5'
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
        }, 500);
    })
}
export const getProductByCategory=(category) =>{
    return new Promise((resolve)=>{
        const filteredProductos= productos.filter (producto=> producto.category === category)
        resolve(filteredProductos)
    })
}