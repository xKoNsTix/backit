(()=>{var o=new IntersectionObserver(s=>{s.forEach(e=>{console.log(e),e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})}),t=document.querySelectorAll(".hidden");t.forEach(s=>o.observe(s));})();