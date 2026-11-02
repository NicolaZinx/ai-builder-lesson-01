/* Quiet local lighting. Native source slides never receive interactive effects. */
(() => {
'use strict';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const fine = matchMedia('(hover: hover) and (pointer: fine)');
const selector = '.card, .row, .callout';
let hovered = null, pressed = null, pending = null, frame = 0;
const properties = ['--local-x','--local-y','--tilt-x','--tilt-y','--cast-x','--cast-y'];
function nativeSlide(el) {
  const slide = el?.closest('.slide');
  const number = Number(slide?.id?.replace('slide-', ''));
  return !slide || slide.classList.contains('native-slide') || (number >= 1 && number <= 24);
}
function eligible(el) {
  if (!(el instanceof Element)) return null;
  const surface = el.closest(selector);
  return surface && !nativeSlide(surface) ? surface : null;
}
function resetSurface(el) {
  if (!el) return;
  el.classList.remove('lit', 'pressed');
  properties.forEach(name => el.style.removeProperty(name));
}
function release() { resetSurface(pressed); pressed = null; }
function clear() {
  if (frame) cancelAnimationFrame(frame);
  frame = 0; pending = null;
  resetSurface(hovered); hovered = null;
  release();
}
function blocked() {
  return reduced.matches || document.body.classList.contains('is-native') ||
    document.body.classList.contains('is-video') || !!document.querySelector('#game[open]');
}
// Remove leftovers from the former decorative particle layer, if present.
for (const id of ['cursor-aura', 'pointer-gold']) document.getElementById(id)?.remove();
document.documentElement.classList.remove('pointer-active');
['--cover-x','--cover-y','--cursor-x','--cursor-y'].forEach(name => document.documentElement.style.removeProperty(name));
document.querySelectorAll(selector).forEach(el => {
  resetSurface(el);
  el.classList.toggle('surface', !nativeSlide(el));
  if (nativeSlide(el)) return;
  if (el.classList.contains('callout')) {
    [...el.childNodes].filter(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim()).forEach(n => {
      const span = document.createElement('span'); n.replaceWith(span); span.append(n);
    });
  }
});
function illuminate() {
  frame = 0;
  if (!pending || blocked() || !fine.matches) { clear(); return; }
  const {x, y, target} = pending;
  const surface = eligible(target);
  if (surface !== hovered) { resetSurface(hovered); hovered = surface; }
  if (!surface) return;
  const box = surface.getBoundingClientRect();
  const px = Math.max(0, Math.min(1, (x - box.left) / box.width));
  const py = Math.max(0, Math.min(1, (y - box.top) / box.height));
  surface.style.setProperty('--local-x', `${px * 100}%`);
  surface.style.setProperty('--local-y', `${py * 100}%`);
  surface.style.setProperty('--tilt-x', `${(.5 - py) * .9}deg`);
  surface.style.setProperty('--tilt-y', `${(px - .5) * .9}deg`);
  surface.style.setProperty('--cast-x', `${(.5 - px) * 4}px`);
  surface.style.setProperty('--cast-y', `${12 + (.5 - py) * 4}px`);
  surface.classList.add('lit');
}
document.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') return;
  if (blocked() || !fine.matches) { clear(); return; }
  pending = {x:e.clientX, y:e.clientY, target:e.target};
  if (!frame) frame = requestAnimationFrame(illuminate);
}, {passive:true});
document.addEventListener('pointerout', e => { if (!e.relatedTarget) clear(); }, {passive:true});
document.addEventListener('pointerdown', e => {
  if (e.pointerType !== 'touch' || blocked()) return;
  release(); pressed = eligible(e.target);
  if (pressed) pressed.classList.add('pressed');
}, {passive:true});
document.addEventListener('pointerup', release, {passive:true});
document.addEventListener('pointercancel', release, {passive:true});
addEventListener('deckslidechange', clear);
addEventListener('blur', clear);
document.addEventListener('visibilitychange', () => { if (document.hidden) clear(); });
reduced.addEventListener('change', clear); fine.addEventListener('change', clear);
document.querySelectorAll('.open-game').forEach(el => el.addEventListener('click', clear));
})();
