		var slides = document.querySelectorAll('.price-list .price-item');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide,3000);

		function nextSlide() {
		 goToSlide(currentSlide+1);
		}

		function previousSlide() {
		 goToSlide(currentSlide-1);
		}

		function goToSlide(n) {
		 slides[currentSlide].className = 'price-item';
		 currentSlide = (n+slides.length)%slides.length;
		 slides[currentSlide].className = 'price-item show';
		}

		var playing = true;
		var pauseButton = document.getElementById('price-pause');
		 
		function pauseSlideshow() {
		    pauseButton.innerHTML = '&#9658;';
		    playing = false;
		    clearInterval(slideInterval);
		}
		 
		function playSlideshow() {
		   pauseButton.innerHTML = '&#10074;&#10074;';
		    playing = true;
		    slideInterval = setInterval(nextSlide,3000);
		}
		 
		pauseButton.onclick = function() {
		    if(playing) {
		    pauseSlideshow();
		  } else {
		    playSlideshow();
		  }
		};

		var next = document.getElementById('price-next');
		var previous = document.getElementById('price-previous');
		next.onclick = function() {
		 // pauseSlideshow();
		 nextSlide();
		  clearInterval(slideInterval);
		   slideInterval = setInterval(nextSlide,3000);
		};
		previous.onclick = function() {
		 // pauseSlideshow();
		 previousSlide();
		  clearInterval(slideInterval);
		   slideInterval = setInterval(nextSlide,3000);
		};

		 let actmodal = 0;
		function contacts(){
			var ruleup = document.querySelector(".modal-rules");
			var rulelocate = document.querySelector(".rules-link");

			var popup = document.querySelector(".modal-contacts");
			var locate = document.querySelector(".contacts-link");
			var close = popup.querySelector(".modal-close");
			locate.addEventListener("click",function(evt){
				evt.preventDefault();
				popup.classList.add("modal-show");
				locate.classList.add("active-nav-link");
				ruleup.classList.remove("rules-show");
				rulelocate.classList.remove("active-nav-link");
				actmodal = 1;
				console.log(actmodal);
			});
				close.addEventListener("click",function(evt){
					evt.preventDefault();
					popup.classList.remove("modal-show");
					locate.classList.remove("active-nav-link");
					actmodal = 0;
				});
		}
		
		function rule(){
			var popup = document.querySelector(".modal-contacts");
			var locate = document.querySelector(".contacts-link");

			var ruleup = document.querySelector(".modal-rules");
			var rulelocate = document.querySelector(".rules-link");
			var ruleclose = ruleup.querySelector(".rules-close");
			rulelocate.addEventListener("click",function(evt){
				evt.preventDefault();
				ruleup.classList.add("rules-show");
				rulelocate.classList.add("active-nav-link");
				popup.classList.remove("modal-show");
					locate.classList.remove("active-nav-link");
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
		contacts();
		
