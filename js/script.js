//Navbar Hide/Unhide
const navbar= document.getElementById('navbar');
        let scrolled = false;
        
        window.onscroll=function(){
            if(window.pageYOffset > 500){
                navbar.classList.remove('top');
                if (!scrolled) {
                    navbar.style.transform= 'translateY(-70px)'
                }
                setTimeout(function() {
                    navbar.style.transform=  'translateY(0)';
                    scrolled = false;
                }, 2000);
            }else{
                navbar.classList.add('top');
            }
        }