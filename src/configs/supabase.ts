import { createClient } from "@supabase/supabase-js";
import { Database } from "models/types";

const supabase = createClient<Database>(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string,
);

export default supabase;
