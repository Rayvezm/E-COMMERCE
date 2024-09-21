document.addEventListener("DOMContentLoaded", ()=>{
    const fecha = document.getElementById("fecha");
    let year = new Date().getFullYear();
    fecha.textContent=year;
})
window.addEventListener('scroll', function() {
    const header = document.querySelector('.bg-yisus');
    const scrollPosition = window.scrollY;
    if(scrollPosition > 0){
        header.classList.add("bg-yi") ;
    }else{
        header.classList.remove("bg-yi") ;
    }
  });
