import image54 from '../assets/image54.png';

const About = () => {
  return (
    <div className='bg-bgColor max-sm:w-screen'>
      <img
        className='w-full'
        src={image54}
        alt='image'
      />
      <div className='sm:p-12 p-2'>
        <h3 className='font-bold text-4xl mt-4 max-sm:text-2xl'>
          Don’t squeeze in a sedan when you could relax in a van.
        </h3>
        <p className='text-lg mt-6'>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before
          each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className='text-lg mt-4'>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>

        <div className='bg-[#FFCC8D] p-6 mt-6 border-2 border-black'>
          <h4 className='bg-transparent font-bold text-lg'>
            Your destination is waiting. <br /> Your van is ready.
          </h4>
          <button className='bg-black mt-4 px-8 py-3 text-white'>Explore Our Vans</button>
        </div>
      </div>
    </div>
  );
};

export default About;
