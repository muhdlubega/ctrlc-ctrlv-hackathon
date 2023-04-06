import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header';

type Props = {
  children: ReactNode;
}

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

