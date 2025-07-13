import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
        <h1 className="font-semibold text-2xl">Halo Welcome to My App</h1>
        <Button variant="default" size="lg">
          Click me!
        </Button>
      </div>
    </>
  );
}
