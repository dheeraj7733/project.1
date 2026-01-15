const supabaseClient = window.supabase.createClient(
  "sb_publishable_wmOXVyoaOKdG4DLoCQ7dHg_lkmMcg8c",
  "https://sdzbbellnefpqwxqjzqz.supabase.co"
);

if (supabaseClient){
  consoe.log("database connected");
}
else{
   consoe.log("database not connected");
}
