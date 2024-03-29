import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from '../layout/App';
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/Errors/TestError";
import NotFound from "../../features/Errors/NotFound";
import ServerError from "../../features/Errors/ServerError";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'activities/:id', element: <ActivityDetails/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>},
            {path: 'errors', element: <TestErrors key='errors' />},
            {path: 'not-found', element: <NotFound key='not-found' />},
            {path: 'server-error', element: <ServerError key='server-error' />},
            {path: '*', element: <Navigate replace to='/not-found' key='wildcard' />},
        ]
    }
]

export const router = createBrowserRouter(routes)