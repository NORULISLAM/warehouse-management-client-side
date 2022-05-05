import React from 'react';
import Banner from '../Banner/Banner';


const product = [
    {
        "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        "category": "Men's Sneaker",
        "name": "RICH DAD POOR DAD",
        "comment": "The Apple MacBook Air (M1, 2020) isn't just the best laptop Apple has ever made, it's the best laptop money can buy right now.",
        "seller": "Addidas",
        "price": 420,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3725,
        "img": "https://m.media-amazon.com/images/I/51NuMV9SJ8L._SL500_.jpg",
        "shipping": 1,
        "quantity": 0
    },
    {
        "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        "category": "Men's Sneaker",
        "name": "MINDSET",
        "comment": "While Apple blew us away with the new MacBook Air (above), arch rival Microsoft has also impressed us with its new Surface Laptop 4, landing straight in at number 2.",
        "seller": "Addidas",
        "price": 196,
        "stock": 19,
        "ratings": 5,
        "ratingsCount": 4355,
        "img": "https://images-na.ssl-images-amazon.com/images/I/31E6K7uNXkL._SX308_BO1,204,203,200_.jpg",
        "shipping": 14,
        "quantity": 0
    },
    {
        "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
        "category": "Men's Sneaker",
        "name": "START WITH WHY",
        "comment": "In my time with the 14-inch MacBook Pro and its M1 Pro chip, I didn't encounter a single instance of slowdown, even when editing photos with Lightroom and Photoshop CC, while also cutting video in Premiere CC when connected to a 4K HDR external monitor.",
        "seller": "Addidas",
        "price": 245,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3972,
        "img": "https://images-na.ssl-images-amazon.com/images/I/51XeVKQCuNL._SX323_BO1,204,203,200_.jpg",
        "shipping": 1,
        "quantity": 0
    },
    {
        "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        "category": "Men's Sneaker",
        "name": "ATOMIC HABITS",
        "comment": "The MacBook Pro 14 combines a little bit of old with a whole lot of new for a tantalizing product that MacBook fans have been waiting years",
        "seller": "Addidas",
        "price": 229,
        "stock": 10,
        "ratings": 5,
        "ratingsCount": 1764,
        "img": "https://images-na.ssl-images-amazon.com/images/I/412gUd3iiKL._SX331_BO1,204,203,200_.jpg",
        "shipping": 32,
        "quantity": 0
    },
    {
        "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
        "category": "Men's Sneaker",
        "name": "PSYCHOLOGY OF MONEY",
        "comment": "",
        "seller": "Addidas",
        "price": 287,
        "stock": 11,
        "ratings": 4,
        "ratingsCount": 799,
        "img": "https://images-na.ssl-images-amazon.com/images/I/41y1sBiezmL._SX322_BO1,204,203,200_.jpg",
        "shipping": 49,
        "quantity": 0
    },
    {
        "id": "6e5593d3-557b-43cf-8dab-a5140faedfb0",
        "category": "Men's Sneaker",
        "name": "HOW TO WIN",
        "comment": "Much like the return of MagSafe, the abandonment of the Touch Bar is a prime example of why the new MacBooks are the best in years.",
        "seller": "Addidas",
        "price": 138,
        "stock": 19,
        "ratings": 3,
        "ratingsCount": 4372,
        "img": "https://images-na.ssl-images-amazon.com/images/I/51UGuv4-OML._SX296_BO1,204,203,200_.jpg",
        "shipping": 19,
        "quantity": 0
    },
    {
        "id": "9c0c13c2-54e4-4001-809b-afbd9d84037d",
        "category": "Men's Sneaker",
        "name": "7 HABITS",
        "comment": "he new Pro displays have also been upgraded with the iPad Pro's ProMotion feature, which is so good that it's now upsetting to use a laptop without it. ",
        "seller": "Addidas",
        "price": 226,
        "stock": 1,
        "ratings": 4,
        "ratingsCount": 2870,
        "img": "https://images-fe.ssl-images-amazon.com/images/I/510OlQYyRvL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        "shipping": 15,
        "quantity": 0
    },
    {
        "id": "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
        "category": "Men's Sneaker",
        "name": "THINK AND GROW RICH",
        "comment": "It's as if Apple designers decided to go through all the feedback they've gotten for years and cherry pick everyone's top handful ",
        "seller": "Addidas",
        "price": 319,
        "stock": 7,
        "ratings": 4,
        "ratingsCount": 1360,
        "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR9OHtMRo6xW9bKVUNi1pUl0RUqMZZyiMYnXCFkfukKAqB0uxTY",
        "shipping": 50,
        "quantity": 0
    },
    {
        "id": "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
        "category": "Men's Sneaker",
        "name": "YOUR OWN MIND",
        "comment": "I like that Apple got rid of the Touch Bar screen up top, which I didn't really find useful on earlier MacBook Pro models, and instead replaced it with full-sized function keys that are easy to tap to adjust the volume, screen brightness and more.",
        "seller": "Addidas",
        "price": 260,
        "stock": 4,
        "ratings": 5,
        "ratingsCount": 1976,
        "img": "https://images.penguinrandomhouse.com/cover/9780143111528",
        "shipping": 46,
        "quantity": 0
    }
]
const Home = () => {
    return (

        <div className='mt-5 p-4'>
            <Banner></Banner>
            <div>
                {
                    product.slice(0, 6).map(product =>

                        <div className="card-body text-center">
                            <img src={product.img} className="img-thumbnail rounded" alt="" />
                            <h5 className="card-title">Card title{product.name}</h5>

                            <p className="card-text"> Comment: {product.comment}</p>
                            <h5>Rating: {product.ratings}</h5>
                            <button>Update</button>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Home;