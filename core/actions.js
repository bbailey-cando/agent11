export const PUT_BIOGRAPHY   = 'PUT_BIOGRAPHY';
export const FETCH_BIOGRAPHY = 'FETCH_BIOGRAPHY';
export const UPLOAD_IMAGE    = 'UPLOAD_IMAGE';
export const PUT_IMAGE_URL   = 'PUT_IMAGE_URL';
export const FETCH_IMAGE_URL = 'FETCH_IMAGE_URL';

export function putBiography(new_bio) {
  return {
    type: PUT_BIOGRAPHY,
    payload: new_bio
  };
}

export function fetchBiography() {
  return {
    type: FETCH_BIOGRAPHY
  };
}

export function uploadImage(imageFile) {
  return {
    type: UPLOAD_IMAGE,
    payload: imageFile
  };
}

export function putImageURL(new_url) {
  console.log('putImageURL("' + new_url + '")');
  return {
    type: PUT_IMAGE_URL,
    payload: new_url
  };
}

export function fetchImageURL() {
  return {
    type: FETCH_IMAGE_URL,
  };
}