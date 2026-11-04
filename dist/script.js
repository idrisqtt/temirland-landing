document.documentElement.classList.add('js');

const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu');
const navLinks=document.querySelectorAll('#main-nav a');
function closeMenu(){nav?.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-locked')}
addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>24),{passive:true});
menu?.addEventListener('click',()=>{const open=!nav.classList.contains('menu-open');nav.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-locked',open)});
navLinks.forEach(link=>link.addEventListener('click',closeMenu));
addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
addEventListener('resize',()=>{if(innerWidth>1050)closeMenu()},{passive:true});

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window&&!reduced){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -50px'});
  document.querySelectorAll('.reveal').forEach((element,index)=>{element.style.transitionDelay=`${(index%3)*70}ms`;observer.observe(element)});
}else document.querySelectorAll('.reveal').forEach(element=>element.classList.add('visible'));

const heroForm=document.querySelector('#hero-finder');
const heroSearch=document.querySelector('#hero-search');
const calcSearch=document.querySelector('#calc-search');
function openCalculator(query=''){
  if(calcSearch){calcSearch.value=query;calcSearch.dispatchEvent(new Event('input',{bubbles:true}))}
  document.querySelector('#calculator')?.scrollIntoView({behavior:reduced?'auto':'smooth'});
  setTimeout(()=>calcSearch?.focus({preventScroll:true}),reduced?0:650);
}
heroForm?.addEventListener('submit',event=>{event.preventDefault();openCalculator(heroSearch.value.trim())});
document.querySelectorAll('.hero-shortcuts button').forEach(button=>button.addEventListener('click',()=>{heroSearch.value=button.dataset.query||'';openCalculator(heroSearch.value)}));

const catalogImage=document.querySelector('#catalog-image');
const catalogFact=document.querySelector('#catalog-fact');
document.querySelectorAll('.catalog-list button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.catalog-list button').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active))});
  const disc=catalogImage?.closest('.pipe-disc');disc?.classList.add('switching');
  const swap=()=>{if(catalogImage){catalogImage.src=button.dataset.image;catalogImage.alt=`${button.dataset.title} стальные трубы`}if(catalogFact)catalogFact.textContent=button.dataset.fact;disc?.classList.remove('switching')};
  reduced?swap():setTimeout(swap,180);
}));
