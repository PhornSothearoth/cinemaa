import { useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import SearchMovies from "../components/SearchMovies";
import Slider from "../components/Slider";
import PupolarMovies from "../page/PupolarMovies";
import UpComing from "../page/UpComing";


function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState([true]);

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=fast&apikey=b95d6092`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovie(responseJson.Search)
      setMovies(responseJson.Search);
      setSearchValue(responseJson.Search);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);





  return (
    <>
      <main>
        <HomePage />
        <div className="">
          <SearchMovies/>
          </div>
        <section>
          
          <section className="">
            <div className=" mb-8 lg:mb-16 text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white pt-7">
                Trailer <span className="text-red-700">Movie</span>
              </h2>
            </div>
            <Slider />
          </section>
          <div >
      

            <PupolarMovies/>
        
          </div>
          <UpComing />
        </section>

      </main>
    </>
  );
}

export default Home;
