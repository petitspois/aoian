"use client";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { useModalContext } from "@/context/modal-context";
import { useTheme } from "next-themes";
import { Moon, MoonIcon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
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


  console.log(theme);
  return (
    <header className="flex justify-between items-center px-6 w-full h-[70px] bg-layout-card-background">
      <div className={"header-left"}>
        <div className={"logo flex items-center gap-2"}>
          <img src="/aoian_logo.svg" alt="logo" className={"w-10 h-10"} />
          <span className={'font-medium text-xl text-layout-standout-foreground'}>Aoian</span>
        </div>
      </div>
      <div className={"header-right flex items-center w-fit gap-4"}>
        <Button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          variant="ghost" size="icon">
          <Sun size={20} className={"dark:hidden"} />
          <Moon size={20} className={"hidden dark:block"} />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button onClick={handleShowLoginModal}>登录</Button>
      </div>
    </header>
  );
};

export default Header;
