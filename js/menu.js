
fetch("header.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("header").innerHTML = data;
          
      let currentpage = window.location.pathname.split("/").pop();
          if (!currentpage || currentpage == "#"){
            currentpage = "index.html";
          }

      let links = document.querySelectorAll(".menu .menubar ul li a");

      links. forEach(link => {
        console.log("Current page:" , currentpage);

        let linkpage = link.getAttribute("href");
        console.log("attribute value:" ,linkpage);
        if(!linkpage)return;
        if (linkpage == currentpage){
            link.closest("li").classList.add("underline_current")
        }
      });
   });
