import React, {Component} from 'react';
import Layout from '../../components/layout';
import {CardDeck, Card, Carousel} from 'react-bootstrap'


class homeDec extends Component {
    constructor(props) {
        super(props);
        this.state={
            cardImg:[
                {
                    id:1,
                    url: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    title: 'first',
                    p: 'First'
                },
                {
                    id:2,
                    url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    title: 'Second',
                    p: 'Second'
                },
                {
                    id:3,
                    url: 'https://images.pexels.com/photos/1484981/pexels-photo-1484981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    title: 'Third',
                    p: 'Third'
                },
                {
                    id:4,
                    url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    title: 'Fourth',
                    p: 'Fourth'
                },
            ],
            cardImg2:[
                {
                    id:1,
                    url: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'first',
                    p: 'First'
                },
                {
                    id:2,
                    url: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    title: 'Second',
                    p: 'Second'
                },
                {
                    id:3,
                    url: 'https://images.pexels.com/photos/276508/pexels-photo-276508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Third',
                    p: 'Third'
                },
                {
                    id:4,
                    url: 'https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Fourth',
                    p: 'Fourth'
                },
            ]
        }
    }
    render() {
        return (
            <Layout>
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
            </Layout>
        );
    }
}


export default homeDec;