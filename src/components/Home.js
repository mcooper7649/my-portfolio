import React, { Component } from 'react';
import './Logo.css';
import { ThemeContext } from '../contexts/ThemeContext';

const axios = require('axios');

class Home extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Welcome to My Code Dojo 🥷',
      author: Date().slice(0, 16),
    };
  }

  componentDidMount() {
    axios.get('https://api.quotable.io/random').then((resp) => {
      console.log(resp.data);
      setTimeout(() => {
        this.setState({
          quote: 'A place to inspire',
          author: Date().slice(0, 16),
        });
      }, 2500);
      setTimeout(() => {
        this.setState({
          quote: 'Please check out the blog',
          author: Date().slice(0, 16),
        });
      }, 5000);
      setTimeout(() => {
        this.setState({
          quote: 'View my projects and drop me a comment.',
          author: Date().slice(0, 16),
        });
      }, 7500);
      setTimeout(() => {
        this.setState({
          quote: 'Thanks for popping by, check out this motivational quote!!',
          author: Date().slice(0, 16),
        });
      }, 10000);
      setTimeout(() => {
        this.setState({
          quote: `${`"` + resp.data.content + `"`}`,
          author: `${`-` + resp.data.author}`,
        });
      }, 12500);
    });
  }

  render() {
    const { isDarkMode } = this.context;
    const styles = {
      classes: isDarkMode
        ? 'bg-gray-700  h-screen pt-32 min-w-screen bg-cover'
        : 'bg-img pt-32 min-w-screen bg-cover',
    };
    return (
      <main className={styles.classes}>
        <section className="relative justify-center h-full lg:px-8 lg:mx-20">
          <div className="h-auto grid p overflow-auto min-w-screen wrapper  mx-4 rounded shadow-2xl  lg:rounded-full ">
            {/* <h1 className="pt-3 text-center text-4xl lg:text-6xl text-green-100 font-bold cursive lg:home-name">Hello. I'm <span className="text-purple-800">Michael</span></h1> */}
            <h2 className="myText lg:px-20 break-words pt-4 lg:pt-20 lg:pb-10 text-center text-3xl md:text-5xl font-bold cursive lg:home-name">
              {this.state.quote}
            </h2>
            <h2 className="myText break-words text-center m-auto text-3xl font-bold cursive lg:home-name">
              {this.state.author}
            </h2>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
