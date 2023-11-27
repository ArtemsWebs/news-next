'use client';
import styles from './Navbar.module.scss';
import MenuList from '@/app/component/MenuList/MenuList';
import { mockMenuListItems } from '@/app/component/NavBar/NavBar.const';
import SearchField from '@/app/widgets/SearchField/SearchField';
import { useQueryUrlString } from '@/app/utils/useQueryurlString';

export default function NavBar() {
  const createQueryString = useQueryUrlString('fastFilter');
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.iconsWrapper}>
        <img src="/images/menu.svg" />
        <img src="/images/logo.png" style={{ width: '50px', height: '50px' }} />
      </div>
      <MenuList
        items={mockMenuListItems}
        onClickListItem={(item) => {
          createQueryString(item?.value);
        }}
      />
      <SearchField
        IconStart={<img src="/images/Search.svg" />}
        IconEnd={<img src="/images/Mic.svg" />}
      />
    </div>
  );
}
