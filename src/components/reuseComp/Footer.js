import React, {Component} from 'react';
import {Link} from 'gatsby'
// import 'react-bootstrap';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerLink:[
                {
                    id: 1,
                    text: 'HOME',
                    url : '/'
                },
                {
                    id: 2,
                    text: 'PRODUCTS',
                    url: '/products'
                },
                {
                    id: 3,
                    text: 'SERVICES',
                    url: '/services'
                },
                {
                    id: 4,
                    text: 'CAREER',
                    url: '/career'
                }, 
                {
                    id: 5,
                    text: 'LOGIN',
                    url: '/login'
                },
                {
                    id: 6,
                    text: 'SIGNUP',
                    url: '/signup' 
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="bg-theme text-white text-center">
            <div className="navbar navbar-expand-sm text-white">
                <ul className="navbar-nav ml-auto mr-auto">
                    {this.state.footerLink.map((flink)=>{
                        return (
                            <li key={flink.id} className="nav-item font-weight-bold"> 
                            <Link to={flink.url} className="nav-link text-white">{flink.text}</Link>
                            </li>
                        )
                    })}
                </ul> 
            </div>
                <h6 className="mb-2">This is Footer copyright &copy; 2019</h6>
            </div>
        );
    }
}


export default Footer;