import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

// const cardRef = useRef()





const TitleCards = ({ title, catagory }) => {
    const cardRef = useRef()
    const [apiData, setApiData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRiMTYwOTRjNjBjYWMxMTAzYTk5YjM0NGVjZjY0YyIsInN1YiI6IjY1ZjAwM2MwMWY3NDhiMDE4NDUxOTgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.We75xROlVeJsK8PIKqjXD0qa-DqcfN4_AgEyadmUtkI'
        }
    };





    const handleWheel = (e) => {
        e.preventDefault()
        cardRef.current.scrollLeft += e.deltaY
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${catagory ? catagory : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));
        cardRef.current.addEventListener('wheel', handleWheel)
    }, [])
    return (
        <div className='titleCards'>
            <h2>{title ? title : 'Popular on Netflix'}</h2>
            <div className="card-list" ref={cardRef}>
                {apiData.map((item, index) => {
                    return <Link to={`/player/${item.id}`} className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500/` + item.backdrop_path} alt="" />
                        <p>{item.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards