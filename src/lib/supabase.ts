
import { createClient } from '@supabase/supabase-js';

// Using the provided Supabase credentials
const supabaseUrl = 'https://xscaiwyorpfgmmscfqjs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzY2Fpd3lvcnBmZ21tc2NmcWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjg0OTcsImV4cCI6MjA1OTk0NDQ5N30.3SmE89zS8ScmEQ2Kkvjrrr2MTCDq8oqnUwkuN7Eg4RY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
