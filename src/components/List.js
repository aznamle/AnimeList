import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { add } from '../app/listSlice'

const List = ({ list }) => {

    // RTK
    // const dispatch = useDispatch()
    // const wList = useSelector((state) => state.wList)
    // END

    const watchLocalStorage = JSON.parse(localStorage.getItem('watch') || '[]')
    const [ watch, setWatch ] = useState(watchLocalStorage)

    const addWatch = (show) => {
        const newWatchList = [...watch, show]
        setWatch(newWatchList);
    }

    useEffect(() => {
        localStorage.setItem('watch', JSON.stringify(watch))
    }, [watch])

    return (
        <div className='mx-auto flex'>

            {watch && watch.map((item) => (
                <div>
                    {item.title}
                </div>
            ))}

            

            {list.map((show) => (
                <div>
                    <p>{show.mal_id}</p>
                    <button onClick={()=>addWatch(show)}>
                        Add
                    </button>
                </div>
            ))}

        </div>
    )
}

export default List
