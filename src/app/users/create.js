import User from '../../domains/users';
import { generate } from 'randomstring';
import Hash from '../../infrastructure/encryption/Hash';

export default (({ userRepository }) => {

  const create = (({ body }) => {
    let _password = null;
    return Promise.resolve().then(() => {
      _password = generate(8);
      body.hashedPassword = Hash(_password);
      const entity = User(body);
      return userRepository.create(entity);
    }).then(response => {
      return response;
    });
  });

  return {
    create
  }
});