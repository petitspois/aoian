"use client";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { useModalContext } from "@/context/modal-context";
import Navigation from "@/app/components/navigation";
import Sidebar from "@/app/components/sidebar";
import Content from "@/app/components/content";
import Message from "@/app/components/message";
import { useMenuContext } from "@/context/menu-context";

type MainProps = Readonly<{
  children: React.ReactNode;
}>;

const Main = ({ children }: MainProps) => {
  const { activeKey: currentMenu } = useMenuContext();
  const { setShowLoginModal } = useModalContext();

  const handleShowLoginModal = () => {
    setShowLoginModal({
      payload: "",
      onCancelCallback: () => {
        console.log("cancel");
      },
      onSaveCallback: (newPayload) => {
        console.log("save", newPayload);
      },
    });
  };

  return (
    <main className="flex p-6 w-full h-[calc(100vh-70px)] gap-6">
      <Navigation />
      {
        currentMenu === "chat" &&
        <Sidebar />
      }
      <Content>
        {children}
      </Content>
      <Message />
    </main>
  );
};

export default Main;
