(()=>{
 const root=document.querySelector('[data-premium-hero]'); if(!root)return;
 const img=root.querySelector('[data-premium-product]'), title=root.querySelector('[data-premium-title]'), en=root.querySelector('[data-premium-en]');
 const variants={cow:{img:'assets/cow-ghee-500.webp',title:'गाईको घ्यू।',en:'Cow Ghee · familiar, lighter everyday profile'},buffalo:{img:'assets/buffalo-ghee-500.webp',title:'भैंसीको घ्यू।',en:'Buffalo Ghee · richer, fuller everyday profile'}};
 root.querySelectorAll('[data-variant]').forEach(btn=>btn.addEventListener('click',()=>{const v=variants[btn.dataset.variant];if(!v)return;root.querySelectorAll('[data-variant]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));img.style.opacity='.25';setTimeout(()=>{img.src=v.img;img.alt='NYAANO '+(btn.dataset.variant==='cow'?'Cow':'Buffalo')+' Ghee 500 ml';title.textContent=v.title;en.textContent=v.en;img.style.opacity='1'},180)}));
})();