"use client";

import * as React from "react";
import { Ellipsis } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/app/components/ui/dropdown-menu";
import { RiPushpinLine, RiEditLine, RiBookmark3Line, RiDeleteBin5Line } from "@remixicon/react";

const ChatLogItem = () => {

  const menuData = [
    {
      label: "置顶",
      icon: <RiPushpinLine />,
      value: "top",
    },
    {
      label: "重命名",
      icon: <RiEditLine />,
      value: "rename",
    },
    {
      label: "收藏",
      icon: <RiBookmark3Line />,
      value: "collect",
    },
    {
      label: "删除",
      icon: <RiDeleteBin5Line />,
      value: "delete",
    },

  ];

  return (
    <section className={"group border-b border-b-layout-line px-4 cursor-pointer hover:bg-layout-standout"}>
      <div className={"relative flex justify-between items-center h-10"}>
        <p className={"text-sm"}>朋友圈符不符合你</p>
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className={"w-6 h-6 py-0 px-0 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 outline-none"}>
              <Ellipsis size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={'end'}>
            {
              menuData.map((item, index) => {
                return (
                  <DropdownMenuItem key={item.value} className={cn('cursor-pointer', item.value === 'delete' && 'text-destructive hover:text-destructive focus:text-destructive')}>
                    {item.icon}
                    {item.label}
                  </DropdownMenuItem>
                );
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>
        <div className={cn(`absolute -right-[14px] top-1/2 -translate-y-1/2 w-[3px] h-[70%] bg-layout-primary dark:bg-layout-normal-foreground rounded-full transition-opacity duration-1000`)}></div>
      </div>
    </section>
  );
};

export default ChatLogItem;
