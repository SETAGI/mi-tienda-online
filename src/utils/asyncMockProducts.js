const products = [
    {
        id: 0,
        title: 'Iphone 13 pro max',
        description: 'Descripción de un Iphone 13',
        price: 1200,
        category: 'smartphones',
        stock: 10,
        pictureUrl: 'https://fdn.gsmarena.com/imgroot/news/21/09/iphone-13-pro-announced/colors/-600/gsmarena_009.jpg'
    },
    {
        id: 1,
        title: 'Galaxy S22 Ultra 5G',
        description: 'Descripción de un Samsung Galaxy S22 Ultra ',
        price: 1150,
        category: 'smartphones',
        stock: 10,
        pictureUrl: 'https://tigocolombia.vteximg.com.br/arquivos/ids/160634-1000-1000/8806094405118_7-min.png?v=637813009260830000'
    },
    {
        id: 2,
        title: 'Teclado Gamer Redragon K630',
        description: 'Descripción de un Teclado Gamer Redragon Dragonborn K630 Qwerty Red Inglés',
        price: 50,
        category: 'accessories',
        stock: 10,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_819063-MCO48215198972_112021-F.webp'
    },
    {
        id: 3,
        title: 'Mouse Redragon M908',
        description: 'Descripción de un Mouse Redragon M908',
        price: 30,
        category: 'accessories',
        stock: 10,
        pictureUrl: 'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/1041933.jpg'
    },
    {
        id: 4,
        title: 'MacBook Pro Chip M1 ',
        description: 'Descripción de un MacBook Pro Chip M1 CPU 8 Núcleos GPU 8 Núcleos 256GB SSD MYDA2LA/A 13 Pulgadas',
        price: 1800,
        category: 'notebooks',
        stock: 10,
        pictureUrl: 'https://falabella.scene7.com/is/image/FalabellaCO/27821813_1?wid=1500&hei=1500&qlt=70'
    },
    {
        id: 5,
        title: 'ThinkPad E14 2da Gen (14”, Intel)',
        description: 'Descripción de un ThinkPad E14 2da Gen (14”, Intel)',
        price: 1700,
        category: 'notebooks',
        stock: 10,
        pictureUrl: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e14-gen-2-hero.png?context=bWFzdGVyfHJvb3R8MjY4OTA2fGltYWdlL3BuZ3xoYTAvaGIyLzE0MTA2OTIyMzE5OTAyLnBuZ3xkMTM5OTVhY2M3ODRhNGZlOGZiN2M0N2RlNjJiYTA4Zjg2ZjUwM2RhY2UyM2VkZWYwMzY4OTA3ZmQ3ZTlkYjVh'
    }
]

export const getItems = () => (
    new Promise( resolve => {
        setTimeout( () => {
            resolve( products )
        }, 500)
    })
)

export const getItemById = (id) => (
    new Promise( resolve => {
        setTimeout( () => {
            resolve( products[id] )
        }, 500)
    })
)

export const getItemByCategory = (category) => (
    new Promise( resolve => {
        setTimeout( () => {
            resolve( products.filter( product => product.category === category) )
        }, 500)
    })
)