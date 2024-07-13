import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/users/LoginForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard key="activities" /> },
            { path: 'activities/:id', element: <ActivityDetails key="activity" /> },
            { path: 'manage/:id', element: <ActivityForm key='manage' /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            {path: 'login', element: <LoginForm key='login' />},
            { path: 'errors', element: <TestErrors key='errors' /> },
            { path: 'not-found', element: <NotFound key='not-found' /> },
            { path: 'server-error', element: <ServerError key='server-error' /> },
            { path: '*', element: <Navigate replace to='/not-found' key='*' /> },
        ]
    }
]

export const router = createBrowserRouter(routes);