const products = [
    {id:1, name:'prod1', price:1000, category:'remera', img:'', stock:5, description:'descripcion1'},
    {id:2, name:'prod2', price:500, category:'bermuda', img:'', stock:5, description:'descripcion2'},
    {id:3, name:'prod3', price:200, category:'medias', img:'', stock:5, description:'descripcion3'}
]

export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
        }, 500)
    })
}

