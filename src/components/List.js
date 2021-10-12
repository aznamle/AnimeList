import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../app/listSlice'

const List = ({ list }) => {

    const dispatch = useDispatch()
    const wList = useSelector((state) => state.watchList)

    // const watchLocalStorage = JSON.parse(localStorage.getItem('watch') || '[]')
    const [ watch, setWatch ] = useState([])

    const addWatch = (show) => {
            const newWatchList = [...watch, show]
            setWatch(newWatchList);
    }

    // useEffect(() => {
    //     localStorage.setItem('watch', JSON.stringify(watch))
    // }, [watch])

    console.log(wList)
    console.log(watch)

    return (
        <div className='mx-auto flex'>
            {watch.map((item) => (
                <div>
                    {item.title}
                </div>
            ))}

            {list.map((show) => (
                <div>
                    <p>{show.mal_id}</p>
                    <button onClick={()=>dispatch(add(addWatch(show)))}>
                        Add
                    </button>
                </div>
            ))}

        </div>
    )
}

export default List
