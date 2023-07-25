import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "antd";
import { InputNumber, Select, Space } from "antd";
import AllDataScafoldcontext from "../Scaffoldcontexts - Copy/AIdatacontext";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

const Cards = () => {
  const history = useHistory();

  let { scafoldData, cartItems, setCartItems, setCurrentDetail } = useContext(
    AllDataScafoldcontext
  );
  let fromHomeScafoldData = scafoldData;

  // useEffect(() => {
  //   fetch("https://rcz-backend.onrender.com/api/allDataForScafold")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);
  // const [cartValue, setCartValues] = useState({});

  function changeTheCartValue(cartDataIndividual, minusOrPlus) {
    // debugger;

    let cartObjects = JSON.parse(JSON.stringify(cartItems));

    if (cartObjects[cartDataIndividual.name]) {
      if (minusOrPlus == "plus") {
        cartObjects[cartDataIndividual.name] = {
          count: cartObjects[cartDataIndividual.name]["count"] + 1,
          ...cartDataIndividual,
        };
      } else {
        cartObjects[cartDataIndividual.name] = {
          count: cartObjects[cartDataIndividual.name]["count"] - 1,
          ...cartDataIndividual,
        };
      }
    } else {
      if (minusOrPlus == "plus") {
        cartObjects[cartDataIndividual.name] = {
          count: 1,
          ...cartDataIndividual,
        };
      } else {
        cartObjects[cartDataIndividual.name] = {
          count: 0,
          ...cartDataIndividual,
        };
      }
    }
    console.log(cartObjects);
    setCartItems(cartObjects);
  }

  function handleRedirectproduct(value) {
    setCurrentDetail(value);
    history.push("/productDetails");
  }

  return (
    <div>
      <div className="row">
        {fromHomeScafoldData.map((value) => {
          const { image, name } = value;

          return (
            <div
              key={value.id}
              className="col-6 col-sm-3"
              onClick={() => {
                handleRedirectproduct(value);
              }}
            >
              <Card
                hoverable
                style={{
                  width: 250,
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 70,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Increased shadow color
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "lightgray",
                }}
                cover={
                  <img
                    alt="example"
                    src={image}
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      paddingBottom: "0px",
                    }}
                  />
                }
              >
                <Meta title={name} style={{ height: "26px" }} />
                <Space direction="vertical">
                  <InputNumber
                    addonBefore={
                      <button
                        onClick={() => {
                          changeTheCartValue(value, "plus");
                        }}
                      >
                        +
                      </button>
                    }
                    addonAfter={
                      <button
                        onClick={() => {
                          changeTheCartValue(value, "minus");
                        }}
                      >
                        -
                      </button>
                    }
                    controls={false}
                  />
                </Space>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
