import { environment } from "@/configs/environment";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

type CreateClientOptions = {
  isAdmin?: boolean;
};

export const createCLient = async ({
  isAdmin = false,
}: CreateClientOptions) => {
  const cookieStore = await cookies();

  return createServerClient(
    environment.SUPABASE_URL!,
    isAdmin
      ? environment.SUPABASE_SERVICE_ROLE_KEY!
      : environment.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (error) {
            console.error("Error setting cookies:", error);
          }
        },
      },
    }
  );
};
