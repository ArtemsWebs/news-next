'use client';
import styles from './leftBar.module.scss';

import MenuList from '@/app/component/MenuList/MenuList';
import {
  mockMenuItemsMyActivity,
  mockMenuListItems,
} from '@/app/component/LeftBar/LeftBar.const';
import { useCallback, useState } from 'react';
import { MenuItem } from '@/app/component/MenuList/MenuList.types';

export default function LeftBar() {
  const [activeLeftBar, setActiveLeftBar] = useState<MenuItem | undefined>(
    undefined,
  );

  const onChangeActiveLeftBar = useCallback(
    (value: MenuItem) => setActiveLeftBar(value),
    [setActiveLeftBar],
  );
  return (
    <>
      <div className={styles.leftbarWrapper}>
        <MenuList
          items={mockMenuListItems}
          orientation="vertical"
          activeItem={activeLeftBar}
          onClickListItem={onChangeActiveLeftBar}
          activeElementContainerClass={styles.activeElemContainerWrapper}
          withDivider={true}
          menuListStyle={{ paddingBottom: '15px' }}
        />
        <MenuList
          items={mockMenuItemsMyActivity}
          orientation="vertical"
          onClickListItem={onChangeActiveLeftBar}
          activeElementContainerClass={styles.activeElemContainerWrapper}
          activeItem={activeLeftBar}
          title="Мои Активности"
          titleClassname="leftBarTitle"
          titleStyle={{ textAlign: 'start', paddingLeft: '16px' }}
          withDivider={true}
        />
      </div>
    </>
  );
}
