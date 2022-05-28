import React from 'react';
import styles from './button.module.css';

type Props = {onClick: () => void, title: string}

export function Button(props: Props) {
    return <button type="button" className={`${styles.button} ${styles.gradient}`} onClick={props.onClick}>{props.title}</button >
}