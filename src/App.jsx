import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Card from './components/Card'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  let [cart,setCart] = useState(0);
  let product = [
    {
      name: 'Fancy Product',
      price: '$40.00 - $80.00',
      isRating: false,
      isOldPrice: false,
      isSale: false
    },
    {
      name: 'Special Item',
      price: '$18.00',
      isRating: true,
      isOldPrice: true,
      oldPrice: "$20.00",
      isSale: true
    },
    {
      name: 'Sale Item',
      price: '$25.00',
      isRating: false,
      isOldPrice: true,
      oldPrice: "$50.00",
      isSale: true
    },
    {
      name: 'Popular Item',
      price: '$40.00',
      isRating: true,
      isOldPrice: false,
      isSale: false
    },
    {
      name: 'Sale Item',
      price: '$25.00',
      isRating: false,
      isOldPrice: true,
      oldPrice: "$50.00",
      isSale: true
    },
    {
      name: 'Fancy Product',
      price: '$120.00 - $280.00',
      isRating: false,
      isOldPrice: false,
      isSale: false
    },
    {
      name: 'Special Item',
      price: '$18.00',
      isRating: true,
      isOldPrice: true,
      oldPrice: "$20.00",
      isSale: true
    },
    {
      name: 'Popular Item',
      price: '$40.00',
      isRating: true,
      isOldPrice: false,
      isSale: false
    }
  ]
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    product.map((e,i)=>{
                      return <Card cart={cart} setCart={setCart} product={e} key={i}/>
                    })                    
                  }
                </div>
            </div>
        </section>
      <Footer />
    </>
  )
}

export default App
