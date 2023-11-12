const TRELLO_IMAGES = [
  './images/projects/trello/trello1.gif',
  './images/projects/trello/trello2.gif',
  './images/projects/trello/trello3.gif',
  './images/projects/trello/trello4.gif',
];

const DUI_IMAGES = [
  './images/projects/dui/signout.gif',
  './images/projects/dui/update-post.gif',
  './images/projects/dui/delete-post.gif',
  './images/projects/dui/write-comment.gif',
  './images/projects/dui/grid.gif',
  './images/projects/dui/list.gif',
];

const YOUTUBE_IMAGES = [
  './images/projects/youtube/youtube1.gif',
  './images/projects/youtube/youtube2.gif',
  './images/projects/youtube/youtube3.gif',
];

const PORTFOLIO_IMAGES = [
  './images/projects/portfolio/portfolio1.png',
  './images/projects/portfolio/portfolio2.png',
  './images/projects/portfolio/portfolio3.png',
];

export const collection = {
  trello: TRELLO_IMAGES,
  dui: DUI_IMAGES,
  youtube: YOUTUBE_IMAGES,
  portfolio: PORTFOLIO_IMAGES,
};

export const createCarouselImages = (images) => {
  if (images.length < 2) return;
  return [images.at(-1), ...images, images[0]];
};
