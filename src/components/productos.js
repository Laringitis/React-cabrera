const productos =[
    {
        id:'',
        name:'',
        price: 23,
        img: '',
        description:'blabla',
    },
    {
        id:'',
        name:'',
        price: 23,
        img: '',
        description:'blabla',
    },
    {
        id:'',
        name:'',
        price: 23,
        img: '',
        description:'blabla',
    }
]

export const getproductos = () =>{
    return new promise ((resolve)=>{
        setTimeout(() => {
            resolve (productos)
        }, 500) })
} 
