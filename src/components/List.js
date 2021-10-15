import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WatchList from './WatchList'

const List = ({ list }) => {

    const watchLocalStorage = JSON.parse(localStorage.getItem('watch') || '[]')
    const [ watch, setWatch ] = useState(watchLocalStorage)
    const [ alist, setAList] = useState()
    const [ search, setSearch ] = useState('')

    const addWatch = (show) => {
        if(watch.includes(show)) {
            return watch
        } else {
            const newWatchList = [...watch, show]
            setWatch(newWatchList);
        }
    }

    const removeWatch = (item) => {
        const newWatchList = watch.filter((w) => w.mal_id !== item.mal_id)
        setWatch(newWatchList)
    }

    useEffect(() => {
        localStorage.setItem('watch', JSON.stringify(watch))
        const filteredData = list.filter((anime) => anime.title.toLowerCase().includes(search.toLowerCase()))
        setAList(filteredData)
    }, [watch, list, search])

    return (
        <div className='max-w-5xl mx-auto flex'>
            <div className=''>
                 <input className="
                    w-full
                    px-4
                    py-2
                    text-base text-black
                    transition
                    duration-100
                    ease-in-out
                    transform
                    border-transparent
                    rounded-lg
                    bg-blueGray-100
                    focus:border-blueGray-500
                    focus:bg-white
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-1
                    ring-offset-current ring-offset-2
                "
                placeholder='Search Top' 
                onChange={(e) => setSearch(e.target.value)} 
            />
            </div>
        
        <div className='text-left w-1/2'>
            <WatchList watch={watch} removeWatch={removeWatch} />
        </div>

        <div className='text-left w-1/2'>
            {alist?.map((show) => (
                <div className='' key={show.mal_id}>
                    <img src={show.image_url} />
                    <p>{show.title}</p>
                    <Link to={`/anime/${show.mal_id}`}>
                        <p>{show.rank}</p>
                    </Link>
                    <button onClick={()=>addWatch(show)}>
                        Add
                    </button>
                </div>
            ))}
        </div>

        </div>
    )
}

export default List
