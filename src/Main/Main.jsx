import { useContext } from 'react'
import './Main.css'
import { ThemeContext } from '../ThemeContext'
import Header from '../Components/HeaderTemplate/Header';
import Content from '../Content/Content';

const Main = () => {

    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    return (
        <div className={`main ${darkTheme && 'dark'}`}>
            <Header />
            <Content />
        </div>
    )
}

export default Main
