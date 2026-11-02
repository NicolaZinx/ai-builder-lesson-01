(() => {
'use strict';
const data=window.SLIDES,deck=document.querySelector('#deck');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const card=(c,i)=>`<article class="card"><span class="card-number">${String(i+1).padStart(2,'0')}</span><h2>${esc(c[0])}</h2><p>${esc(c[1])}</p></article>`;
const cards=s=>`<div class="grid cols-${Math.min(s.cards.length,5)}">${s.cards.map(card).join('')}</div>`;
for(const s of data){
const sec=document.createElement('section'); sec.className=`slide ${s.kind||''} ${s.image?'with-image':''} ${s.cards.length===5?'five':''}`;if(s.kind==='native')sec.classList.add('native-slide');sec.hidden=s.id!==1;sec.id='slide-'+s.id;sec.setAttribute('aria-label',`第${s.id}页，共${data.length}页`);
if(s.kind==='native'){deck.append(sec);nativePlayer.mount(sec,s.id);continue;}
let h=`<header class="slide-head"><p class="section-tag">${s.sourceId<4?'01 / 开场':s.sourceId<15?'02 / 理解游戏':s.sourceId<21?'03 / 拆解玩法':s.sourceId<30?'04 / AI协作':s.sourceId<34?'05 / 设计需求':s.sourceId<46?'06 / 开发迭代':s.sourceId<50?'07 / 测试与展示':'08 / 迁移与交付'}</p><h1>${esc(s.title)}</h1><p class="subtitle">${esc(s.sub)}</p></header>`;
let content='';
if(s.kind==='intro'){ h=`<div class="intro-stage"><img src="${esc(s.image)}" alt="${esc(s.title)}" draggable="false"></div>`;
}else if(s.kind==='poster'){
 h=`<div class="poster-stage"><img src="${esc(s.image)}" alt="${esc(s.title)}" draggable="false"></div>`;
}else if(s.kind==='cover'){
 h=`<p class="institution">${esc(s.footer)}</p><p class="cover-kicker">${esc(s.kicker)}</p><h1><em>AI</em> 游戏开发</h1><p class="workshop">${esc(s.sub)}</p><p class="presenter">${esc(s.presenter)}</p><div class="cover-bottom">${esc(s.date)}</div><div class="cover-art" aria-hidden="true"><span class="orbit orbit-one"></span><span class="orbit orbit-two"></span><div class="game-token"><i></i><b>+</b><small>CREATE / PLAY / ITERATE</small></div></div>`;
}else{
 if(s.kind==='showcase') content=`<button class="showcase-preview open-game" data-game="${s.game}" data-title="${esc(s.demoTitle)}" aria-label="打开${esc(s.demoTitle)}"><img src="${s.image}" alt="${esc(s.demoTitle)}"><span class="experience-label">打开互动体验 <span>↗</span></span></button>`;
 else if(s.kind==='showcase-video') content=`<video class="showcase-player" controls playsinline preload="metadata" poster="${s.poster}" src="${s.video}" aria-label="${esc(s.title)}"></video>`;
 else if(s.kind==='statement') content=`<p class="big">${esc(s.big)}</p>`;
 else if(s.kind==='gallery')content=`<div class="gallery-grid">${s.items.map(c=>`<article class="card"><img src="${c[2]}" alt="${esc(c[0])}游戏画面"><h2>${esc(c[0])}</h2><p>${esc(c[1])}</p></article>`).join('')}</div>`;
 else if(s.kind==='table')content=`<div class="table-wrap card"><table><thead><tr>${s.headers.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.rows.map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 else if(s.kind==='prompt')content=`<div class="prompt-body"><div class="prompt-lines">${s.display.split('\n').map((x,i)=>`<article class="row"><span class="step-no">${i+1}</span><p>${esc(x)}</p></article>`).join('')}</div><div class="prompt-controls"><button class="primary copy-prompt" data-id="${s.id}">复制完整指令 <span>↗</span></button><details><summary>查看完整指令</summary><pre>${esc(s.prompt)}</pre></details></div></div>`;
 else if(s.kind==='demo')content=`<div class="split demo-split"><button class="game-preview open-game" data-game="${s.game}" data-title="${s.id===15?'校园补给跑':'概念配对'}" aria-label="试玩${s.id===15?'校园补给跑':'概念配对'}"><img src="${s.image}" alt="${s.id===15?'校园补给跑':'概念配对'}参考游戏界面"><span class="play-badge">▶</span></button><div class="stack">${s.cards.map(card).join('')}<button class="primary open-game" data-game="${s.game}" data-title="${s.id===15?'校园补给跑':'概念配对'}">打开游戏试玩 ↗</button></div></div>`;
 else if(s.image)content=`<div class="split"><figure class="image-panel"><img src="${s.image}" alt="${esc(s.caption)}"><figcaption>${esc(s.caption)}${s.link?` · <a href="${s.link[1]}" target="_blank" rel="noopener">${s.link[0]} ↗</a>`:''}</figcaption></figure><div class="stack">${s.cards.map(card).join('')}</div></div>`;
 else content=cards(s);
 h+=`<div class="body">${content}${s.call?`<div class="callout">${esc(s.call)}</div>`:''}</div>`;
}
sec.innerHTML=h;deck.append(sec);
}
let autoFullAttempted=!!document.fullscreenElement;
document.addEventListener('fullscreenchange',()=>{if(document.fullscreenElement)autoFullAttempted=true;nativePlayer.resize();});
document.addEventListener('pointerdown',e=>{if(autoFullAttempted||!e.isTrusted||!e.target.closest('#deck')||e.target.closest('button,a,input,textarea,select,summary,details,video'))return;autoFullAttempted=true;document.documentElement.requestFullscreen?.().catch(()=>{});},{capture:true});
const all=[...deck.children],page=document.querySelector('#page'),prev=document.querySelector('#previous'),next=document.querySelector('#next'),dialog=document.querySelector('#game'),frame=document.querySelector('#game-frame');let current=0,opener=null;
function go(n,hash=false,final=false){n=Math.max(0,Math.min(data.length-1,n));if(dialog.open||n===current)return;nativePlayer.leave();all[current].querySelectorAll('video').forEach(v=>v.pause());all[current].hidden=true;all[current].classList.remove('entering');all[n].style.setProperty('--slide-direction',n>current?'1':'-1');current=n;all[n].hidden=false;if(data[n].kind==='native')nativePlayer.enter(n+1,final);all[n].scrollTop=0;all[n].classList.add('entering');update();dispatchEvent(new Event('deckslidechange'));if(!hash)history.replaceState(null,'',n?'#'+(n+1):location.pathname+location.search);}
function update(){document.body.classList.toggle('is-native',data[current].kind==='native');page.innerHTML=`<b>${String(current+1).padStart(2,'0')}</b><span>/ ${data.length}</span>`;prev.disabled=current===0&&nativePlayer.step===0;next.disabled=current===data.length-1;document.querySelector('#progress').style.width=(current+1)/data.length*100+'%';document.title=`${current+1} · ${data[current].title} · AI技术应用与实操 · 第一讲`;}
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}}
function closeGame(){dialog.close();frame.removeAttribute('src');opener?.focus({preventScroll:true});}
function toggleCurrentVideo(){const v=all[current].querySelector('.showcase-player');if(!v)return false;if(v.paused)v.play().catch(()=>{});else v.pause();return true;}
function advance(){if(data[current].kind==='native'&&nativePlayer.advance()){update();return;}go(current+1);}
function previous(){if(data[current].kind==='native'&&nativePlayer.back()){update();return;}go(current-1,false,true);}
prev.onclick=previous;next.onclick=advance;page.onclick=fullscreen;document.querySelector('#close-game').onclick=closeGame;dialog.addEventListener('cancel',e=>{e.preventDefault();closeGame();});
document.querySelectorAll('.open-game').forEach(b=>b.onclick=()=>{opener=b;document.querySelector('#game-title').textContent=b.dataset.title;frame.src=b.dataset.game;dialog.showModal();document.querySelector('#close-game').focus();});
const boundFrameDocs=new WeakSet();
function bindExperienceKeys(doc){if(!doc||boundFrameDocs.has(doc))return;boundFrameDocs.add(doc);doc.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeGame();return;}if(e.key.toLowerCase()==='f'&&!e.target.closest('input,textarea,select,[contenteditable]')){e.preventDefault();fullscreen();}});const attach=()=>doc.querySelectorAll('iframe').forEach(f=>{try{bindExperienceKeys(f.contentDocument);}catch{}f.addEventListener('load',()=>{try{bindExperienceKeys(f.contentDocument);}catch{}},{once:true});});attach();new MutationObserver(attach).observe(doc.documentElement,{childList:true,subtree:true});}
frame.addEventListener('load',()=>{try{bindExperienceKeys(frame.contentDocument);}catch{}});
document.addEventListener('keydown',e=>{if(dialog.open){if(e.key==='Escape')closeGame();return;}if(e.target.closest('input,textarea,select'))return;if((e.key==='Enter'||e.code==='Space')&&e.target.closest('summary,button,a'))return;if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();advance();}else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();previous();}else if(e.key.toLowerCase()==='f'){e.preventDefault();fullscreen();}else if(e.key==='Enter'){e.preventDefault();if(!document.fullscreenElement)fullscreen();else if(!toggleCurrentVideo())advance();}else if(e.code==='Space'){e.preventDefault();if(!toggleCurrentVideo())advance();}else if(e.key==='Home')go(0);else if(e.key==='End')go(data.length-1);});
let touch=null;deck.addEventListener('touchstart',e=>{if(e.touches.length!==1||e.target.closest('button,details'))return;touch={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});deck.addEventListener('touchend',e=>{if(!touch)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;touch=null;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.6){if(dx<0)advance();else previous();}},{passive:true});
document.querySelectorAll('.copy-prompt').forEach(b=>b.onclick=async()=>{const text=data[+b.dataset.id-1].prompt;let ok=false;try{await navigator.clipboard.writeText(text);ok=true;}catch{const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;opacity:0';document.body.append(ta);ta.select();ok=document.execCommand('copy');ta.remove();}b.textContent=ok?'已复制，可粘贴到 WorkBuddy':'请展开全文并复制';setTimeout(()=>b.innerHTML='复制完整指令 <span>↗</span>',2200);});
for(let i=0;i<24;i++){const d=document.createElement('i');d.className='speck';d.style.cssText=`left:${i*37.37%100}%;top:${(i*17.21+13)%100}%;animation-delay:${-i*.81}s`;document.querySelector('#dust').append(d);}
addEventListener('hashchange',()=>{const n=+location.hash.slice(1);if(Number.isInteger(n)&&n>0&&n<=data.length)go(n-1,true);});deck.addEventListener('click',e=>{if(['native','intro'].includes(data[current].kind)&&!e.target.closest('video,button,a,input'))advance();});
update();if(data[0].kind==='native')nativePlayer.enter(1);const n=+location.hash.slice(1);if(n>0&&n<=data.length)go(n-1,true);
window.deckApp={go:n=>go(n-1),advance,previous,get current(){return current+1;}};
})();