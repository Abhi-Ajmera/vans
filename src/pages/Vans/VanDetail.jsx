import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VanDetail = () => {
  const param = useParams();
  const [van, setVan] = useState(null);
  const [error, setError] = useState(null);
  // console.log(van);

  // fetching data
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((err) => setError(err));
  }, [param.id]);

  return (
    <div className='p-7'>
      {van ? (
        <div
          key={van.id}
          className='van-detail'
        >
          <img src={van.imageUrl} />
          <i
            className={`inline-block my-5 px-9 py-1.5 font-medium rounded-md text-[#FFEAD0] transition duration-200 hover:text-[#FFEAD0] cursor-pointer ${
              van.type == 'simple' ? 'bg-[#E17654]' : van.type == 'rugged' ? 'bg-[#115E59]' : 'bg-[#161616]'
            }`}
          >
            {van.type}
          </i>
          <h2 className='font-bold text-xl'>{van.name}</h2>
          <p className='my-4'>
            <span className='font-bold text-lg'>${van.price}</span>/day
          </p>
          <p className='my-2'>{van.description}</p>
          <button className='inline-block text-center py-3 w-full transition ease-in duration-1000  hover:transform text-white translate-x-1 translate-y-1'>
            Rent this van
          </button>
        </div>
      ) : !error ? (
        <p className='font-semibold text-xl flex justify-center items-center mt-16'>loading please wait</p>
      ) : (
        <p className='font-semibold text-xl flex justify-center items-center mt-16'>Not found</p>
      )}
    </div>
  );
};

export default VanDetail;
