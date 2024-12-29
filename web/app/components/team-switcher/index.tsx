"use client"

import * as React from "react"
import {cn}  from '@/lib/utils'
import {ChevronsUpDown, Plus} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/app/components/ui/sidebar"
import Image from "next/image";

export function TeamSwitcher({
                               teams,
                             }: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const {isMobile, state} = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <section
      className={cn("data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center p-5  gap-3", state === 'collapsed' && 'p-[18px]')}
    >
      <div
        className="flex aspect-square size-11 items-center justify-center rounded-lg text-sidebar-primary-foreground">
        <Image
          className="dark:invert"
          src="/aoian_logo.svg"
          alt="Aoian logo"
          width={44}
          height={44}
          priority
        />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold text-xl text-white">
          Aoian
        </span>
      </div>
    </section>
  )
}
