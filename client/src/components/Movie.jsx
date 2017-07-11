import React from 'react'

class Movie extends React.Component {

  render(){
    return (
      <div className="movie">
        <h3 className="movie-title">{this.props.title}</h3>
          <p className="movie-detail">{this.props.children}</p>
      </div>
    )
  }


}
export default Movie
