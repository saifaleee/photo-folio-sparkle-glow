// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xscaiwyorpfgmmscfqjs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzY2Fpd3lvcnBmZ21tc2NmcWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjg0OTcsImV4cCI6MjA1OTk0NDQ5N30.3SmE89zS8ScmEQ2Kkvjrrr2MTCDq8oqnUwkuN7Eg4RY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);