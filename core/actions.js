export const UPDATE_BIOGRAPHY = 'UPDATE_BIOGRAPHY';
export function updateBiography(new_bio) {
  return {
    type: UPDATE_BIOGRAPHY,
    payload: new_bio
  };
}
