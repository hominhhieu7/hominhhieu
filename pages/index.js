import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import Layouts from '../components/Layout';

const { Header, Footer, Content } = Layout;

export default class Home extends React.Component {


  render() {
    return (
      <div>
        <Layouts>
            <img className="hero" src="./IMG_4803.JPG" />
            <h1 className="title">
              Hi! I'm Hieu.
          </h1>
            <p className="description">
              <code>Front-end, Back-end Developer</code>
            </p>

            <div className="grid">
              <div className="card" >
                <h3>
                  Seeking position of a Website Developer where I would be able to put to use the knowledge gained in the
                  software development cycle and technical aptitude.

                  </h3>
              </div>
            </div>
          <style jsx>{`
      
      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }
      .hero{
        border-radius: 50%;
        width: 250x;
        height: 250px;
        padding-top: 10px;
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 80%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

          <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
        </Layouts>
      </div>
    )
  }
}