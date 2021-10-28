import React from 'react'

const Relation = ({ animeDetails }) => {

    return (
        <div className='bg-white w-full rounded-md items-center px-4 py-2 space-x-4 flex'>
            <div className=''>
                <h1 className='text-sm font-semibold text-gray-500'>Adaptation</h1>
                {animeDetails.related.Adaptation.map((item) => (
                    <div>
                        <p className='text-sm text-gray-400'>{item.name}</p>
                    </div>
                ))}
            </div>

            <div className=''>
                <h1 className='text-sm font-semibold text-gray-500'>Prequel</h1>
                {animeDetails.related.Prequel.map((item) => (
                    <div>
                        <p className='text-sm text-gray-400'>{item.name}</p>
                    </div>
                ))}
            </div>

            <div className=''>
                <h1 className='text-sm font-semibold text-gray-500'>Sequel</h1>
                {animeDetails.related.Sequel.map((item) => (
                    <div>
                        <p className='text-sm text-gray-400'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Relation
