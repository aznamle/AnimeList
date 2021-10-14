import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { add } from '../app/listSlice'

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
                <div>
                    {item.title}
                    <button onClick={()=>removeWatch(item)}>
                        Remove
                    </button>
                </div>
            ))}

            

            {list.map((show) => (
                <div>
                    <Link to={`anime/${show.mal_id}`}>
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
