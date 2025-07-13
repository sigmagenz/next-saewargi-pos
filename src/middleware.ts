import { NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

export const middleware = async (req: NextRequest) => {
  return await updateSession(req);
};

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|css|js|map)$).*)",
  ],
};
