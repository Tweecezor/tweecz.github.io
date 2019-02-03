var rulesup = document.querySelector("modal-rules");
		var rulesloc = document.querySelector("rules-link")
		var rulesclose = rulesup.querySelector(".modal-close");
		rulesloc.addEventListener("click",function(evt){
			evt.preventDefault();
			rulesup.classList.add("modal-show");
			rulesloc.classList.add("active-nav-link");
		});
		rulesclose.addEventListener("click",function(evt){
			evt.preventDefault();
			rulesup.classList.remove("modal-show");
			rulesloc.classList.remove("active-nav-link");
		});