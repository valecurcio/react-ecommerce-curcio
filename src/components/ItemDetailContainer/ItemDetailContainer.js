import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { useParams } from 'react-router'

function ItemDetailContainer() {
    const [infoItem, setInfoItem] = useState(null);
    const [loader, setLoader] = useState(true);
    const { id } = useParams();
    const mockItems = [{
        id: 1,
        title: 'Happier than Ever',
        img: 'happier-than-ever.jpg',
        category: 'Pop',
        price: '1800',
        desc: 'Deluxe Vinyl Edition del último lanzamiento del nuevo ícono de la música pop alternativa adolescente.',
        artist: 'Billie Eilish',
        record: 'Interscope Records',
        year: '2021',
        stock: 100
    },
    {
        id: 2,
        title: 'Abbey Road',
        img: 'abbey-road.jpg',
        category: 'Rock',
        price: '2900',
        desc: 'Aquí va la descripción del disco',
        artist: 'The Beatles',
        record: 'Apple Records',
        year: '2021',
        stock: 150
    },
    {
        id: 3,
        title: 'Queen II',
        img: 'queen-2.jpg',
        category: 'Rock',
        desc: 'Aquí va la descripción del disco',
        artist: 'Queen',
        record: 'EMI Records',
        price: '1500',
        year: '2021',
        stock: 97
    },
    {
        id: 4,
        title: 'Bitches Brew',
        img: 'bitches-brew.jpg',
        category: 'Jazz',
        desc: 'Aquí va la descripción del disco',
        artist: 'Miles Davis',
        record: 'Columbia',
        price: '1500',
        year: '2021',
        stock: 130
    },
    {
        id: 5,
        title: 'Never Mind the Bollocks',
        img: 'sex-pistols-never-mind.jpg',
        category: 'Rock',
        desc: '"Never Mind the Bollocks, Here the Sex Pistols" alcanzó el número 1 en las listas de éxito de Reino Unido. En la lista Billboard estadounidense llegó hasta la posición 106. En el año 1987, la revista Rolling Stone calificó al disco como el segundo más importante de la historia de los últimos 20 años.',
        artist: 'Sex Pistols',
        record: 'EMI',
        price: '1600',
        year: '2021',
        stock: 115
    },
    {
        id: 6,
        title: 'Ella & Louis',
        img: 'ella-and-louis.jpg',
        category: 'Jazz',
        desc: 'The Complete Anthology contiene 6 discos con la toda la obra del gran dúo de Jazz',
        artist: 'Ella Fitzgerald - Louis Armstrong',
        record: 'EMI',
        price: '7500',
        year: '2015',
        stock: 224
    },
    {
        id: 7,
        title: 'Sour',
        img: 'olivia-rodrigo-sour.jpg',
        category: 'Pop',
        desc: 'Aquí va la descripción del disco',
        artist: 'Olivia Rodrigo',
        record: 'Interscope',
        price: '2100',
        year: '2021',
        stock: 300
    },

    {
        id: 8,
        title: 'Pulse',
        img: 'pulse.png',
        category: 'Rock',
        desc: 'Pulse (estilizado como p · u · l · s · e ) es el segundo álbum en vivo de la banda de rock inglesa Pink Floyd . Fue lanzado el 29 de mayo de 1995 por EMI en el Reino Unido y el 6 de junio de 1995 por Columbia en los Estados Unidos. El álbum fue grabado durante la etapa europea del Division Bell Tour de Pink Floyden 1994.',
        artist: 'Pink Floyd',
        record: 'EMI',
        price: '3200',
        year: '1996',
        stock: 300
    }
]
    const getItem = (id) => {
        const infoItem = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(mockItems.find(infoItem => infoItem.id === parseInt(id)))
        }, 2000)
        })
        return infoItem
    }

    
    useEffect(() => {
        setLoader(true);
        getItem(id).then((response) => {
            setInfoItem(response)
        }).finally(() => setLoader(false))
    }, []);

    return (
        <div className="detail-container">
         {loader ? (<LoadingScreen />) : infoItem && <ItemDetail data={infoItem} />}
         {console.log("infoItem: ", infoItem)}
        </div>
    );
}

export default ItemDetailContainer;