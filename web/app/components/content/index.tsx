"use client"

import * as React from "react"

type ContentProps = Readonly<{
  children: React.ReactNode;
}>;

const Content = ({children}: ContentProps) => {
  return (
    <section className={'grow rounded-[20px] overflow-hidden bg-layout-background'}>
      {children}
    </section>
  )
}

export default Content;
