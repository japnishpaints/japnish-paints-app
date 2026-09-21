/* JAPNISH PAINTS — FINAL AUTO UPDATE */
(function(){
  const C=window.JP_CONFIG||{};
  const LOCAL=String(C.APP_VERSION||'70.0.0');
  const VERSION_URL=String(C.UPDATE_VERSION_URL||'https://japnishpaints.store/mobile/app-version.php');
  const APK_URL=String(C.APK_DOWNLOAD_URL||'https://japnishpaints.store/mobile/app/JapnishPaints.apk');
  const modal=document.getElementById('jpUpdateModal');
  const text=document.getElementById('jpUpdateText');
  const btn=document.getElementById('jpUpdateBtn');
  const later=document.getElementById('jpUpdateLater');
  if(!modal||!btn)return;

  function newer(a,b){
    const x=String(a).split('.').map(n=>parseInt(n,10)||0);
    const y=String(b).split('.').map(n=>parseInt(n,10)||0);
    for(let i=0;i<Math.max(x.length,y.length);i++){
      const xv=x[i]||0,yv=y[i]||0;
      if(xv!==yv)return xv>yv;
    }
    return false;
  }

  function show(v,mandatory){
    if(text)text.textContent='Version '+v+' is available. Please update to get the latest improvements.';
    if(later)later.hidden=!!mandatory;
    modal.hidden=false;
  }

  async function check(){
    try{
      const sep=VERSION_URL.includes('?')?'&':'?';
      const r=await fetch(VERSION_URL+sep+'t='+Date.now(),{cache:'no-store',headers:{Accept:'application/json'}});
      if(!r.ok)return;
      const d=await r.json();
      if(d&&d.version&&newer(String(d.version),LOCAL))show(String(d.version),!!d.force);
    }catch(e){}
  }

  function openApk(){
    modal.hidden=true;
    const url=APK_URL.trim();
    if(!url)return;

    try{
      if(window.Android&&typeof window.Android.openExternal==='function'){
        window.Android.openExternal(url);
        return;
      }
    }catch(e){}

    try{
      const a=document.createElement('a');
      a.href=url;
      a.target='_blank';
      a.rel='noopener noreferrer';
      a.download='JapnishPaints.apk';
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }catch(e){}

    try{window.open(url,'_blank');return;}catch(e){}
    try{window.location.href=url;}catch(e){alert('Unable to open the update file.');}
  }

  btn.onclick=openApk;
  if(later)later.onclick=()=>{modal.hidden=true;};
  window.addEventListener('load',()=>setTimeout(check,900));
})();
