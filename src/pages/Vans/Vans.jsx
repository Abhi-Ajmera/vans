import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorComponent from '../../components/ErrorComponent';

const Vans = () => {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVansData(data.vans))
      .catch((err) => <ErrorComponent err={err.message} />);
  }, []);

  return (
    <div className='p-7 min-lg:p-8'>
      <h2 className='text-3xl font-bold text-center mt-2 mb-4'>Explore our van options</h2>
      <div className='grid grid-cols-2 gap-x-14 gap-6 m-2 justify-center'>
        {vansData.map((van) => (
          <Link
            key={van.id}
            to={`/vans/${van.id}`}
          >
            <div
              className='h-full '
              key={van.id}
            >
              <img
                className=' max-w-full rounded-md'
                src={van.imageUrl}
              />
              <div className='mt-1 flex sm:justify-between sm:items-center max-sm:flex-col'>
                <h3 className='font-bold text-xl'>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i
                className={`inline-block mt-2 px-9 py-2 font-medium rounded-md text-[#FFEAD0] transition duration-200 hover:text-[#FFEAD0] cursor-pointer ${
                  van.type == 'simple' ? 'bg-[#E17654]' : van.type == 'rugged' ? 'bg-[#115E59]' : 'bg-[#161616]'
                }`}
              >
                {van.type}
              </i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vans;
