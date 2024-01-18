import { createClient } from "@supabase/supabase-js";
import key from "./key";
import url from "./url";

export const supabase = createClient(url(), key());