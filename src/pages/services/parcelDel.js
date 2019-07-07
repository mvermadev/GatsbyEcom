import React, {Component} from 'react';
import Layout from '../../components/layout';
import {CardDeck, Card, Carousel, Form, FormControl, Col, Button} from 'react-bootstrap'
import Heading from '../../components/reuseComp/Heading';

class parcelDel extends Component {
    constructor(props) {
        super(props);
        this.state={
            cardImg:[
                {
                    id:1,
                    url: 'https://as1.ftcdn.net/jpg/00/70/85/46/500_F_70854670_jC4rWbcIcsiJeTKRD7GvcKbHnPxJilKH.jpg',
                    title: 'first',
                    p: 'First'
                },
                {
                    id:2,
                    url: 'https://as2.ftcdn.net/jpg/00/55/56/91/500_F_55569182_ZPtn7vG5e0w3DWRM8ZC4AIduFSh72QOS.jpg',
                    title: 'Second',
                    p: 'Second'
                }
            ]
        }
    }
    render() {
        return (
            <Layout>
                <section className="text-center">
                    <h4>We Deliver Your Hope to around India</h4>
                    <CardDeck className="m-5 parcelimg overflow-hidden">
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

        <div className="container text-center">
        <h2>Add Details to deliver your parcel</h2>
        <Form>
        <Form.Group>
        <Form.Row>
            <Col>
            <Form.Control type="text" name="name" placeholder="First name" />
            </Col>
            <Col>
            <Form.Control placeholder="Last name" />
            </Col>
        </Form.Row>
        </Form.Group>
        <Form.Group>
        <FormControl type="email" placeholder="Email" name="email"/>
        </Form.Group>
        <Form.Group>
        <textarea type="address" placeholder="Enter your Pick-up Address" className="form-control"  />
        </Form.Group>
        <Form.Group>
            <FormControl type="tel" placeholder="Enter Your Contact No." name="cno"></FormControl>
        </Form.Group>
        <Form.Group>
        <textarea type="address" placeholder="Enter your Delivery Address" className="form-control"  />
        </Form.Group>
        <Button className="btn border-dark bg-light text-dark">SUBMIT</Button>
        </Form>
        </div>   </section>
            </Layout>
    )
    }
}


export default parcelDel;