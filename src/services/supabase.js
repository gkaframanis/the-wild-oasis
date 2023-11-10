import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hnfwuwjefxfjstazqchm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZnd1d2plZnhmanN0YXpxY2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MTMzOTUsImV4cCI6MjAxNTE4OTM5NX0.27qMM1KILTAA_1qJGpIxz1q9-mntQS4hx06pLXcWysc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
