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
            <div>
            <div className="footer">
                <ul>
                    {this.state.footerLink.map((flink)=>{
                        return (
                            <li key={flink.id}> 
                            <Link to={flink.url}>{flink.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        
            </div>
        );
    }
}


export default Footer;