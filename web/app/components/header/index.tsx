import React from 'react';
import { Button } from '@/app/components/ui/button'

const Header = () => {
  return (
    <header className="flex w-full h-14 pr-3 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear">
      <div className={'header-left'}></div>
      <div className={'header-right w-fit'}>
        <Button>登录</Button>
      </div>
    </header>
  );
};

export default Header;
