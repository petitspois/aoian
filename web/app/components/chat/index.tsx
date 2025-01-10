"use client"

import * as React from "react"
import Conversation from "@/app/components/chat/conversation";

const Chat = () => {
  return (
    <section className={'grow rounded-[20px] overflow-hidden bg-layout-background'}>
      <Conversation />
    </section>
  )
}

export default Chat;
