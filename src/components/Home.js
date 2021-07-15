import React, {Component} from 'react'
import dtbg from '../images/aboutbg.jpeg'
import './Logo.css'

class Home extends Component{
    state = {
        quote: ''
      }
      
   
    componentDidMount(){
      const axios = require('axios');
  
       axios.get('https://api.quotable.io/random').then(resp => {
           console.log(resp.data)
          this.setState({
            quote: resp.data.content,
            author: resp.data.author
          })
          });
         
     }

    //  componentDidMount(){
    //     const axios = require('axios');
    
    //      axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then(resp => {
    //         this.setState({
    //           quote: resp.data.message
    //         })
    //         });
           
    //    }
    render(){ 
    return (
        <main style={{backgroundImage: "url(" + dtbg + ")"}} className=" pt-32 min-w-screen bg-cover">
            <section className="relative justify-center min-h-screen lg:px-8">
            <div className="wrapper hover:bg-gray-500 mx-4 rounded bg-red-400 shadow-2xl bg-opacity-100 lg:rounded-full">
                <h1 className="pt-3 text-center text-4xl lg:text-6xl text-green-100 font-bold cursive lg:home-name">Hello. I'm <span className="text-purple-800">Michael</span></h1>
                <h2 className="pt-20 pb-10 mx-20 text-center text-2xl lg:text-3xl text-purple-800 font-bold cursive lg:home-name">"{this.state.quote}"</h2>
                <h2 className="pb-3 mx-20 text-center text-2xl lg:text-3xl text-purple-800 font-bold cursive lg:home-name">-{this.state.author}</h2>
            </div>
            
            </section>
          </main>

    )
}
}

export default Home;