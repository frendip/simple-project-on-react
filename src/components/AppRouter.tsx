import React, {FC} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Main from "../pages/Main";
import Calculator from "../pages/Calculator";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={"/main"} element={<Main/>}></Route>
            <Route path={"/calculator"} element={<Calculator/>}></Route>
            <Route path="/*" element={<Navigate to="/main"/>} />
        </Routes>
    );
};

export default AppRouter;