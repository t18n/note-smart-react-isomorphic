const truncate = (text, length = 20, after = '...') => {
  if (!text) return;

  // Get paragraph value
  let paragraph = text.trim();

  // Convert the content into an array of words < length
  paragraph = paragraph.split(' ').slice(0, length);

  // Convert the array of words back into a string + after
  const truncated = paragraph.join(' ') + after;

  return truncated;
};

export default truncate;
