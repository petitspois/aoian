"use client"

import * as React from "react"
import {
  Album,
  Footprints,
  LoaderPinwheel,
  MessageCircle
} from "lucide-react"

import { NavMain } from "@/app/components/nav-main"
import { TeamSwitcher } from "@/app/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger
} from "@/app/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "新对话",
      url: "#",
      key: 'new',
      icon: MessageCircle,
      isActive: true,
    },
    {
      title: "发现",
      url: "#",
      icon: LoaderPinwheel,
      isActive: true,
    },
    {
      title: "收藏夹",
      url: "#",
      icon: Album,
    },
    {
      title: "历史",
      url: "#",
      icon: Footprints,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className={'!p-0'}>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/*<NavProjects projects={data.projects} />*/}
      </SidebarContent>
      <SidebarFooter className={'px-3 pb-3'}>
        <SidebarTrigger className={'rounded-xl hover:bg-sidebar-button-accent hover:border border-sidebar-button-accent-border hover:text-sidebar-button-foreground !text-sidebar-button-foreground'} />
      </SidebarFooter>
    </Sidebar>
  )
}
