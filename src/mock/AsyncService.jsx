import { MdDescription } from "react-icons/md";

const products = [
    {
        id:'01',
        name:'chalecos',
        description:'chalecos de hombres',
        price:20000,
        stock:20,
        category:'ofertas',
        img:'../chalecos.jpg',
        
    },
    {
        id:'02',
        name:'camperas',
        description:'camperas grandes',
        price:50000,
        stock:10,
        category:'mas vendidos',
        img:'../camperas.jpg',
        
    },
    {
        id:'03',
        name:'casco adulto',
        description:'casco de adulto',
        price:200000,
        stock:40,
        category:'nuevos',
        img:'../cascoa.jpg',
    },
    {
        id:'04',
        name:'casco niño',
        description:'casco de motocicletas para niños',
        price:150000,
        stock:30,
        category:'nuevos',
        img:'../casco.jpg',
    },
    {
        id:'05',
        name:'pantalones',
        description:'pantalones de hombres',
        price:15000,
        stock:30,
        category:'mas vendidos',
        img:'../pantalones.jpg',
    },
    {
        id:'06',
        name:'remeras',
        description:'remeras de buena calidad',
        price:10000,
        stock:100,
        category:'ofertas',
        img:'../remeras.jpg'
        
    }

]


//crear una promesa que retorne el array de productos

export const getProducts = () => {
    let error = false
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            if(error){
                RiEjectFill('hubo un error, intente mas tarde')
            }else{
                resolve(products)
            }
            
        },2000)
    })
}

export const getOneProduct = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            //buscan el prod con el id que se recibe del parametro
            let oneProduct = products.find((prod)=> prod.id === id)
            //lo devolvemos
            resolve(oneProduct)
        },2000)
    })
}