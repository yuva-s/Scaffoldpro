import React from "react";
import { Col, Row, Button } from "antd";
import { useContext } from "react";
import AllDataScafoldcontext from "../../Scaffoldcontexts - Copy/AIdatacontext";
import { Card } from "antd";

const { Meta } = Card;

export default function Details() {
  // debugger;
  let { currentproductDetail } = useContext(AllDataScafoldcontext);

  const priceIndex = 0; // Change this index to display the desired price

  let price = null;
  if (
    currentproductDetail &&
    currentproductDetail.price &&
    currentproductDetail.price.length > priceIndex
  ) {
    price = currentproductDetail.price[priceIndex];
  }

  return (
    <>
      <Row style={{ marginTop: "100px" }}>
        <Col span={10}>
          {currentproductDetail && (
            <Card>
              <img alt="example" src={currentproductDetail.image} />
            </Card>
          )}
        </Col>
        <Col span={8} style={{ maxHeight: "100px" }}>
          {currentproductDetail && (
            <Card>
              <h3
                style={{
                  fontFamily: "Arial",
                  fontSize: "18px",
                  fontWeight: "bold",
                  paddingBottom: "20px",
                }}
              >
                {currentproductDetail.name}
              </h3>
              <Meta
                description={currentproductDetail.description}
                style={{
                  fontSize: "18px",
                  fontFamily: "Arial",
                  paddingBottom: "20px",
                }} // Apply custom style for description size
              />
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  paddingBottom: "20px",
                }}
              >
                {price}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  paddingBottom: "20px",
                }}
              >
                Availability: {currentproductDetail.availability}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "20px",
                }}
              >
                <Button type="primary">Buy Now</Button>
                <Button type="primary" style={{ marginLeft: "10px" }}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
}
