export default ({ server }) => {
  return {
    start: () =>
      Promise.resolve()
      .then(server.start)
  }
};