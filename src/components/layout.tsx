import { ReactNode } from "react";

import { cn } from "@/utils/utils";

interface Props {
  children: ReactNode;
  centerY?: boolean;
  centerX?: boolean;
}

const Layout = (props: Props) => {
  const { children, centerY = false, centerX = false } = props;

  return (
    <div className="bg-white h-dvh w-full">
      <div
        className={cn(
          "container h-full flex flex-col overflow-auto relative",
          centerY && "justify-center",
          centerX && "items-center p-5"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
