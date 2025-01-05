// @flow
import * as React from "react";
import { useMenuContext } from '@/context/menu-context'
import MenuItem from './menu-item'


const Menu = () => {
  const { menuItems } = useMenuContext();
  return (
    <div className={'flex flex-col gap-4'}>
      {
        menuItems.map(item => <MenuItem key={item.id} {...item} />)
      }
    </div>
  );
};

export default Menu
