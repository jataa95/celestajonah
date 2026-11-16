"use client";
import { useLayoutEffect } from "react";

let played = false;

/**
 * The home-page opening animation is pure CSS so it starts on first paint.
 * It plays only when the site is opened directly on the home page: once it has run, `intro-done` is set on
 * <html> and later client-side visits to the home page skip straight to the
 * finished state.
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
    const t = window.setTimeout(() => html.classList.add("intro-done"), 3600);
    return () => window.clearTimeout(t);
  }, []);
  return null;
}
