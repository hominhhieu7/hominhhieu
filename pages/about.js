import React, { Component } from 'react'
import Layouts from '../components/Layout';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
export default class About extends Component {
    render() {
        return (
            <Layouts>
                <img className="hero" src="./IMG_4803.JPG" />
                <div className="descript">
                    <h4>
                        Hi again! My fullname is Ho Minh Hieu, I'm a Front-end, Back-end Developer.
                        I haven't experience working or only 6 month working. However you can check <a style={{color: '#184aff'}} target="_blank" href="https://github.com/hominhhieu7">My github. </a>
                         I have some project.
                    </h4>
                </div>
                <div>
                    <Timeline mode="left" style={{ width: "500px", lineHeight:'2' }}>
                        <Timeline.Item label="08/2015" >Study in Thu Dau Mot University</Timeline.Item>
                        <Timeline.Item label="06/2018 - 08/2018">Internship in Netco Post.</Timeline.Item>
                        <Timeline.Item label="09/2018 - 12/2018">Web deisgn in Smartlog(SEM).</Timeline.Item>
                        <Timeline.Item label="04/2019">Learning online React.js in Coursera.org</Timeline.Item>
                        <Timeline.Item label="05/2019">Created app using React + Redux.</Timeline.Item>
                        <Timeline.Item label="06/2019">Learning Nodejs, Express.js, MongoDB</Timeline.Item>
                        <Timeline.Item label="12/2019"> Graduated from Thu Dau Mot University</Timeline.Item>
                        <Timeline.Item color='red' dot={<ClockCircleOutlined style={{ fontSize: '14px', padding: '0 0 0 0' }} />} label="Currently">Finding a job</Timeline.Item>
                    </Timeline>
                </div>
                <style jsx>
                    {`
                        .hero{
                            border-radius: 50%;
                            width: 250x;
                            height: 250px;
                            padding-top: 10px;
                        }
                        .descript{
                            padding-bottom: 50px;
                            margin: 1rem;
                            flex-basis: 80%;
                            padding: 1.5rem;
                            text-align: left;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-wrap: wrap;
                            max-width: 800px;
                            margin-top: 3rem;
                            color: inherit;
                            text-decoration: none;
                            transition: color 0.15s ease, border-color 0.15s ease;
                        }
                        .descript h4 {
                            margin: 0 0 1rem 0;
                            font-size: 1.5rem;
                        }
                    `}
                </style>
            </Layouts>
        )
    }
}
