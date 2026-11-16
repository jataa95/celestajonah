"use client";
import { useLayoutEffect } from "react";

let played = false;

const CHARS = "celstajonhrvuxz"; // similar widths to the wordmark, so the scramble stays tidy

/**
 * Scramble-text reveal for the wordmark: every letter flickers through random
 * characters, then locks onto its real letter, settling left to right
 * (similar to GSAP's ScrambleText). Each letter's width is pinned while it
 * scrambles so the centred word doesn't jitter.
 */
function scramble(letters: HTMLElement[]) {
  const finals = letters.map((el) => el.textContent ?? "");
  const locked = letters.map(() => false);
  letters.forEach((el) => {
    el.style.width = `${el.getBoundingClientRect().width}px`;
    el.style.textAlign = "center";
    el.style.overflowX = "clip";
  });
  const start = performance.now();
  const lockAt = (i: number) => 1300 + i * 200; // ms; last letter locks at ~3.5s
  let last = 0;
  let raf = 0;
  const tick = (now: number) => {
    const t = now - start;
    const swap = now - last > 110; // change random letters ~9 times a second
    if (swap) last = now;
    let done = true;
    letters.forEach((el, i) => {
      if (t >= lockAt(i)) {
        if (!locked[i]) {
          locked[i] = true;
          el.textContent = finals[i];
          el.classList.add("is-locked");
          el.style.width = "";
          el.style.textAlign = "";
          el.style.overflowX = "";
        }
      } else {
        done = false;
        if (swap) el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    });
    if (!done) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(raf);
    letters.forEach((el, i) => {
      el.textContent = finals[i];
      el.style.width = "";
      el.style.textAlign = "";
      el.style.overflowX = "";
    });
  };
}

/**
 * The home-page opening animation starts on first paint (CSS). It plays only
 * when the site is opened directly on the home page; afterwards `intro-done`
 * is set on <html> and returning to the home page skips to the finished state.
 */
export default function IntroGate() {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const firstPath = (window as Window & { __firstPath?: string }).__firstPath;
    if (played || firstPath !== "/") {
      html.classList.add("intro-done");
      return;
    }
    played = true;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stop = still ? () => {} : scramble(Array.from(document.querySelectorAll<HTMLElement>(".hero__word .ch > span")));
    const t = window.setTimeout(() => html.classList.add("intro-done"), 5600);
    return () => {
      window.clearTimeout(t);
      stop();
    };
  }, []);
  return null;
}
