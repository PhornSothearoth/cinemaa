import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from "../page/Loading";
import Cards from "./Cards";

export default function Slider() {
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async () => {
    const url = `https://www.omdbapi.com/?s=spider&apikey=b95d6092`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setSearchValue(responseJson.Search);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {loading ? (
          <Loading />
        ) : (
          movies.length > 0 &&
          movies.map((movie) => (
            <Cards key={movie.id} url={movie.Poster} tittle={movie.title} />
          ))
        )}
      </Carousel>
      ;
    </div>
  );
}
