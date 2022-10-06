import React, {FC} from 'react';
import classes from "./NavBar.module.scss"
import {Link} from "react-router-dom";

const NavBar: FC = () => {
    return (
        <nav className={classes.navBar}>
            <Link className={classes.navBar__element} to={"/main"}>Главная</Link>
            <Link className={classes.navBar__element} to={"/calculator"}>Калькулятор</Link>
            <Link className={classes.navBar__element} to={"/quiz"}>Квиз</Link>
        </nav>
    );
};

export default NavBar;