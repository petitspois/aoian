"use client"

import * as React from "react"
import { Button } from '@/app/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Plus } from "lucide-react";
import ChatLog from '@/app/components/chat/log'

const Sidebar = () => {
  return (
    <aside className={'w-[270px] bg-layout-card-background rounded-[20px] p-4'}>
      <div className={'flex justify-between items-center h-12'}>
        <p className={'font-medium'}>最近对话</p>
        <Button variant={'primary'} className={'rounded-[20px]'}>
          <Plus className={'font-bold w-4 h-4'} strokeWidth={3} />
        </Button>
      </div>
      <div className={'mt-6'}>
        <Tabs defaultValue="account">
          <TabsList className={'bg-layout-standout h-14 rounded-[20px] p-2.5 w-full'}>
            <TabsTrigger className={'h-[34px] rounded-[10px] text-sm grow data-[state=active]:text-layout-primary text-layout-disabled-foreground'} value="account">收藏</TabsTrigger>
            <TabsTrigger className={'h-[34px] rounded-[10px] text-sm grow data-[state=active]:text-layout-primary text-layout-disabled-foreground'} value="password">其他</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
              <ChatLog />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </aside>
  )
}

export default Sidebar;
