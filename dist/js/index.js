function scrollFunction(){document.documentElement.scrollTop>200?document.getElementById("navbar").classList.add("noTransparrent"):document.getElementById("navbar").classList.remove("noTransparrent")}window.onscroll=function(){scrollFunction()},window.onload=function(){new CountUp("website-count",0,250,0,2.5).start();new CountUp("app-count",0,100,0,2.5).start();new CountUp("user-count",0,1e4,0,2.5).start();new CountUp("video-count",0,30,0,2.5).start()},function(){"use strict";var t=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(t).forEach(function(t){t.addEventListener("submit",function(n){t.checkValidity()||(n.preventDefault(),n.stopPropagation()),t.classList.add("was-validated")},!1)})}(),document.getElementById("fullYear").innerHTML=new Date().getFullYear();