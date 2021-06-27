import React from 'react'
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className = "home">
            <img 
            className = "home__image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
         <div className = "home__row">
            <Product 
          id = "12321341"
          title = "MCP Premium Infrared Forehead thermometer Gun Digital for Fever"
          price = {20.32}
          rating = {4}
          image = "https://images-na.ssl-images-amazon.com/images/I/51omyRGaS0L._AC_SL1080_.jpg"
            />



            <Product 
          id = "12321342"
          title = "Amazon Basics Small Digital Alarm Clock"
          price = {12.49}
          rating = {3}
          image = "https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
            />



         </div>

         <div className = "home__row">
         <Product 
          id = "12321343"
          title = "Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters"
          price = {24.94}
          rating = {3}
          image = "https://images-na.ssl-images-amazon.com/images/I/61gWcQJp3BL._AC_SL1500_.jpg"
            />



            <Product 
          id = "12321344"
          title = "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display"
          price = {599.99}
          rating = {4}
          image = "https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />


            <Product 
          id = "12321345"
          title = "OnePlus Nord N100 Midnight Frost ​, 4GB+64GB, Model BE2011"
          price = {179.99}
          rating = {5}
          image = "https://images-na.ssl-images-amazon.com/images/I/61Pnjh%2BFO1L._AC_SL1500_.jpg"
            />



            <Product 
          id = "12321346"
          title = "Dash Mini Maker Portable Grill Machine"
          price = {14.99}
          rating = {4}
          image = "https://images-na.ssl-images-amazon.com/images/I/71nIvNs8%2BHL._AC_SL1500_.jpg"
            />

         </div>


         <div className = "home__row">

         <Product 
              id = "12321347"
              title = "SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
              price = {1660.00}
              rating = {5}
              image = "https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
         />

         </div>
        
        
        </div>
    );
}

export default Home
