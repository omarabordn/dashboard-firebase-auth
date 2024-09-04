import { useContext } from 'react';
import './Header.css';
import user from '../../assets/user.jpg'
import { ThemeContext } from '../../ThemeContext';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { TbMessage } from 'react-icons/tb';
import { IoAnalytics } from 'react-icons/io5';
import { HiOutlineMoon } from 'react-icons/hi';
import { RiSettingsLine } from 'react-icons/ri';
import { HiOutlineLogout } from 'react-icons/hi';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';

const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    function changeTheme() {
        setDarkTheme(!darkTheme)
    }

    const logout = () => {
        signOut(auth);
    }
    return (
        <header className={`header ${darkTheme && 'dark'}`}>
            <div className="search-bar">
                <input type="text" placeholder='Search...' />
                <BiSearch className='icon' />
            </div>
            <div className="tools">
                <AiOutlineUser className='icon' />
                <TbMessage className='icon' />
                <IoAnalytics className='icon' />
                <div className="divider"></div>
                <HiOutlineMoon className='icon' onClick={changeTheme} />
                <RiSettingsLine className='icon' />
                <HiOutlineLogout className='icon' onClick={logout} />
                <div className="divider"></div>
                <div className="user">
                    <img src={user}
                        alt='' className='profile-img' />
                </div>
            </div>

        </header>
    )
}

export default Header
