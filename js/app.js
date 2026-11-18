// MJDENTIST 5.1: sitio público estático, sin formularios ni datos de pacientes.
(()=>{'use strict';
const groups=[
{name:'Primera cita',items:[['Cita de valoración y diagnóstico','01_valoracion']]},
{name:'Preventiva',items:[['Profilaxis (limpiezas dentales)','02_limpieza_dental'],['Selladores de fosetas y fisuras','selladores'],['Aplicación de flúor','12_fluor']]},
{name:'Operatoria',items:[['Resinas','03_resinas'],['Endodoncia','04_endodoncia'],['Endoposte','05_endoposte']]},
{name:'Rehabilitación y prótesis',items:[['Puentes','06_puentes'],['Incrustaciones metálicas y estéticas','incrustaciones'],['Coronas metálicas y estéticas','07_coronas'],['Prótesis','09_protesis'],['Provisionales estéticos','provisionales'],['Guardas oclusales','10_guardas_oclusales']]},
{name:'Especialidades',items:[['Odontopediatría','odontopediatria'],['Ortodoncia','11_ortodoncia'],['Periodoncia','periodoncia'],['Cirugía maxilofacial','cirugia_maxilofacial']]}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function go(id){if(!['home','services','gallery','location'].includes(id))return;$$('.view').forEach(el=>el.classList.toggle('active',el.id===id));$$('.navbtn').forEach(el=>el.classList.toggle('active',el.dataset.go===id));window.scrollTo({top:0,behavior:'instant'});}
$$('[data-go]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();go(el.dataset.go)}));
const grid=$('#service-grid');if(grid)grid.innerHTML=groups.map((g,i)=>`<section class="service-category"><div class="service-category-head"><span class="service-category-icon" aria-hidden="true">${['✧','✦','◈','◇','✚'][i]}</span><h2>${g.name}</h2></div><div class="treatment-grid">${g.items.map(([name,img])=>`<article class="treatment"><img src="img/servicios/${img}.webp" alt="Ilustración educativa de ${name}" loading="lazy"/><h3>${name}</h3></article>`).join('')}</div></section>`).join('');
$('#year').textContent=new Date().getFullYear();
})();