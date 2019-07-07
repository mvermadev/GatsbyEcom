import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'


class BannerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: 
        [
          { 
            id: 1,
            url:'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Bruno/GW/LU_Announce_1500x300_Desktop_Hero_dv1._CB444413363_.jpg',
            alt:"First Slide",
            text:"Get Prime MemberShip"
          },
          {
            id: 2,
            url:'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/LPA/Bunk/Swiggy_DesktopHero_1500x600._CB443378310_.jpg',
            alt:"Second Slide",
            text:"Swiggy for Foods"
          },
          {
            id: 3,
            url:'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2019/SingleTitle/Venom/1500x600_Hero-Tall_np._CB443479075_.jpg',
            alt:"Third Slide",
            text:"Watch Action of Venon"
          }
        ]
      
    }
  }
  
  render() {
    return (
      <div>
        <Carousel>
        {this.state.imgs.map((imgg)=>{
          return (
            <Carousel.Item key={imgg.id}>
          <img
            className="d-block w-100"
            src={imgg.url}
            alt={imgg.alt}
          />
          <Carousel.Caption>
            <h3>{imgg.text}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
      </Carousel>
      </div>
    );
  }
}


export default BannerSlider;