import MoviesSlider from '../MoviesSlider'
import './index.css'

const comedyMovies = 'COMEDY'
const actionMovies = 'ACTION'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovies,
  )

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovies,
  )

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        style={{width: '100%'}}
      />
      <div className="container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
