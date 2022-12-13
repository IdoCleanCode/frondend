(function(){
  let dropDownIcon = document.querySelector(".dropdown-parents-icon")
  let dropDownMenu = document.querySelector(".dropdown")
  
    dropDownIcon.addEventListener("click",function(){
      dropDownMenu.classList.toggle("show")
      dropDownIcon.classList.toggle("rotateIcon")
    })
  
  
})()


