export const startNewNote = () => {
  return (dispatch, getState) => {
    const uid = getState();
    console.log(uid);
  };
};
