import { createClient } from '@supabase/supabase-js';

// Enlève /rest/v1/ à la fin
const supabaseUrl = 'https://zxqijscsqvypzvidetre.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cWlqc2NzcXZ5cHp2aWRldHJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NjI5NjAsImV4cCI6MjEwMDIzODk2MH0.Iq4sGifgKMnXlX_A81sGLGWcwz0ZvnrBD8crHJfRiFY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);