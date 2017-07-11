import React from 'react'
import Movie from './Movie'

class MovieList extends React.Component{

  render(){

    const movieNodes = this.props.data.map((movie) => {
      return <Movie key={movie.id} title={"Title: " + movie.title}> {"Description: " + movie.detail}</Movie>
    })
    return (
      <div className="movie-list">
        {movieNodes}
      </div>
    )
  }

}

export default MovieList
