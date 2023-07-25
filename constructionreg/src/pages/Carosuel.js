import { Carousel } from 'antd';
import React from 'react';
import image1 from '../images/image12.jpg';
import image2 from '../images/image22.jpg';
import image3 from '../images/image33.jpg';
//import image4 from '../images/image4.jpg';

const contentStyle = {
  height: '660px',
  color: '#fff',
  background:"white",
  lineHeight: '560px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%', // Adjust the width of the image
  objectFit: 'fill', // Adjust how the image fits within its container
  margin: '0 auto', // Center the image horizontally
};

const CarouselComponent = () => (
  <Carousel autoplay>
    <div>
      <img src={image1} alt="Image 1" style={contentStyle } />
    </div>
    <div>
      <img src={image2} alt="Image 2" style={contentStyle} />
    </div>
    <div>
      <img src={image3} alt="Image 3" style={contentStyle} />
    </div>
    {/* <div>
      <img src={image4} alt="Image 4" style={contentStyle} />
    </div> */} 
  </Carousel> 
);

export default CarouselComponent;









