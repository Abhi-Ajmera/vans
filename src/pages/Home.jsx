import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='h-screen bg-homeBg bg-cover bg-bgColor flex items-center justify-center'>
        <div className='p-12 bg-transparent'>
          <h3 className='bg-transparent text-white text-6xl'>You got the travel plans, we got the travel vans.</h3>
          <p className='bg-transparent text-white text-lg mt-10'>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
            trip.
          </p>
          <Link to='/vans'>
            <button className='w-full mt-10 py-3 bg-[#FF8C38;] rounded-sm'>Find your van</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
