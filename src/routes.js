import React from 'react';
import HomePage from './pages/Home/HomePage';
import CardsContainers from './containers/CardsContainers';
import InforCardContainers from './containers/InforCardContainers';
import SetsContainers from './containers/SetsContainers';
import NotFound from './pages/404NotFound/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/cards',
        exact: true,
        main: ({ match, location }) => <CardsContainers match={match} location={location} />
    },
    {
        path: '/sets',
        exact: true,
        main: ({ match }) => <SetsContainers match={match} />
    },
    {
        path: '/cards/:id',
        exact: true,
        main: ({ match, history, location }) => <InforCardContainers match={match} history={history} location={location} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;