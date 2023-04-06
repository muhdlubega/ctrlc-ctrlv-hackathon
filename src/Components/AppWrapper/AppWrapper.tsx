import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
  }
  
  const AppWrapper = ({ children }: Props) => {
    return (
      <div className="app-wrapper">
        {children}
      </div>
    );
  };

export default AppWrapper;