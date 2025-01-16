import React from "react";
import Link from 'next/link'
import { cn } from "@/lib/utils";
import { useMenuContext } from '@/context/menu-context'


export type MenuItemProps = {
  id: string;
  label: string
  href: string
  icon: React.ReactNode;
};

const MenuItem = ({ label, id, href, icon}: MenuItemProps) => {
  const { activeKey } = useMenuContext()
  return (
    <Link href={href} className={'flex items-center px-4 w-full h-9 cursor-pointer relative'}>
      <div className={'flex items-center gap-4 px-4 w-full h-full rounded-[10px] hover:bg-layout-muted-background'}>
        <span className={cn('text-layout-normal-foreground')}>{icon}</span>
        <span className={cn('text-base', activeKey === id && 'font-medium')}>{label}</span>
      </div>
      <div className={cn(`absolute right-[3px] top-0 w-[3px] h-full bg-layout-primary dark:bg-layout-normal-foreground rounded-full transition-opacity duration-1000 opacity-0`, activeKey === id && 'opacity-100')}></div>
    </Link>
  );
};

export default MenuItem;
