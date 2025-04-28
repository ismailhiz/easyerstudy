import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'BURAYA_SENİN_SUPABASE_URL';
const supabaseAnonKey = 'BURAYA_SENİN_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
