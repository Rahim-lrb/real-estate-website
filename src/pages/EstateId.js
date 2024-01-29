import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rb from '../images/1175310253-323685561-original.webp';
import axios from 'axios';
import Carousel from '../components/Carousel';
import Loader from "../components/Loader"

const EstateId = () => {
    const { id } = useParams();
    const [propertyData, setPropertyData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://bayut.p.rapidapi.com/properties/detail', {
                    params: {
                        externalID: id,
                    },
                    headers: {
                        'X-RapidAPI-Key': 'a67a8e1ee8msh5604b5419645e06p14cfd3jsn6f9497feaf45',
                        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                    },
                });
                setPropertyData(response.data);
                setLoading(false); // Set loading to false once data is fetched
                console.log(response.data);
            } catch (error) {
                console.error(error);
                setLoading(false); // Set loading to false if there's an error
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className='relative w-full h-full'>
                <Loader></Loader>
            </div>)
    }

    return (
        <div className='pt-20 bg-[#000000] px-20 grid justify-items-center'>
            {/* container */}
            <Carousel images={propertyData?.photos || []} ></Carousel>

            <h2 className='text-gray-400 font-bold text-xl text-center mt-3 capitalize'>{propertyData.title}</h2>
            <p className='text-gray-300 font-semibold pt-6 space-x-40'>
                <span>price: {propertyData.price} $</span>
                <span>score: {propertyData.score}/100</span>
                
            </p>
            {/* content  */}
            <div className='p-4 text-center w-full'>
                <p className='text-gray-500 text-lg text-start'>{propertyData.description}</p>
                <p className='text-white'>my number: {propertyData.phoneNumber.mobile}</p>
            </div>
        </div>
    );
};

export default EstateId;
