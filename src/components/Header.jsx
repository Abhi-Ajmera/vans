import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between py-4 sm:px-12 px-4'>
        <div>
          <h1 className='font-bold text-3xl max-sm:text-xl'>
            <NavLink to='./'>#VANSLIFE</NavLink>
          </h1>
        </div>
        <div>
          <ul className='flex gap-6 text-lg'>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
                to='/about'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
                to='/vans'
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
