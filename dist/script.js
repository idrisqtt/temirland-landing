const nav=document.querySelector('.nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
const menu=document.querySelector('.menu');
const navLinks=document.querySelectorAll('#main-nav a');
function closeMenu(){nav.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-locked')}
menu?.addEventListener('click',()=>{const open=!nav.classList.contains('menu-open');nav.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-locked',open)});
navLinks.forEach(link=>link.addEventListener('click',closeMenu));
addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
addEventListener('resize',()=>{if(innerWidth>960)closeMenu()},{passive:true});
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*70}ms`;io.observe(el)});
document.querySelectorAll('.service').forEach(item=>item.addEventListener('click',()=>document.querySelector('#contacts').scrollIntoView({behavior:'smooth'})));
