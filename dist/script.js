const nav=document.querySelector('.nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*70}ms`;io.observe(el)});
document.querySelectorAll('.service').forEach(item=>item.addEventListener('click',()=>document.querySelector('#contacts').scrollIntoView({behavior:'smooth'})));
