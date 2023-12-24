import { data } from "autoprefixer";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import HomePage from "../components/HomePage";
import Modals from "../components/Modals";
import MovieListHeaing from "../components/MovieListHeaing";
import SearchBox from "../components/SearchBox";
import SearchMovies from "../components/SearchMovies";
import Slider from "../components/Slider";
import Trailer from "../components/Trailer";
import Loading from "../page/Loading";
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




  // Modal

  return (
    <>
      <main>
        <HomePage />
        <div className="">
            <SearchMovies />
          </div>
        <section onClick={() => 
         { setOpenModal(true)
          setMovie(data)
        }}>
          
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

        {/* Model */}

     
        <Modals
          openModal={openModal}
          onCloseModal={() => setOpenModal(false)}
          data={movie}
        />
      </main>
    </>
  );
}

export default Home;
