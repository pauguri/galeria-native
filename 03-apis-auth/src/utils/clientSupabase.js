import { createClient } from "@supabase/supabase-js";

const API_URL = "https://zvlqvsxfmcwxpibmaphq.supabase.co";
const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2bHF2c3hmbWN3eHBpYm1hcGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMzUwNjEsImV4cCI6MjAyMzkxMTA2MX0.X0di4cE815PgPAr--XJpxN8vpufj8gRRm8iM2IPAqYQ";

export const supabase = createClient(API_URL,API_KEY);