import React, {Component} from 'react';
import {Link} from 'gatsby'

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
            <div className="footer">
                <ul className="ulfooter">
                    {this.state.footerLink.map((flink)=>{
                        return (
                            <li key={flink.id} className="lifooter"> 
                            <Link to={flink.url} className="link">{flink.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


export default Footer;