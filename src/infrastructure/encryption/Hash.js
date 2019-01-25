
import { createHash } from 'crypto';

export default password => {
  const hash = createHash('sha256');
  const hashedPassword = hash.digest('base64');
  return hashedPassword;
}