import React from "react";
import Container from "@/app/components/container";
import Header from "@/app/components/header";
import Main from "@/app/components/main";
import { ModalContextProvider } from "@/context/modal-context";
import { ThemeProvider } from "@/context/theme-provider";

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
        <Container>
          <Header />
          <Main />
        </Container>
      </ModalContextProvider>
    </ThemeProvider>
  );
}
