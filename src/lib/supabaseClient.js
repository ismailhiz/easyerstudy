import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldsemqhofqpbkffutkmj.supabase.co';  // Supabase URL'ini buraya yapıştır
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkc2VtcWhvZnFwYmtmZnV0a21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjYyOTcsImV4cCI6MjA2MTQ0MjI5N30.5N25IY4fUZtgs2O_cp8DX8WXb7uYdpECgmvbzY4gsjg';  // Anon API key buraya

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
