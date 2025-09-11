import React from 'react';
import Preloader from '../components/Preloader.js';
import MovieList from '../components/MovieList.js';
import Search from '../components/Search.js';
import './Main.css';

class Main extends React.Component
{
    state = {movies:[], loading:false, type:"all", count:0}
    componentDidMount()
    {
        // fetch('https://omdbapi.com/?apikey=91794e00&s=Terminator')
        // .then(response => response.json())
        // .then(data => this.setState({movies:data.Search}))
        this.setState({loading:true})
        fetch(`https://omdbapi.com/?apikey=91794e00&s=${str.trim()}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}`)
        .then(response => response.json())
        .then
        (
            data => 
            {
                if(data.Response === "True")this.setState({movies: data.Search, loading:false});
                else this.setState({movies:[], loading:false, count:data.totalResults });
            }
        )
    }
    searchMovie = (str, type = 'all', page = 1) =>
    {
        this.setState({loading:true})
        fetch(`https://omdbapi.com/?apikey=91794e00&s=${str.trim()}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}`)
        .then(response => response.json())
        .then
        (
            data => 
            {
                if(data.Response === "True")this.setState({movies: data.Search, loading:false});
                else this.setState({movies:[], loading:false, count:data.totalResults });
            }
        )
        //this.setState({loading:false});
    }
    render()
    {
        console.log('-----------------------main.render----------------------------')
        console.log(this.state);
        return(
            <div className='main'>
                <div className='wrap'>
                  <Search searchMovie={this.searchMovie} totalCount={this.state.count}/>
                  {
                    !this.state.loading && //this.state.movies.length &&
                    this.state.movies.length ? <MovieList movies={this.state.movies}/> : <Preloader />
                    //if(!this.state.loading)
                      //  this.state.movies.length ? <MovieList movies={this.state.movies}/> : <Preloader />
                    
                  }
                </div>
            </div>
        )
    }
}
export default Main;