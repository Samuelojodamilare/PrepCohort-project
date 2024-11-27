export const TruncateText = (text, length = 20) => {
  return text.length <= length ? text : text.substring(0, length) + " .";
};
