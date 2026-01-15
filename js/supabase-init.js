const supabaseClient = window.supabase.createClient(
  "https://sdzbbellnefpqwxqjzqz.supabase.co",
  "sb_publishable_wmOXVyoaOKdG4DLoCQ7dHg_lkmMcg8c"
);

if (supabaseClient){
  consoe.log("database connected");
}
else{
   consoe.log("database not connected");
}
