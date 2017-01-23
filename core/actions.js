export const PUT_BIOGRAPHY   = 'PUT_BIOGRAPHY';
export const FETCH_BIOGRAPHY = 'FETCH_BIOGRAPHY';
export const UPLOAD_IMAGE    = 'UPLOAD_IMAGE';

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