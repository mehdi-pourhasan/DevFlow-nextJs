import React, { ReactNode } from "react";

const authLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default authLayout;
