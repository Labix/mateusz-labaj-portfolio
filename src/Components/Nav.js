import { Link } from "react-router-dom";

import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className='text-napislight font-Poppins flex-initial w-full h-14'>
            <div className='flex justify-evenly items-center w-full h-14'>
                <Link to={'/'}>
                    <span className="transform hover:text-napisdark hover:scale-125 hover:transition ease-out duration-500">Home</span>
                </Link>
                <Link to={'/projects'}>
                    <button className="transform hover:text-napisdark hover:scale-125 hover:transition ease-out duration-500">Projects</button>
                </Link>
                <Link to={'/contact'}>
                    <button className="transform hover:text-napisdark hover:scale-125 hover:transition ease-out duration-500">Contact me</button>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;