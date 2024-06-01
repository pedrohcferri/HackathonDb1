import tenis_adidas from '../../imagensProdutos/tenis_adidas.png'
import camiseta from '../../imagensProdutos/camiseta.png'
import jaqueta_Colorblock_Amarelo from '../../imagensProdutos/jaqueta_Colorblock_Amarelo.png'
import moletom_Capuz_Zebra from '../../imagensProdutos/moletom_Capuz_Zebra.png'
import camisa_Argentina from '../../imagensProdutos/camisa_Argentina.png'
import camisa_Manchester from '../../imagensProdutos/camisa_Manchester.png'
import tenis_nike_rosa from '../../imagensProdutos/tenis_nike_rosa.png'
import tenis_pegasus from '../../imagensProdutos/tenis_pegasus.png'
import tenis_ultraboost from '../../imagensProdutos/tenis_ultraboost.png'




export const produtos = [
    {
        id: 1,
        src: tenis_adidas,
        nome: 'Tênis Adidas - Preto',
        valor: 350.80 ,
    },

   {
        id: 2,
        src: camiseta,
        nome: 'Camiseta básica - Amarelo',
        valor: 120.90,
    },
    {   
        id: 3,
        src: jaqueta_Colorblock_Amarelo,
        nome: "Jaqueta amarela - Listras azuis" ,
        valor: 219.90 ,
    },
    {   
        id: 4,
        src: tenis_nike_rosa,
        nome: "Tênis nike rosa - Para corrida",
        valor: 330.50,
    },
    {   
        id: 5,
        src: moletom_Capuz_Zebra,
        nome: "Moletom com capuz - Estilo zebra",
        valor: 230.30,
    },
    {   
        id: 6,
        src: tenis_pegasus,
        nome: "Tênis Pegasus",
        valor: 199.90 ,  
    },
    {   
        id: 7,
        src: camisa_Argentina,
        nome: "Camisa da Argentina",
        valor: 149.90 ,  
    },
    {   
        id: 8,
        src: camisa_Manchester,
        nome:"Camisa Do Manchster",
        valor:168.90,   
    }
    ,
    {   
        id: 9,
        src: tenis_ultraboost,
        nome:"Tenis Ultra boost",
        valor:550.90,   
    }
]

export const random = produtos
console.log(produtos);
function getRandomInt(random, numItens) {
    const arrayEmbaralhado = produtos.sort(() => 0.5 - Math.random())
    return arrayEmbaralhado.slice(0, numItens);
    
    }
    
export let idAleatorio = getRandomInt(random, 6);
console.log(idAleatorio)