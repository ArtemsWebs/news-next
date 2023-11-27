import { CSSProperties } from 'react';
import MenuList from '@/app/component/MenuList/MenuList';

export type MenuItem = {
  name: string;
  value?: string;
  linkToImage?: string;
};
type Title = 'title' | 'age';

export interface MenuListProps {
  items: MenuItem[];
  onClickListItem?: (value: MenuItem) => void;
  title?: Title;
  activeItem?: MenuItem;
  titleClassname?: string;
  titleStyle?: CSSProperties;
  menuListStyle?: CSSProperties;
  activeElementContainerClass?: string;
  withDivider?: boolean;
  orientation?: 'vertical' | 'horizontal';
}
