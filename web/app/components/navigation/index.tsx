"use client"

import * as React from "react"
import Menu from '@/app/components/menu'
import { MenuContextProvider } from '@/context/menu-context'


const Navigation = () => {
  return (
    <nav className={'group py-8 w-[250px] bg-layout-card-background rounded-[20px]'}>
      <MenuContextProvider>
        <Menu />
      </MenuContextProvider>
    </nav>
  )
}

export default Navigation;
