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
            {watch.map((item) => (
                <div>
                    {item.title}
                </div>
            ))}
            
            {list.map((show) => (
                <div>
                    <p>{show.mal_id}</p>
                    <div onClick={()=>addWatch(show)}>
                        Add
                    </div>
                </div>
            ))}

        </div>
    )
}

export default List
