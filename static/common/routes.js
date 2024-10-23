import React, { lazy } from 'react';

const Home = lazy(() => import('../src/pages/home/home'));
const Jotai = lazy(() => import('../src/pages/jotai/jotai'));
const Drag = lazy(() => import('../src/pages/drag/drag'));
const DragHook = lazy(() => import('../src/pages/draghook/draghook'));
const DragClass = lazy(() => import('../src/pages/dragClass/dragClass'));
const DragulaPage = lazy(() => import('../src/pages/dragula/dragula'));
const Table = lazy(() => import('../src/pages/table/table'));
const Es = lazy(() => import('../src/pages/es/es'));
const LifeCycle = lazy(() => import('../src/pages/lifecycle/lifecycle'));
const SimpleTest = lazy(() => import('../src/pages/simple-test/simple-test'));
const SimpleMemo = lazy(() => import('../src/pages/simple-memo/simple-memo'));
const ControlMemo = lazy(() => import('../src/pages/control/control'));
const ListApi = lazy(() => import('../src/pages/list-api/list-api'));
const ChromeMemo = lazy(() => import('../src/pages/chrome/chrome'));
const NotFound = lazy(() => import('../src/pages/not-found/not-found'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'Home',
  },
  {
    path: '/chrome',
    component: ChromeMemo,
    exact: true,
    title: 'Chrome',
  },
  {
    path: '/jotai',
    component: Jotai,
    exact: true,
    title: 'Jotai',
  },
  {
    path: '/draghook',
    component: DragHook,
    exact: true,
    title: 'DragHook',
  },
  {
    path: '/dragClass',
    component: DragClass,
    exact: true,
    title: 'DragClass',
  },
  {
    path: '/dragula',
    component: DragulaPage,
    exact: true,
    title: 'DragulaPage',
  },
  {
    path: '/drag',
    component: Drag,
    exact: true,
    title: 'Drag',
  },
  {
    path: '/table',
    component: Table,
    exact: true,
    title: 'Table',
  },
  {
    path: '/es',
    component: Es,
    exact: true,
    title: 'es',
  },
  {
    path: '/lifecycle',
    component: LifeCycle,
    exact: true,
    title: 'Life',
  },
  {
    path: '/simple-memo',
    component: SimpleMemo,
    exact: true,
    title: 'Memo',
  },
  {
    path: '/control',
    component: ControlMemo,
    exact: true,
    title: 'control',
  },
  {
    path: '/listapi',
    component: ListApi,
    exact: true,
    title: 'ListApi',
  },
  {
    path: '/simple-test',
    component: SimpleTest,
    exact: true,
    title: 'Test',
  },
  {
    component: NotFound,
  },
];

export default routes;
