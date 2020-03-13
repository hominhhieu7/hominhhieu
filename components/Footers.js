import React, { Component } from 'react'

export default class Footers extends Component {
    render() {
        return (

            <div>
                <footer>
                    <a style={{ color: "rgba(121, 117, 117, 0.84)" }}
                        href="#"
                        rel="noopener noreferrer"
                    >
                        Design by Ho Minh Hieu
                    <img alt="ant" src="/ant.svg" style={{ padding: "0px 10px" }} />
                        <img alt="ant" src="/next-js.svg" style={{ padding: "0px 10px" }} />
                        <img alt="ant" src="/reactjs.svg" style={{ padding: "0px 10px" }} />
                    </a>
                </footer>
                <style jsx>
                    {`
                    footer {
                        width: 100%;
                        height: 100px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    footer img {
                        margin-left: 0.5rem;
                    }

                    footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    `}
                </style>
            </div>
        )
    }
}
