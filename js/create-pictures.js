import { createBigPicture } from "./create-big-pictures";
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createPicture = ({url, description, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

const renderPicture = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const creatingPicture = createPicture(picture);
    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      createBigPicture(picture);
    });
    fragment.append(picture);
  });

  container.append(fragment);
}

export {renderPicture};
