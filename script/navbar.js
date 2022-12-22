let menuButton = document.querySelector("#menu-button");


menuButton.addEventListener("click", function() {
    console.log("click");
 

 let menu = document.querySelector("nav > ul");
 console.dir(menu);
 if (menu.style.left == '0px') {
    menuButton.className = "bi bi-list";
    menu.style.left = '-100%';

 } else  {
    menuButton.className = "bi bi-x-lg";
    menu.style.left = '0px'
 } 

}
  );
    
