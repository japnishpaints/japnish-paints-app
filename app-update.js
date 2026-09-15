/* Japnish Paints update checker — UI-only, does not alter business APIs. */
(function(){
  const LOCAL = String((window.JP_CONFIG||{}).APP_VERSION || '68.0.0');
  const VERSION_URL = (window.JP_CONFIG||{}).UPDATE_VERSION_URL || '/mobile/app-version.php';
  const APK_URL = (window.JP_CONFIG||{}).APK_DOWNLOAD_URL || '/mobile/app/JapnishPaints.apk';
  const modal = document.getElementById('jpUpdateModal');
  const text = document.getElementById('jpUpdateText');
  const btn = document.getElementById('jpUpdateBtn');
  const later = document.getElementById('jpUpdateLater');
  if(!modal || !btn) return;
  function newer(a,b){
    const x=String(a).split('.').map(n=>parseInt(n,10)||0), y=String(b).split('.').map(n=>parseInt(n,10)||0);
    for(let i=0;i<Math.max(x.length,y.length);i++){ if((x[i]||0)!==(y[i]||0)) return (x[i]||0)>(y[i]||0); }
    return false;
  }
  function show(v,mandatory){
    text.textContent='Version '+v+' is available. Please update to get the latest improvements.';
    later.hidden=!!mandatory;
    modal.hidden=false;
  }
  async function check(){
    try{
      const r=await fetch(VERSION_URL+'?t='+Date.now(),{cache:'no-store',headers:{'Accept':'application/json'}});
      if(!r.ok)return;
      const d=await r.json();
      if(d && d.version && newer(String(d.version),LOCAL)) show(String(d.version),!!d.force_update);
    }catch(e){}
  }
  btn.onclick=function(){ window.location.href = String(APK_URL); };
  later.onclick=function(){ modal.hidden=true; };
  window.addEventListener('load',()=>setTimeout(check,900));
})();
