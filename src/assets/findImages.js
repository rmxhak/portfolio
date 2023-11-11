const TRELLO_IMAGES = [
  './images/projects/trello1.gif',
  './images/projects/trello2.gif',
  './images/projects/trello3.gif',
  './images/projects/trello4.gif',
];

export const collection = {
  trello: TRELLO_IMAGES,
};

export const createCarouselImages = (images) => {
  console.log(images);
  if (images.length < 2) return;
  return [images.at(-1), ...images, images[0]];
};
