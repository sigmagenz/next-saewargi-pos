import { ThemeModeToggle } from "@/components/common/theme-mode-toggle";
import { Coffee } from "lucide-react";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="relative bg-muted flex min-h-svh items-center justify-center p-4">
        <div className="absolute top-4 right-4 z-50">
          <ThemeModeToggle />
        </div>
        <div className="flex w-full max-w-sm flex-col gap-4">
          <div className="flex items-center gap-2 self-center font-medium">
            <div className="flex items-center justify-center rounded-full bg-primary p-2 text-primary-foreground">
              <Coffee className="size-4" />
            </div>
            <span className="text-lg">Saewargi POS</span>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
