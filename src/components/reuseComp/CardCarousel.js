import React,{Component} from 'react';
import {CardDeck, Card, Carousel} from 'react-bootstrap'

class CardCarousel extends Component {
    constructor(props) {
        super(props);
        this.state={
            cardImg:[
                {
                    id:1,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Deo_desktop_1x._CB442948156_SY260_.jpg',
                    title: 'first',
                    p: 'First'
                },
                {
                    id:2,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/haircare_260._CB443016067_SY260_.png',
                    title: 'Second',
                    p: 'Second'
                },
                {
                    id:3,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2019/SingleTitle/Kalank/306x306-Landing-page._CB444463337_SY260_.jpg',
                    title: 'Third',
                    p: 'Third'
                },
                {
                    id:4,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/haircare_260._CB443016067_SY260_.png',
                    title: 'Fourth',
                    p: 'Fourth'
                },
            ],
            cardImg2:[
                {
                    id:1,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Watches/GW/FJ_PC_1x._CB463288606_SY260_.jpg',
                    title: 'first',
                    p: 'First'
                },
                {
                    id:2,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/CEPC/networking/D10471260_data_atf_card_260x260._CB463210104_SY260_.jpg',
                    title: 'Second',
                    p: 'Second'
                },
                {
                    id:3,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wearables/Lenovo_Watch/D10886103_lenovo_C2_DC_GW_260x260._CB442950225_SY260_.jpg',
                    title: 'Third',
                    p: 'Third'
                },
                {
                    id:4,
                    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Cameras/BAU/PCcards/PC_Cards_canon_260x260._CB463263878_SY260_.jpg',
                    title: 'Fourth',
                    p: 'Fourth'
                },
            ]
        }
    }
    
    render() {
        return (
            <div>
            <CardDeck className="m-5 overflow-hidden">
        {/* <Carousel> */}
        {this.state.cardImg.map((img)=>{
            return (
            <Card key={img.id}>
            <Card.Img variant="top" src={img.url} />
            <Card.Body>
            <Card.Title>{img.Text}</Card.Title>
            <Card.Text>
                    {img.p}
           </Card.Text>
            </Card.Body>
            </Card>
            )
        })}
        {/* </Carousel> */}
        </CardDeck>
            <CardDeck className="m-5 overflow-hidden">
        {/* <Carousel> */}
        {this.state.cardImg2.map((img)=>{
            return (
            <Card key={img.id}>
            <Card.Img variant="top" src={img.url} />
            <Card.Body>
            <Card.Title>{img.Text}</Card.Title>
            <Card.Text>
                    {img.p}
           </Card.Text>
            </Card.Body>
            </Card>
            )
        })}
        {/* </Carousel> */}
        </CardDeck>
        <CardDeck className="m-5 overflow-hidden">
        {/* <Carousel> */}
        {this.state.cardImg.map((img)=>{
            return (
            <Card key={img.id}>
            <Card.Img variant="top" src={img.url} />
            <Card.Body>
            <Card.Title>{img.Text}</Card.Title>
            <Card.Text>
                    {img.p}
           </Card.Text>
            </Card.Body>
            </Card>
            )
        })}
        {/* </Carousel> */}
        </CardDeck>
            </div>
        );
    }
}

export default CardCarousel;