import * as React from 'react';
import s from './Navigation.module.scss'
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export function Navigation (props: IAppProps) {
  return (
    <nav className={s.Nav}>
      <span className={s.NavText}>
        TodoList
      </span>
      <span className={s.NavSpan}>
        <Link className={s.NavSpanLink} to="/">Products</Link>
        <Link className={s.NavSpanLink} to="/about">About</Link>
        <Link className={s.NavSpanLink} to="/page3">page3</Link>

      </span>
    </nav>
  );
}
