import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      <div className="home_row">
        <Product
          id="123456"
          title="Apple iPhone 11 Pro Max (64GB, Space Gray) [Carrier Locked] + Carrier Subscription [Cricket Wireless]"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81bsgUsPM-L.jpg"
        />

        <Product
          id="123457"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={199.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123458"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={100.89}
          rating={3}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />

        <Product
          id="123459"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={199.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />

        <Product
          id="123450"
          title="Apple 13in MacBook Pro, Retina, Touch Bar, 3.1GHz Intel Core i5 Dual Core, 8GB RAM, 512GB SSD, Space Gray"
          price={199.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/61SRQUe+LhL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="123451"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={199.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
