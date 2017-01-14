export const PUT_BIOGRAPHY   = 'PUT_BIOGRAPHY';
export const FETCH_BIOGRAPHY = 'FETCH_BIOGRAPHY';

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