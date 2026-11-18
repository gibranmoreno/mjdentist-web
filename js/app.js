// Sitio público informativo. No almacena ni solicita datos personales.
(()=>{'use strict';
const groups=[
{name:'Primera cita',items:['Cita de valoración y diagnóstico']},
{name:'Preventiva',items:['Profilaxis (limpiezas dentales)','Selladores de fosetas y fisuras','Aplicación de flúor']},
{name:'Operatoria',items:['Resinas','Endodoncia','Endoposte']},
{name:'Rehabilitación y prótesis',items:['Puentes','Incrustaciones metálicas y estéticas','Coronas metálicas y estéticas','Prótesis','Provisionales estéticos','Guardas oclusales']},
{name:'Especialidades',items:['Odontopediatría','Ortodoncia','Periodoncia','Cirugía maxilofacial']}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function go(id){if(!['home','services','gallery','location'].includes(id))return;$$('.view').forEach(el=>el.classList.toggle('active',el.id===id));$$('.navbtn').forEach(el=>el.classList.toggle('active',el.dataset.go===id));window.scrollTo(0,0);}
$$('[data-go]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();go(el.dataset.go)}));
const grid=$('#service-grid');if(grid)grid.innerHTML=groups.map((g,i)=>`<article class="service-category"><div class="service-category-head"><span class="service-category-icon">${['✧','✦','◈','◇','✚'][i]}</span><h2>${g.name}</h2></div><ul>${g.items.map(item=>`<li>${item}</li>`).join('')}</ul></article>`).join('');
$('#year').textContent=new Date().getFullYear();
})();
