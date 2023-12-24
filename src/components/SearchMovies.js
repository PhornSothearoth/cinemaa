import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import MovieListHeaing from "./MovieListHeaing";
import SearchBox from "./SearchBox";

export default function SearchMovies() {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b95d6092`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setSearchValue(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);
  return (
    <>
      <div className="container mx-auto w-full max-w-sm">
        <MovieListHeaing heading="movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl pb-7">
        {movies.map((movie) => (
          <Cards url={movie.Poster} tittle={movie.title} />
        ))}
      </section>
    </>
  );
}
