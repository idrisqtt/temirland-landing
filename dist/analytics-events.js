(function(){
  const push=(name,params={})=>{
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:name,...params});
    window.dispatchEvent(new CustomEvent('truebusiness:analytics',{detail:{name,params}}));
  };
  document.addEventListener('click',event=>{
    const link=event.target.closest('a');
    if(!link)return;
    if(link.matches('a[href^="tel:"]'))push('generate_lead',{lead_type:'phone',link_url:link.href});
    else if(link.matches('a[href*="wa.me"]'))push('generate_lead',{lead_type:'whatsapp',link_url:link.href});
    else if(link.hasAttribute('download'))push('file_download',{file_name:link.getAttribute('href')});
  });
  const finder=document.querySelector('#hero-finder');
  finder?.addEventListener('submit',()=>push('search',{search_term:document.querySelector('#hero-search')?.value.trim()||'',search_context:'hero'}));
  const calcSearch=document.querySelector('#calc-search');
  let timer;
  calcSearch?.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{const term=calcSearch.value.trim();if(term)push('search',{search_term:term,search_context:'calculator'});},700)});
})();
