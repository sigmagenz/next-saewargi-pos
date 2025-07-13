import { ThemeModeToggle } from "@/components/common/theme-mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="font-semibold text-2xl">Halo Welcome to My App</h1>
        <Button variant="default" size="lg" className="dark:bg-gray-200">
          Click me!
        </Button>
        <ThemeModeToggle />
      </div>
    </>
  );
}
