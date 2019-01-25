import toEntity from '../../../domains/users';

export default model => {

  const all = (...args) => {
    return model.find(...args)
    .then(entities => {
      return entities.map(data => {
        return toEntity(data);
      });
    });
  };

  const create = (...args) => {
    return model.create(...args)
    .then(response => {
      return toEntity(response);
    });
  };

  return {
    all,
    create
  }
};