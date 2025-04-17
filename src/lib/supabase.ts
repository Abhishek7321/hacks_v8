import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
// Note: In a production app, these should be environment variables
const supabaseUrl = "https://nlsuaqcotukmcinitdyt.supabase.co" || '';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sc3VhcWNvdHVrbWNpbml0ZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDMyMDksImV4cCI6MjA2MDM3OTIwOX0.YTwbcLLNBazg1ogguazncU3ukqHbdjy2LZ0VJ31UNz0" || '';

// Check if the environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found in environment variables');
}

// Export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Table names
export const TABLES = {
  BLOG_POSTS: 'blog_posts',
  SUBSCRIBERS: 'subscribers',
};

// Sample blog post schema in Supabase:
/*
CREATE TABLE blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read_time TEXT NOT NULL,
  categories TEXT[] NOT NULL,
  tags TEXT[] NOT NULL,
  image TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
*/
