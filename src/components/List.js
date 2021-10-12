import React, { useState } from 'react'

const List = ({ list }) => {
    const [ watch, setWatch ] = useState([])

    const addWatch = (show) => {
        const newWatchList = [...watch, show]
        setWatch(newWatchList);
    }

    console.log(watch)

    return (
        <div className='mx-auto flex'>
            {list.map((show) => (
                <div>
                    <p>{show.mal_id}</p>
                    <div onClick={()=>addWatch(show)}>
                        Add
                    </div>
                </div>
            ))}
            {watch.map((item) => (
                <div>
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default List
