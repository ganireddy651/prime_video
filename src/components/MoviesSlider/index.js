import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(movieDetails => (
          <MovieItem movieDetails={movieDetails} key={movieDetails.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
