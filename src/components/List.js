import React, { useState, useEffect } from 'react'

const List = ({ list }) => {
    const watchLocalStorage = JSON.parse(localStorage.getItem('watch') || '[]')
    const [ watch, setWatch ] = useState(watchLocalStorage)

    const addWatch = (show) => {
        const newWatchList = [...watch, show]
        setWatch(newWatchList);
    }

    useEffect(() => {
        localStorage.setItem('watch', JSON.stringify(watch))
    }, [watch])

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
                    <button onClick={()=>addWatch(show)}>
                        Add
                    </button>
                </div>
            ))}

        </div>
    )
}

export default List
