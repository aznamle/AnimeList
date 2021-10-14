import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const List = ({ list }) => {

    const watchLocalStorage = JSON.parse(localStorage.getItem('watch') || '[]')
    const [ watch, setWatch ] = useState(watchLocalStorage)

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
    }, [watch])

    return (
        <div className='mx-auto flex'>

            {watch && watch.map((item) => (
                <div key={item.mal_id}>
                    {item.title}
                    <button onClick={()=>removeWatch(item)}>
                        Remove
                    </button>
                </div>
            ))}

            

            {list.map((show) => (
                <div key={show.mal_id}>
                    <Link to={`/anime/${show.mal_id}`}>
                        <p>{show.mal_id}</p>
                    </Link>
                        <button onClick={()=>addWatch(show)}>
                            Add
                        </button>
                </div>
            ))}

        </div>
    )
}

export default List
