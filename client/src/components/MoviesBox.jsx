import React from 'react'
import MovieList from './MovieList'


class MoviesBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [{id: 1, title: "Planet of the Apes", detail: "After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind."},
    {id: 2, title: "Life", detail: "A team of scientists aboard the International Space Station discover a rapidly evolving life form, that caused extinction on Mars, and now threatens the crew and all life on Earth."}]
    }
  }

  render(){
    console.log("hello")
    return (
      <div className="movies-box">
        <MovieList data={this.state.data}/>
      </div>
    )
  }
}

export default MoviesBox
