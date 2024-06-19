import React, { useEffect, useState } from 'react';
import './Player.css';
import backArrow from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    })


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRiMTYwOTRjNjBjYWMxMTAzYTk5YjM0NGVjZjY0YyIsInN1YiI6IjY1ZjAwM2MwMWY3NDhiMDE4NDUxOTgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.We75xROlVeJsK8PIKqjXD0qa-DqcfN4_AgEyadmUtkI'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])


    return (
        <div className="player">
            <img src={backArrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' allowFullScreen width={'90%'} height={'90%'} frameBorder="0"></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div >
    );
};

export default Player;
