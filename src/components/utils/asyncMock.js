const products = [
    {
        id: 0,
        title: 'Iphone 13 pro max',
        price: 1200,
        pictureUrl: 'https://fdn.gsmarena.com/imgroot/news/21/09/iphone-13-pro-announced/colors/-600/gsmarena_009.jpg'
    },
    {
        id: 1,
        title: 'Galaxy S22 Ultra 5G',
        price: 1150,
        pictureUrl: 'https://tigocolombia.vteximg.com.br/arquivos/ids/160634-1000-1000/8806094405118_7-min.png?v=637813009260830000'
    },
    {
        id: 2,
        title: 'Xiaomi Mi 11 Ultra 5g',
        price: 2000,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_613622-MCO47488982694_092021-F.webp'
    }
]

export const getItems = () => (
    new Promise( resolve => {
        setTimeout( () => {
            resolve( products )
        }, 2000)
    })
)