import React from 'react';
import Routes from './routes';
import { useRoutes } from 'hookrouter';
import './style.css';

export default function App() {
  const routeResult = useRoutes(Routes);
  return <>{routeResult}</>;
}
