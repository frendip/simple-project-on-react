import React, {FC} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Main from "../pages/Main";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={"/main"} element={<Main/>}></Route>
            <Route path="/*" element={<Navigate to="/main"/>} />
        </Routes>
    );
};

export default AppRouter;