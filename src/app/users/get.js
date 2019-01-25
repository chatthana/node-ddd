export default (({ userRepository }) => {

  const all = () => {
    return Promise.resolve()
      .then(() => {
        return userRepository.all();
      });
  }

  return {
    all
  }
});