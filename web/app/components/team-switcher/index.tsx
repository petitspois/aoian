"use client"

import * as React from "react"
import {cn} from '@/lib/utils'
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

  return (
    <section
      className={cn("data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center p-3 gap-3")}
    >
      <div
        className="flex aspect-square size-[42px] items-center justify-center rounded-lg text-sidebar-primary-foreground">
        <Image
          className="dark:invert"
          src="/aoian_logo.svg"
          alt="Aoian logo"
          width={42}
          height={42}
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
