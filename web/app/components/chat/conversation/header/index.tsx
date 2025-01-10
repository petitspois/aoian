"use client";

import * as React from "react";
import { Button } from "@/app/components/ui/button";
import { RiBookmark3Line, RiShareCircleLine } from "@remixicon/react";
import Tooltip from "@/app/components/Tooltip";


const ConversationHeader = () => {
  return (
    <section className={"px-8 flex items-center justify-between w-full h-[70px] bg-layout-card-background"}>
      <div>Conversation</div>
      <div className={"bg-layout-disabled px-4 py-1 rounded-full flex gap-2 text-layout-disabled-foreground"}>
        <Tooltip title={"收藏"}>
          <Button variant={"ghost"} size={"icon"} className={"rounded-[20px]"}>
            <RiBookmark3Line size={20} />
          </Button>
        </Tooltip>
        <Tooltip title={"分享"}>
          <Button variant={"ghost"} size={"icon"} className={"rounded-[20px]"}>
            <RiShareCircleLine size={20} />
          </Button>
        </Tooltip>
      </div>
    </section>
  );
};

export default ConversationHeader;
