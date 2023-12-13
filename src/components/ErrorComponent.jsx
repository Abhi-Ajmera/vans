import { Link } from 'react-router-dom';

const ErrorComponent = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-2xl gap-4'>
      <p>No Page Found</p>
      <p>
        🠔
        <Link
          to='/'
          className='underline underline-offset-8 ps-2'
        >
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorComponent;
