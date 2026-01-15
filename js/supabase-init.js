const supabaseClient = window.supabase.createClient(
  "https://sdzbbellnefpqwxqjzqz.supabase.co",
  "sb_publishable_wmOXVyoaOKdG4DLoCQ7dHg_lkmMcg8c"
);

if (supabaseClient){
  console.log("database connected");
}
else{
   console.log("database not connected");
}
