'use client';
import styles from './searchField.module.scss';
import { ElementType, InputHTMLAttributes, ReactNode, useRef } from 'react';
import cn from 'classnames';

interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  IconStart?: ReactNode;
  IconEnd?: ReactNode;
  onChangeValue?: (value: string) => void;
  value?: string;
}
export default function SearchField({
  IconStart,
  value,
  onChangeValue,
  IconEnd,
  ...props
}: SearchFieldProps) {
  const ref = useRef(null);
  console.log(ref);
  return (
    <div
      className={
        ref.current?.oninput ? styles.searchWrapper : styles.inputFocus
      }
    >
      <div className={styles.contentWrapper}>
        {IconStart && <div className={styles.iconWrapper}>{IconStart}</div>}
        <input
          type="text"
          ref={ref}
          className={styles.searchField}
          value={value}
          {...props}
          onChange={(e) => onChangeValue && onChangeValue(e.target.value)}
        />
        {IconEnd && <div className={styles.iconWrapper}>{IconEnd}</div>}
      </div>
    </div>
  );
}
