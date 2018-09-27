import React from 'react';
import './Business.css'

const business = {
imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
};

class Business extends React.Business {
  render() {
    return (
      <div classname="Business">
        <div classname="image-container">
          <img src={Business.imageSrc} alt=''/>
        </div>
        <h2>{Business.name}</h2>
        <div classname="Business-information">
          <div classname="Business-address">
            <p>{Business.address}</p>
            <p>{Business.city}</p>
            <p>{`{business.state} {business.zipCode}`}</p>
          </div>
          <div classname="Business-reviews">
            <h3>{Business.category}</h3>
            <h3 classname="rating">`${Business.rating} stars`}</h3>
            <p>`${Business.reviewCount} reviews`</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
