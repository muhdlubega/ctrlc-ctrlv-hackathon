import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header';
import { Props } from '../Typescript/MainTypescript';

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navbar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;

