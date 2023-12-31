let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrolly;  
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id  = sec.getAttribute('id')
        
        if(top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                links.classlist.remove('Active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('Active');
                
        });
      }   
    });
};        

