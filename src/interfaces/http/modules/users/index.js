import Container from '../../../../container';
import { Router } from 'express';
import userRepository from '../../../../infrastructure/repositories/users';
import App from '../../../../app/users';
import { compose } from 'ramda';

export default () => {
  const router = Router();
  const { database } = Container.cradle;

  const userModel = database.models.User;
  const userUseCase = compose(userRepository)(userModel);

  const { get, create } = App;

  const getUseCase = get({ userRepository: userUseCase });
  const createUseCase = create({ userRepository: userUseCase });

  router.get('/', (req, res) => {
    getUseCase.all(req, res)
    .then(userData => {
      return res.json({
        status: '000',
        message: 'Successfully retrived all the users',
        data: userData
      });
    });
  });

  router.post('/', (req, res) => {
    createUseCase.create(req, res)
    .then(response => {
      return res.json({
        status: '000',
        message: 'Successfully created the user',
        response: response
      });
    }); 
  });

  return router;
}