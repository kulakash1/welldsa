import React from 'react';
import { Link } from 'react-router-dom';

const NavTest: React.FC = () => {
  return (
    <div className='flex flex-row justify-between p-4 border border-gray-300'>
      <div>
        <Link to='/'>Well Prog Home</Link>
      </div>
      <div>
        <Link to='/admin'>Well Prog</Link>
      </div>
      <div>
        <Link to='/admin'>Well Prog</Link>
      </div>
      <div>
        <Link to='/admin'>Well Prog</Link>
      </div>
      <div>
        <Link to='/admin'>Well Prog</Link>
      </div>
    </div>
  );
}

export default NavTest;
