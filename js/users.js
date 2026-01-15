document.getElementById("user form").addEventListner("submit",async(e){
  e.preventDefult();

  const name = document.getElementById("name").value.trin();
  const email = document.getElementById("emali").value.trin().tolowerCase();
  const password = document.getElementById("password").value.trin();

  if(!name || !email || !password){
      alert("All fields are required");
    
    
}
/*Check if email already exit  
