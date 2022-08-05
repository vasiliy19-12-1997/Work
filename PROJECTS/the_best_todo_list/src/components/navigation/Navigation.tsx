import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export function Navigation (props: IAppProps) {
  return (
    <nav>
      <span>
        React2022
      </span>
      <span>
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}
