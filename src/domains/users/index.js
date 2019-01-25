import t from 'tcomb';
import { compose, complement, isNil, pickBy } from 'ramda';

const cleanData = entity => pickBy(compose(complement(isNil)), entity);

const User = t.struct({
  firstname: t.String,
  lastname: t.String,
  email: t.String,
  hashedPassword: t.String,
  age: t.Number
});

export default compose(cleanData, User);