import React, { Component } from 'react';
import './Logo.css';
import { ThemeContext } from '../contexts/ThemeContext';
import Tiles from './SkillsGallery';

const axios = require('axios');

class Home extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Welcome 🥷',
      author: '',
      reload: '',
    };
  }

  componentDidMount() {
    axios.get('https://api.quotable.io/random').then((resp) => {
      console.log(resp.data);
      setTimeout(() => {
        this.setState({
          quote: 'The Dojo is here to Inspire',
          author: Date().slice(0, 16),
        });
      }, 2500);
      setTimeout(() => {
        this.setState({
          quote: 'Please check out the blog or projects',
          author: Date().slice(0, 16),
        });
      }, 5000);
      setTimeout(() => {
        this.setState({
          quote: 'Take this inspirational quote with you...',
          author: Date().slice(0, 16),
        });
      }, 7500);
      setTimeout(() => {
        const getNewQuote = () => {
          axios.get('https://api.quotable.io/random').then((resp) => {
            console.log(resp.data);
            this.setState({
              quote: `${`"` + resp.data.content + `"`}`,
              author: `${`-` + resp.data.author} `,
            });
          });
        };
        this.setState({
          quote: `${`"` + resp.data.content + `"`}`,
          author: `${`-` + resp.data.author}`,
          reload: (
            <i
              onClick={getNewQuote}
              className="pl-4 mt-50 myText reload-icon fas fa-redo"
            ></i>
          ),
        });
      }, 10000);
    });
  }

  render() {
    const { isDarkMode } = this.context;
    const styles = {
      classes: isDarkMode
        ? 'bg-gray-700 pt-12 min-w-screen bg-cover'
        : 'bg-img pt-12 min-w-screen bg-cover',
    };

    return (
      <main className={styles.classes}>
        <section className="content justify-center lg:px-8 lg:mx-20">
          <div className="h-auto grid min-w-screen wrapper pb-5  mx-4 rounded shadow-2xl">
            {/* <h1 className="pt-3 text-center text-4xl lg:text-6xl text-green-100 font-bold cursive lg:home-name">Hello. I'm <span className="text-purple-800">Michael</span></h1> */}
            <h2 className="myText lg:px-20 break-words pt-4 lg:pb-10 text-center text-3xl md:text-5xl font-bold cursive lg:home-name uppercase">
              {this.state.quote}
            </h2>
            <h2 className="myText break-words pt-6 text-center m-auto text-xl font-bold cursive lg:home-name">
              {this.state.author}
            </h2>
            <h3>{this.state.reload}</h3>
          </div>
        </section>
        <hr className="divider line glow my-10" contenteditable />
        <h2 className="px-3 text-white lg:text-5xl uppercase">skillset</h2>

        <section className="">
          <Tiles />
        </section>
        <h5 className="text-xs p-6 text-white uppercase">
          Click image for more info
        </h5>
      </main>
    );
  }
}

export default Home;
