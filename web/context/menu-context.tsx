"use client";
import { Dispatch, SetStateAction, useMemo } from "react";
import { createContext, useContext } from "use-context-selector";
import { usePathname } from 'next/navigation'
import { Bird, Telescope } from 'lucide-react'
import type { MenuItemProps } from "@/app/components/menu/menu-item";



type MenuKey = 'chat' | 'exploration'

export type MenuContextState = {
  activeKey: MenuKey;
  menuItems: MenuItemProps[]
}

const menuItems: MenuItemProps[] = [
  {
    id: 'chat',
    label: '对话',
    href: '/chat',
    icon: <Bird  />
  },
  {
    id: 'exploration',
    label: '发现',
    href: '/exploration',
    icon: <Telescope />
  },
]


const MenuContext = createContext<MenuContextState>({
  activeKey: "chat",
  menuItems,
});

export const useMenuContext = () => useContext(MenuContext);


type MenuContextProviderProps = {
  children: React.ReactNode
}

export const MenuContextProvider = ({
  children,
}: MenuContextProviderProps) => {
  const pathname = usePathname()
  const activeKey = useMemo<MenuKey>(() => {
    if (pathname.startsWith('/chat')) {
      return 'chat'
    } else if (pathname.startsWith('/exploration')) {
      return 'exploration'
    }
    return 'chat'
  }, [pathname])

  return (
    <MenuContext.Provider
      value={{
        activeKey,
        menuItems
      }}
    >
      {children}
    </MenuContext.Provider>
  );

};
