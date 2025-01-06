"use client"

import * as React from "react"
import { Ellipsis } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

const ChatLogItem = () => {
  return (
    <section className={'group border-b border-b-layout-line px-4 cursor-pointer hover:bg-layout-standout'}>
      <div className={'relative flex justify-between items-center h-10'}>
        <p className={'text-sm'}>朋友圈符不符合你</p>
        <Button variant={'ghost'} className={'w-6 h-6 py-0 px-0 opacity-0 group-hover:opacity-100'}>
          <Ellipsis size={16} />
        </Button>
        <div className={cn(`absolute -right-[14px] top-1/2 -translate-y-1/2 w-[3px] h-[70%] bg-layout-primary dark:bg-layout-normal-foreground rounded-full transition-opacity duration-1000`)}></div>
      </div>
    </section>
  )
}

export default ChatLogItem;
