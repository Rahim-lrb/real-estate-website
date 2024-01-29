import React, { useEffect, useState } from 'react';
import { fetchApi } from '../utils/fetchApi';
import Rb from '../images/1175310253-323685561-original.webp';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';


export default function Estate() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchApi();
        setData(result); 
        setLoading(false)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className='relative w-full h-full'>
        <Loader loading={loading}></Loader>
      </div>
    );
  }

  return (
    <div className='pt-20 bg-[#000000] flex justify-center'>
      {/* cards */}
      <div className='px-5 space-y-6 grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3'>
        {data.map((item, index) => (
          <Link to={`/Estate/${item.id}`} key={index} className='max-w-80 p-4 bg-[#17171c] flex flex-col justify-center space-y-3 shadow-lg shadow-blue rounded-lg cursor-pointer hover:scale-105 duration-300'>
            <div>
              <img className='rounded-lg' alt='img' src={item.coverPhoto.url} />
            </div>
            <div className='px-2'>
              <div className='text-white flex justify-between'>
                <div>
                  <span className='font-normal'>{item.beds} beds</span>
                  <span className='font-normal'> {item.baths} baths</span>
                </div>
                <span className='font-medium text-mds'>{item.price}£</span>
              </div>
              <h3 className='text-gray-400 text-md font-bold'>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
