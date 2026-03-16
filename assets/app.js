const scenarios=[
  {name:'Conservative',customers:75,mrr:11000,arr:132000,color:'#7aa6ff'},
  {name:'Base',customers:200,mrr:34000,arr:408000,color:'#5ee0a0'},
  {name:'Aggressive',customers:450,mrr:80000,arr:960000,color:'#ffd166'}
];

new Chart(document.getElementById('signalsChart'),{
  type:'bar',
  data:{labels:['League Admin Pain','Score Capture Friction','App Fragmentation','Rating Clarity'],datasets:[{label:'Demand Signal Strength',data:[90,82,86,73],backgroundColor:['#5ee0a0','#7aa6ff','#f7b267','#ff7f7f']}]},
  options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,max:100}}}
});

new Chart(document.getElementById('mrrChart'),{
  type:'line',
  data:{labels:['M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12'],datasets:[
    {label:'Conservative MRR',data:[0,500,1200,2500,4000,5500,7000,8200,9000,9800,10400,11000],borderColor:'#7aa6ff',tension:.25},
    {label:'Base MRR',data:[0,800,2500,5000,8500,12500,17000,22000,26000,29000,32000,34000],borderColor:'#5ee0a0',tension:.25},
    {label:'Aggressive MRR',data:[0,1200,4000,9000,16000,26000,38000,50000,60000,68000,74000,80000],borderColor:'#ffd166',tension:.25}
  ]},
  options:{plugins:{legend:{labels:{color:'#cfe3ff'}}},scales:{x:{ticks:{color:'#9fb1cc'}},y:{ticks:{color:'#9fb1cc'}}}}
});

new Chart(document.getElementById('useOfFunds'),{
  type:'doughnut',
  data:{labels:['Product Engineering','Go-to-Market','Customer Success','Ops/Infra'],datasets:[{data:[45,30,15,10],backgroundColor:['#5ee0a0','#7aa6ff','#ffd166','#ff7f7f']}]},
  options:{plugins:{legend:{labels:{color:'#cfe3ff'}}}}
});

const wrap=document.getElementById('scenarioCards');
scenarios.forEach(s=>{
  const el=document.createElement('div');
  el.className='card';
  el.innerHTML=`<h4 style="margin:0 0 8px;color:${s.color}">${s.name}</h4><p><strong>Customers:</strong> ${s.customers}</p><p><strong>MRR:</strong> $${s.mrr.toLocaleString()}</p><p><strong>ARR:</strong> $${s.arr.toLocaleString()}</p>`;
  wrap.appendChild(el);
});
