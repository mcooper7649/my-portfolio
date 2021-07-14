import React, {Component} from 'react'
import Background from '../images/palm.jpg'
import dtbg from '../images/aboutbg.jpeg'

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
        // <main style={{backgroundImage: "url(" + Background + ")"}} className="lg:hidden min-w-screen bg-cover">
        <main style={{backgroundImage: "url(" + dtbg + ")"}} className="min-w-screen bg-cover">
            <section className="relative justify-center min-h-screen pt-64 lg:px-8">
            <div className="hover:bg-gray-500 mx-4 rounded bg-yellow-200 shadow-2xl bg-opacity-75 lg:rounded-full">
                <h1 className="pt-3 text-center text-4xl lg:text-6xl text-green-100 font-bold cursive lg:home-name">Hello. I'm <span className="text-red-500">Michael</span></h1>
                <h2 className="pt-20 pb-10 mx-20 text-center text-2xl lg:text-3xl text-purple-600 font-bold cursive lg:home-name">"{this.state.quote}"</h2>
                <h2 className="pb-3 mx-20 text-center text-2xl lg:text-3xl text-purple-600 font-bold cursive lg:home-name">-{this.state.author}</h2>
            </div>
            
            </section>
          </main>
           
        // </main>
    )
}
}

export default Home;