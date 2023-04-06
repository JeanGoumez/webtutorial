/**
 * https://stackoverflow.com/a/11384018/9868383
 * @param {String} href
 */
export const openInNewTab = (href = "#") => {
  window.open(href, "_blank").focus();
};
