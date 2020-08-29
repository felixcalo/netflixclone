import React, { useEffect, useState } from 'react';
import getMovies from '../components/DataRecover';
import MoviesRow from '../components/MoviesRow'
import FeatureMovie from '../components/FeatureMovies';
import Header from '../components/Header'
import Footer from '../components/Footer'
import './style.css';


export default function Index() {
  const [movieList, setMovieList] = useState([]);
  const [feactureData, setFeactureData] = useState(null);
  const [bgBlack, setbgBlack] = useState(false);
  const [sizeList, setSizeList] = useState(0)


  useEffect(() => {
    async function loadData() {
      const list = await getMovies.AllMovies();
      setMovieList(list);
      const FiltreMovieFeacture = list.filter((item) => item.slug === 'originals');
      const randomMovie = Math.floor(Math.random() * (FiltreMovieFeacture.map(item => item.items.data.results.length - 1)));
      const idMovieRandom = FiltreMovieFeacture[0].items.data.results[randomMovie].id
      const movieInfo = await getMovies.getMoviesInfos(idMovieRandom, 'tv');
      setFeactureData(movieInfo.data)
      setSizeList(FiltreMovieFeacture.map(item => item.items.data.results.length - 1))

    };
    loadData();
  }, []);

  useEffect(() => {
    const scroLListener = () => {
      (window.scrollY > 10) ? setbgBlack(true) : setbgBlack(false);
    }
    window.addEventListener('scroll', scroLListener)
    return () => {
      window.removeEventListener('scroll', scroLListener)

    }
  }

    , [])
  return (
    <div className='app'>
      <Header black={bgBlack} />
      {feactureData && <FeatureMovie item={feactureData} />}
      <section className='listMovie'>
        {movieList.map((item, key) => (<MoviesRow item={item} key={key} />))}
      </section>
      <Footer data={sizeList} />
    </div >
  );
}

