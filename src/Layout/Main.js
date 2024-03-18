import React from 'react';
import Hreader from '../Components/Header/Hreader';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Hreader></Hreader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;