import React from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={'w-screen h-screen bg-layout-muted-background'}>
      {children}
    </div>
  );
};

export default Container;
