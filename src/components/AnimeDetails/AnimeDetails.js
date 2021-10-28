import React from 'react'
import { useParams } from 'react-router'
import { useGetAnimeQuery } from '../../app/services/animeApi'
import Loader from '../Loader'
import Section from '../Section'

import {
    AiFillStar
} from 'react-icons/ai'
import AnimeStats from './AnimeStats'
import Relation from './Relation'

const AnimeDetails = () => {
    const { mal_id } = useParams()
    const { data, isFetching } = useGetAnimeQuery(mal_id)

    const animeDetails = data

    console.log(animeDetails)
    if(isFetching) return <Loader />
    
    return (
        <div className=''>
            <Section>
                <div className='bg-gray-800 mx-auto top-0 overflow-hidden'>
                    <img className='object-cover h-48 md:h-80 w-full filter blur-md' src={animeDetails.image_url} />
                </div>

                <div className='bg-white'>
                    <div className='mx-auto max-w-screen-xl px-8 md:px-0 py-6 pb-6 md:flex space-y-2'>
                        <div className='shadow-xl w-1/2 md:w-72 md:-mt-32 z-30'>
                            <img className='object-cover w-full rounded-md' src={animeDetails.image_url} />
                        </div>
                        <div className='md:ml-8 space-y-2 w-full md:w-3/5 md:mt-6'>
                            <h1 className='text-2xl text-gray-500'>
                                {animeDetails.title}
                            </h1>
                            <p className='text-sm font-medium text-gray-400 tracking-wide leading-normal whitespace-pre-line'>
                                {animeDetails.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
                </Section>

                <Section>
                <div className='mx-auto max-w-screen-xl flex'>
                <div className='py-4 space-y-4'>
                    <div className='bg-white w-64 rounded-md flex items-center px-2 space-x-4'>
                        <div className='py-2'>
                        <AiFillStar fontSize='15px' className=' text-yellow-300'/>
                        </div>
                        <p className='text-sm font-semibold text-gray-500'>#{animeDetails.rank} Highest Ranked All Time</p>
                    </div>

                    <div className='bg-white w-64 rounded-md flex items-center px-2 space-x-4'>
                        <div className='py-2'>
                        <AiFillStar fontSize='15px' className=' text-yellow-300'/>
                        </div>
                        <p className='text-sm font-semibold text-gray-500'>#{animeDetails.popularity} Highest Rated</p>
                    </div>

                    <AnimeStats animeDetails={animeDetails} />
                </div>

                <div className='py-4 space-y-4 px-4'>
                </div>

                </div>
                </Section>


        </div>
    )
}

export default AnimeDetails
