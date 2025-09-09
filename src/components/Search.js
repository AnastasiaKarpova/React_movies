import React from 'react';
import './Search.css';

class Search extends React.Component
{
    state =
    {
        search:""
    }

    handleKey = (event) =>
    {
        if(event.key === 'Enter')this.props.searchMovie(this.state.search, this.state.type);
    }
    handlerFilter = (event) =>
    {
        this.setState
        (
            ()=>({type:event.target.dataset.type}),
            ()=>{this.props.searchMovie(this.state.search, this.state.type);}
        );
    }

    render()
    {
        return(
            <>
             <div className='search'>
                <input type="search" placeholder='Введите название фильма'
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}
                />
                <button className='btn' onClick={() => this.props.searchMovie(this.state.search)}>
                    Поиск
                </button>
             </div>
             <div className='radio'>
                <div><input type="radio" name="type" data-type="all"    checked={this.state.type==='all'}       onChange={this.handlerFilter}/><span>All</span></div>
                <div><input type="radio" name="type" data-type="Movies" checked={this.state.type==='movies'}    onChange={this.handlerFilter}/><span>Movies</span></div>
                <div><input type="radio" name="type" data-type="Series" checked={this.state.type==='series'}    onChange={this.handlerFilter}/><span>Series</span></div>
                <div><input type="radio" name="type" data-type="Games"  checked={this.state.type==='games'}     onChange={this.handlerFilter}/><span>Games</span></div>
             </div>
            </>
        )
    }
}
export default Search;