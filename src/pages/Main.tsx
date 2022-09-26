import React, {FC} from 'react';
import classes from "./Main.module.scss";

const Main: FC = () => {
    return (
        <div>
            <h1 className={classes.title}>Главная страница</h1>
        </div>
    );
};

export default Main;