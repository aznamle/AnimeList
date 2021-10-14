import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const List = ({ list }) => {

    const watchLocalStorage = JSON.parse(localStorage.getItem('watch') || '[]')
    const [ watch, setWatch ] = useState(watchLocalStorage)
    const [ alist, setAList] = useState()
    const [ search, setSearch ] = useState('')

    const addWatch = (show) => {
        const newWatchList = [...watch, show]
        setWatch(newWatchList);
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
        <div className='mx-auto flex'>
            <div>
                <input 
                    placeholder='Search Top' 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>

            {/* watch.map can be its own component */}
            {watch && watch.map((item) => (
                <div key={item.mal_id}>
                    {item.title}
                    <button onClick={()=>removeWatch(item)}>
                        Remove
                    </button>
                    <br />
                </div>
            ))}


            {alist?.map((show) => (
                <div className='' key={show.mal_id}>
                    <p>{show.title}</p>
                    <Link to={`/anime/${show.mal_id}`}>
                        <p>{show.mal_id}</p>
                    </Link>
                    {watch.includes(show) ? null
                        : 
                        <button onClick={()=>addWatch(show)}>
                        Add
                    </button>
                    }
                </div>
            ))}

        </div>
    )
}

export default List
