import React, { useState } from 'react';
import tmdb from '../../config'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './styles.css';



function MoviesRow({ item }) {


    const [scrollValeur, setscrollValeurs] = useState(-400);

    function movieLeft(e) {
        e.preventDefault();

        let X = scrollValeur + Math.round(window.innerWidth / 2)

        if (X > 0) {
            X = 0;
        } setscrollValeurs(X);
    }

    function movieRight(e) {
        e.preventDefault();

        let x = scrollValeur - Math.round(window.innerWidth / 2);
        let movieRowWidth = item.items.data.results.length * 150;
        if ((window.innerWidth - movieRowWidth) > x) { x = (window.innerWidth - movieRowWidth) - 60; }
        setscrollValeurs(x);
    }


    return (
        <div className='movieRow'>
            <h1 >{item.title}</h1>

            <div className="movieRowLeftIcon" onClick={movieLeft}>
                <NavigateBeforeIcon style={{ fontSize: '50px' }} />
            </div>
            <div className="movieRowRightIcon" onClick={movieRight} >
                <NavigateNextIcon style={{ fontSize: '50px' }} />
            </div>

            <div className='movieRowItems' style={{ marginLeft: scrollValeur, width: item.items.data.results.length * 150 }}>
                {item.items.data.results.map((it, key) => (
                    <div key={key} className='movieRowItemsEach'>
                        <img src={`${tmdb.API_URL_IMAGE}${it.poster_path} `} alt={it.title || it.name} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default MoviesRow;