(() => {
'use strict';
const records=new Map((window.NATIVE_DECK||[]).map(s=>[s.id,s])),instances=new Map();
const url=n=>'assets/native/'+n;
let live=null;
const place=(el,b)=>{el.style.left=b[0]+'px';el.style.top=b[1]+'px';el.style.width=b[2]+'px';el.style.height=b[3]+'px';};
function makeMedia(m,s){
 const wrap=document.createElement('div');wrap.className='native-media';wrap.dataset.media=m.id;if(m.opacity!==undefined)wrap.style.opacity=m.opacity;
 const el=document.createElement(m.type==='video'?'video':'img');wrap.append(el);el.draggable=false;
 const c=m.crop,l=(+c.l||0)/100000,r=(+c.r||0)/100000,t=(+c.t||0)/100000,b=(+c.b||0)/100000;
 el.style.cssText=`position:absolute;max-width:none;max-height:none;width:${100/(1-l-r)}%;height:${100/(1-t-b)}%;left:${-l/(1-l-r)*100}%;top:${-t/(1-t-b)*100}%;object-fit:fill;`;
 if(m.type==='video'){
  el.src=url(m.file);el.preload='none';el.playsInline=true;el.poster=url(m.poster);el.loop=s.id===22;el.muted=s.id===22;el.volume=s.id===22?0:.8;
  const start=(+m.trim?.st||0)/1000,end=(+m.trim?.end||0)/1000;
  el.dataset.start=start;el.dataset.end=end;
  el.addEventListener('loadedmetadata',()=>{if(start)el.currentTime=start;});
  el.addEventListener('timeupdate',()=>{if(end&&el.currentTime>=end){el.pause();el.currentTime=end;}});
  el.addEventListener('click',e=>{e.stopPropagation();const instance=instances.get(s.id);if(instance&&instance.step===0&&s.steps[0]?.some(x=>x.class==='mediacall'))advance();else if(el.paused)play(el);else el.pause();});
 }else {el.dataset.src=url(m.file);el.alt='';}
 wrap._media=m;wrap._el=el;return wrap;
}
function loadGif(w){if(w._media.type==='gif'&&!w._el.getAttribute('src'))w._el.src=w._el.dataset.src;}
function play(v){const start=+v.dataset.start||0,end=+v.dataset.end||0;if(v.ended||(end&&v.currentTime>=end-.1))v.currentTime=start;v.play().catch(()=>{v.controls=true;});}
function mount(section,id){
 const s=records.get(id),stage=document.createElement('div');stage.className='native-stage';section.style.setProperty('--native-backdrop',s.backdrop||'#20284b');section.append(stage);
 const base=document.createElement('img');base.className='native-base';base.dataset.src=url(s.base);base.alt='';base.draggable=false;stage.append(base);
 const inst={s,stage,step:0,groups:[],media:[],animations:[],generation:0};
 for(const [si,patches] of s.patches.entries()){
  const group=[];
  for(const raw of patches){const p=raw.alphaFile?{...raw,file:raw.alphaFile,box:raw.alphaBox}:raw;const wrap=document.createElement('div');wrap.className='native-piece';wrap.dataset.step=si+1;place(wrap,p.box);wrap.hidden=!p.static;wrap._patch=p;
   const img=document.createElement('img');img.dataset.src=url(p.file);img.alt='';img.draggable=false;img.className='native-ink';wrap.append(img);wrap._img=img;stage.append(wrap);group.push(wrap);
  }
  inst.groups.push(group);
 }
 for(const m of s.media){const w=makeMedia(m,s);let owner=null;
  for(const group of inst.groups)for(const piece of group)if(!owner&&piece._patch.roots.includes(m.root))owner=piece;
  if(owner){const b=owner._patch.box;place(w,[m.box[0]-b[0],m.box[1]-b[1],m.box[2],m.box[3]]);owner.append(w);w._owner=owner;}
  else{place(w,m.box);stage.insertBefore(w,stage.children[1]||null);w.style.zIndex='1';}
  inst.media.push(w);
 }
 instances.set(id,inst);resize();return stage;
}
function frames(p){
 const box=p.box,filter=p.filter[0]||'',start={opacity:1,transform:'none'},end={opacity:1,transform:'none'};
 if(filter.startsWith('wipe')){
  start.clipPath=filter.includes('left')?'inset(0 0 0 100%)':filter.includes('right')?'inset(0 100% 0 0)':filter.includes('up')?'inset(100% 0 0 0)':'inset(0 0 100% 0)';end.clipPath='inset(0 0 0 0)';
 }else if(filter.startsWith('circle')){start.clipPath='circle(0% at 50% 50%)';end.clipPath='circle(150% at 50% 50%)';}
 else if(filter.startsWith('barn')){start.clipPath='polygon(0 0,0 100%,0 100%,0 0,100% 0,100% 100%,100% 100%,100% 0)';end.clipPath='polygon(0 0,0 100%,50% 100%,50% 0,50% 0,50% 100%,100% 100%,100% 0)';}
 if(filter==='fade')start.opacity=0;
 let x=0,y=0,sx=1,sy=1;
 for(const a of p.anims||[]){let val=a.values?.[0],attr=a.attr?.[0];
  if(attr==='ppt_y'&&val==='1+#ppt_h/2')y=1080-box[1]+10;
  if(attr==='ppt_y'&&val==='#ppt_y+.1')y=108;
  if(attr==='ppt_x'&&val==='0.5')x=960-(box[0]+box[2]/2);
  if(attr==='ppt_y'&&val==='0.5')y=540-(box[1]+box[3]/2);
  if(attr==='ppt_w'&&val==='0')sx=0;
  if(attr==='ppt_h'&&val==='0')sy=0;
  if(attr==='ppt_w'&&val==='#ppt_w+.3')sx=1+576/box[2];
 }
 if(x||y||sx!==1||sy!==1)start.transform=`translate(${x}px,${y}px) scale(${sx},${sy})`;
 return [start,end];
}
function animatePiece(inst,w){
 const p=w._patch;w.hidden=false;if(p.static)return;if(p.static)return;if(p.static)return;if(p.static)return;for(const m of inst.media)if(m._owner===w)loadGif(m);
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 if(p.letters?.length>1){
  w._img.style.visibility='hidden';const chars=p.letters,extent=p.box[2];
  const boundaries=[0,...chars.slice(1).map((c,i)=>Math.max(0,Math.min(extent,(chars[i].left+chars[i].width+c.left)/2-p.box[0]))),extent];
  for(let i=0;i<chars.length;i++){const glyph=document.createElement('div');glyph.className='native-glyph';glyph.style.clipPath=`inset(0 ${extent-boundaries[i+1]}px 0 ${boundaries[i]}px)`;glyph.style.transformOrigin=`${(boundaries[i]+boundaries[i+1])/2}px 50%`;const img=w._img.cloneNode();img.style.visibility='visible';glyph.append(img);w.append(glyph);
   const f=frames(p);if(p.anims.some(a=>a.attr[0]==='ppt_x'&&a.values[0]==='0.5'))f[0].transform=`translate(${960-p.box[0]-(boundaries[i]+boundaries[i+1])/2}px,${540-p.box[1]-p.box[3]/2}px) scale(0)`;
   inst.animations.push(glyph.animate(f,{duration:p.duration,delay:p.delay+i*p.duration*.1,fill:'both',easing:'cubic-bezier(0,.65,.35,1)'}));
  }
 }else inst.animations.push(w.animate(frames(p),{duration:p.duration,delay:p.delay,fill:'both',easing:[50,53].includes(p.preset)?'cubic-bezier(0,.65,.35,1)':'linear'}));
}
function clearAnimations(inst){for(const a of inst.animations){a.cancel();}inst.animations=[];inst.stage.querySelectorAll('.native-glyph').forEach(e=>e.remove());inst.stage.querySelectorAll('.native-ink').forEach(e=>e.style.visibility='');}
function pause(inst){for(const w of inst.media)if(w._media.type==='video')w._el.pause();}
function reset(inst,step=0){clearAnimations(inst);pause(inst);inst.step=step;for(const [i,g] of inst.groups.entries())for(const w of g)w.hidden=i>=step&&!w._patch.static;for(const w of inst.media){if(w._media.type==='gif'){w._el.removeAttribute('src');if(!w._owner||!w._owner.hidden)loadGif(w);}else{w._el.pause();try{w._el.currentTime=+w._el.dataset.start||0;}catch{}}}}
function enter(id,final=false){if(live)pause(live);live=instances.get(id)||null;if(live){live.stage.querySelectorAll('img[data-src]').forEach(i=>{if(!i.src)i.src=i.dataset.src;});reset(live,final?live.s.steps.length:0);}resize();}
function leave(){if(live){pause(live);clearAnimations(live);}live=null;}
function advance(){if(!live)return false;const inst=live;
 if(inst.animations.some(a=>a.playState==='running'||a.playState==='pending')){inst.animations.forEach(a=>a.finish());return true;}
 if(inst.step>=inst.s.steps.length)return false;
 const index=inst.step++;for(const effect of inst.s.steps[index])if(effect.class==='mediacall')for(const target of effect.targets){const w=inst.media.find(x=>x._media.id===target);if(w)play(w._el);}
 for(const w of inst.groups[index])animatePiece(inst,w);
 return true;
}
function back(){if(!live||!live.step)return false;reset(live,live.step-1);return true;}
function resize(){for(const inst of instances.values()){const s=inst.stage.parentElement;if(s.hidden)continue;const k=Math.min(s.clientWidth/1920,s.clientHeight/1080);inst.stage.style.transform=`translate(-50%,-50%) scale(${k})`;}}
addEventListener('resize',resize);document.addEventListener('visibilitychange',()=>{if(document.hidden&&live)pause(live);});
window.nativePlayer={mount,enter,leave,advance,back,resize,get step(){return live?.step??0;},get clicks(){return live?.s.steps.length??0;},finish(){live?.animations.forEach(a=>a.finish());},state(id,step){enter(id);reset(live,step);},hideMedia(){if(live)live.media.forEach(w=>w.style.visibility='hidden');}};
})();
