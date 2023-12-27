import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loading from "./Loading";

export default function NowPlaying() {
  const [searchValue, setSearchValue] = useState("");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([true]);

  const getMovies = async () => {
    const url = `https://www.omdbapi.com/?s=doctor&apikey=b95d6092`;
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
  return (
    <main>
      <section className="container mx-auto bg-black">
        <div className=" mb-8 lg:mb-16 text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white pt-7">
            Now <span className="text-red-700">Playing</span>
          </h2>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl pb-7">
          {loading ? (
            <Loading />
          ) : (
            movies.length > 0 &&
            movies.map((movie) => (
              <Cards key={movie.id} url={movie.Poster} tittle={movie.title} />
            ))
          )}
        </section>
      </section>
    </main>
  );
}
