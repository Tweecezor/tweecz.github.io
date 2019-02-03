		var modalup = document.querySelector(".modal-contacts-subjects");
		var loc = document.querySelector(".contacts-link-subjects");
		var cls = modalup.querySelector(".modal-close");
		var ruleup = document.querySelector(".modal-rules");
			var rulelocate = document.querySelector(".rules-link");
		loc.addEventListener("click",function(evt){
			evt.preventDefault();
			modalup.classList.add("modal-show");
			loc.classList.add("active-nav-link");
			ruleup.classList.remove("rules-show");
				rulelocate.classList.remove("active-nav-link");
		});
		cls.addEventListener("click",function(evt){
			evt.preventDefault();
			modalup.classList.remove("modal-show");
			loc.classList.remove("active-nav-link");
		});
		
		function rule(){
			var modalup = document.querySelector(".modal-contacts-subjects");
		var loc = document.querySelector(".contacts-link-subjects");
			var ruleup = document.querySelector(".modal-rules");
			var rulelocate = document.querySelector(".rules-link");
			var ruleclose = ruleup.querySelector(".rules-close");
			rulelocate.addEventListener("click",function(evt){
				evt.preventDefault();
				ruleup.classList.add("rules-show");
				rulelocate.classList.add("active-nav-link");
				modalup.classList.remove("modal-show");
			loc.classList.remove("active-nav-link");
				actmodal = 2;
			});
			ruleclose.addEventListener("click",function(evt){
				evt.preventDefault();
				ruleup.classList.remove("rules-show");
				rulelocate.classList.remove("active-nav-link");
				actmodal = 0;
			});
		}
		rule();