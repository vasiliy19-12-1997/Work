import React from 'react';
import { Routes, Route,} from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>(
                <Route 
                component = {route.component} 
                path = {route.path}/> 
            ))}
          </Routes>
        
    );
};

export default AppRouter;


