// Core
import React from 'react';
import Loadable from 'react-loadable';

// Components
import { Loading } from '../../Loading';

const LoadableComponent = Loadable({
    loader:  () => import(/* webpackChunkName: "space" */ './Component'),
    loading: Loading,
    delay:   2000,
});

export const Space = () => {
    return <LoadableComponent />;
};
