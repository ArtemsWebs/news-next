'use client';
import styles from './MenuList.module.scss';
import { MenuListProps } from '@/app/component/MenuList/MenuList.types';
import cn from 'classnames';

export default function MenuList({
  items,
  withDivider = false,
  title,
  onClickListItem,
  titleClassname,
  activeElementContainerClass,
  menuListStyle,
  activeItem,
  titleStyle,
  orientation = 'horizontal',
}: MenuListProps) {
  const dynamicClassName =
    orientation === 'horizontal' ? styles.horizontal : styles.vertical;

  return (
    <div className={styles.menuListWrapper} style={menuListStyle}>
      {title && (
        <span style={titleStyle} className={titleClassname}>
          {title}
        </span>
      )}
      <ul className={cn(styles.menuList, dynamicClassName)}>
        {items.map((item, index) => {
          return (
            <div
              key={item.value}
              className={
                activeItem?.value === item.value
                  ? activeElementContainerClass
                  : ''
              }
            >
              {index === 0 && withDivider && <div className={styles.divider} />}
              <li
                key={item.value}
                className={styles.horizontal}
                onClick={() => onClickListItem?.(item)}
              >
                {item.linkToImage && (
                  <div
                    className={
                      activeItem?.value === item.value
                        ? styles.activeElemImageWrapper
                        : ''
                    }
                  >
                    <img
                      src={item.linkToImage}
                      style={{ width: '24px', height: '24px' }}
                    />
                  </div>
                )}
                <div>{item.name}</div>
              </li>
              {withDivider && <div className={styles.divider} />}
            </div>
          );
        })}
      </ul>
      {orientation === 'horizontal' && (
        <>
          <div className={styles.menuListGradientOverlay} />
          <div className={styles.pink} />
        </>
      )}
    </div>
  );
}
