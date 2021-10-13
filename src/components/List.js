import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { add } from '../app/listSlice'

const List = ({ list }) => {

    const dispatch = useDispatch()
    const wList = useSelector((state) => state.wList)

    const watchLocalStorage = JSON.parse(localStorage.getItem('wList') || '[]')
    const [ watch, setWatch ] = useState(watchLocalStorage)

    // const addWatch = (show) => {
    //     const newWatchList = [...watch, show]
    //     setWatch(newWatchList);
    // }

    useEffect(() => {
        localStorage.setItem('wList', JSON.stringify(wList))
    }, [watch])

    console.log(wList)

    return (
        <div className='mx-auto flex'>

            {wList && wList.map((item) => (
                <div>
                    {item.title}
                </div>
            ))}

            

            {list.map((show) => (
                <div>
                    <p>{show.mal_id}</p>
                    <button onClick={()=>dispatch(add(show))}>
                        Add
                    </button>
                </div>
            ))}

        </div>
    )
}

export default List
