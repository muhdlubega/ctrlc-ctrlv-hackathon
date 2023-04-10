import React, { ReactNode } from 'react';
import {Props} from "../Typescript/MainTypescript";

  const AppWrapper = ({ children }: Props) => {
    return (
      <div className="app-wrapper">
        {children}
      </div>
    );
  };
export default AppWrapper;