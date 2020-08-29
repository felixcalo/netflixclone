import React, { useState } from 'react';
import tmdb from '../../config'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './styles.css';



function MoviesRow({ item }) {


    const [scrollValeur, setscrollValeurs] = useState(-400);

    const MovieLeft = () => {
        let X = scrollValeur + Math.round(window.innerWidth / 2)

        if (X > 0) {
            X = 0;
        } setscrollValeurs(X);
    }

    const MovieRight = () => {

        let x = scrollValeur - Math.round(window.innerWidth / 2);
        let movieRowWidth = item.items.data.results.length * 150
        if ((window.innerWidth - movieRowWidth) > x) {
            x = (window.innerWidth - movieRowWidth) - 60;
        } setscrollValeurs(x);
    }


    return (
        <div className='movieRow'>
            <h1 >{item.title}</h1>

            <div className="movieRowLeftIcon" onClick={MovieLeft}>
                <NavigateBeforeIcon style={{ fontSize: '50px' }} />
            </div>
            <div className="movieRowRightIcon" >
                <NavigateNextIcon style={{ fontSize: '50px' }} onClick={MovieRight} />
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