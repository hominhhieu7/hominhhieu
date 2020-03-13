import React, { Component } from 'react';
import Highlight from 'react-highlight.js'
import Layouts from '../components/Layout';
export default class contact extends Component {
    state = {
        content: `
        //Todo contact me
        const contactMe = async (send) => {
            try {
                const phone = 84979383120;
                const email = 'hominhhieu2502@gmail.com';
        
                return await send(email).connect(phone);
            } catch(err) { 
                console.log(err);
            }
        }`
    }
    render() {
        return (
            <Layouts>
                <Highlight language="javascript">
                    {this.state.content}
                </Highlight>
                <style jsx>{`
                pre, .pre{
                    width: 400px;
                }
                `}</style>
            </Layouts>

        )
    }
}
