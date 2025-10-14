// js/supabase.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://cczuqesooeguvqimeoks.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjenVxZXNvb2VndXZxaW1lb2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0MzM1OTYsImV4cCI6MjA3NjAwOTU5Nn0.zd4PY5BNZu6AVAB5xsBS_lBPSWRf6JkHqGr60Ri6oIg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
