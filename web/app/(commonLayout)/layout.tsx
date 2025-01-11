import React from "react";
import Container from "@/app/components/container";
import Header from "@/app/components/header";
import Main from "@/app/components/main";
import { ModalContextProvider } from "@/context/modal-context";
import { ThemeProvider } from "@/context/theme-provider";
import { MenuContextProvider } from "@/context/menu-context";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ModalContextProvider>
        <MenuContextProvider>
          <Container>
            <Header />
            <Main>
              {children}
            </Main>
          </Container>
        </MenuContextProvider>
      </ModalContextProvider>
    </ThemeProvider>
  );
}
