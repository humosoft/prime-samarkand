export default function isInViewport(el) {
  let bounding = el.getBoundingClientRect();

  if (window.screenTop - bounding.top > -20) {
    return true;
  }
}
