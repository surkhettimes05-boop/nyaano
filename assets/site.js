const NYAANO_WHATSAPP='9779822403262';
const waLink=(message='Namaste NYAANO, I have a question about NYAANO ghee.')=>'https://wa.me/'+NYAANO_WHATSAPP+'?text='+encodeURIComponent(message);

const btn=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-nav]');
if(btn&&nav){
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
}

const els=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver'in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
  }),{threshold:.08});
  els.forEach(e=>io.observe(e));
}else{
  els.forEach(e=>e.classList.add('in'));
}
window.setTimeout(()=>els.forEach(e=>e.classList.add('in')),900);

document.querySelectorAll('[data-wa-message]').forEach(link=>{
  link.href=waLink(link.dataset.waMessage||undefined);
  link.target='_blank';
  link.rel='noopener';
});

document.querySelectorAll('.footer .micro').forEach(note=>{
  if(!note.closest('.availability-card')){
    note.innerHTML='<a href="'+waLink('Namaste NYAANO, I have a question about NYAANO ghee.')+'" target="_blank" rel="noopener">WhatsApp: +977 9822403262</a>';
  }
});

document.querySelectorAll('form[data-whatsapp-enquiry]').forEach(form=>{
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const data=new FormData(form);
    const message=[
      'Namaste NYAANO, I want to stock NYAANO.',
      'Name: '+(data.get('name')||''),
      'Business: '+(data.get('business')||''),
      'Business type: '+(data.get('type')||''),
      'Location: '+(data.get('location')||''),
      'Phone/WhatsApp: '+(data.get('phone')||''),
      'Requirement: '+(data.get('message')||'')
    ].join('\n');
    window.open(waLink(message),'_blank','noopener');
  });
});

if(!document.body.classList.contains('has-mobile-action-bar')){
  const whatsapp=document.createElement('a');
  whatsapp.className='whatsapp-float';
  whatsapp.href=waLink();
  whatsapp.target='_blank';
  whatsapp.rel='noopener';
  whatsapp.setAttribute('aria-label','Chat with NYAANO on WhatsApp at +977 9822403262');
  whatsapp.title='WhatsApp +977 9822403262';
  whatsapp.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.05 3A12.82 12.82 0 0 0 5.2 22.65L3.5 29l6.49-1.7A12.88 12.88 0 1 0 16.05 3Zm0 2.18a10.68 10.68 0 0 1 9.2 16.11 10.67 10.67 0 0 1-14.81 3.86l-.46-.27-3.86 1.01 1.03-3.76-.3-.48a10.69 10.69 0 0 1 9.2-16.47Zm-4.7 4.79c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85 0 1.69 1.23 3.31 1.4 3.54.17.23 2.42 3.69 5.86 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.03-.83 2.31-1.63.29-.8.29-1.49.2-1.63-.08-.14-.31-.23-.66-.4-.34-.18-2.03-1-2.34-1.12-.32-.11-.55-.17-.78.18-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.35-.18-1.46-.54-2.78-1.72a10.46 10.46 0 0 1-1.93-2.4c-.2-.35-.02-.53.15-.7.16-.15.35-.4.52-.6.17-.2.23-.34.34-.57.12-.23.06-.43-.03-.6-.08-.18-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.65Z"/></svg><span>WhatsApp <strong>+977 9822403262</strong></span>';
  document.body.appendChild(whatsapp);
}