import React from 'react'

const WatchList = ({ watch, removeWatch}) => {
    return (
        <div>
            {watch && watch.map((item) => (
                <div key={item.mal_id}>
                    {item.title}
                    <button onClick={()=>removeWatch(item)}>
                        Remove
                    </button>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default WatchList
