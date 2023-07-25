import React, { useContext, useState } from "react";
import carousel from "../pages/Carosuel";
import List from "../Reuse/List";
import Carousel from "../pages/Carosuel";
import Cards from "./Cards";
import Footer from "../Reuse/Footer";
import Carts from "./Carts";
import AllDataScafoldcontext from "../Scaffoldcontexts - Copy/AIdatacontext";

const Home = () => {
  // let { scafoldData, setScafoldData} = useContext(AllDataScafoldcontext);
  // let fromHomeScafoldData = scafoldData;
  // const [cartItems, setCartItems] = useState({});
  // debugger;
  return (
    <div>
      <List />
      <Carousel />
      <div className="homeContent" style={{ display: "flex", width: "20" }}>
        <div>
          <Cards
          // changeTheStateOfcartItems={setCartItems}
          // currentStateOfCartItems={cartItems}
          />
        </div>

        <div className="checkcard">
          {/* <Carts fromHomeCart={cartItems}/>*/}
        </div>
      </div>

      <Footer/>
    </div>
  );
};
export default Home;
