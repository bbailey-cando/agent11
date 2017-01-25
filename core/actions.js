export const PUT_BIOGRAPHY   = 'PUT_BIOGRAPHY';
export const FETCH_BIOGRAPHY = 'FETCH_BIOGRAPHY';
export const UPLOAD_IMAGE    = 'UPLOAD_IMAGE';
export const IMAGE_UPLOAD_SNAPSHOT = 'IMAGE_UPLOAD_SNAPSHOT';
export const IMAGE_UPLOAD_SUCCEEDED = 'IMAGE_UPLOAD_SUCCEEDED';
export const PUT_IMAGE_URL   = 'PUT_IMAGE_URL';
export const FETCH_IMAGE_URL = 'FETCH_IMAGE_URL';

function putBiography(new_bio) {
  return {
    type: PUT_BIOGRAPHY,
    payload: new_bio
  };
}

function fetchBiography() {
  return {
    type: FETCH_BIOGRAPHY
  };
}

function uploadImage(imageFile) {
  return {
    type: UPLOAD_IMAGE,
    payload: imageFile
  };
}

function imageUploadSnapshot(progress){
  return {
    type: IMAGE_UPLOAD_SNAPSHOT,
    progress:progress
  };
}

function imageUploadSucceded(newURL){
   return {
     type: IMAGE_UPLOAD_SUCCEEDED,
     newURL
  };
}

function putImageURL(new_url) {
  return {
    type: PUT_IMAGE_URL,
    newURL: new_url
  };
}

function fetchImageURL() {
  return {
    type: FETCH_IMAGE_URL,
  };
}

export default { putBiography, fetchBiography, uploadImage, imageUploadSnapshot, imageUploadSucceded, putImageURL, fetchImageURL};