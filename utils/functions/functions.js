export const getPosition = (el) => {
  let xPos = 0;
  let yPos = 0;

  xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
  yPos += el.offsetTop - el.scrollTop + el.clientTop;

  el = el.offsetParent;

  return {
    x: xPos,
    y: yPos,
  };
};
