import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolders = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadFolders,
  storage: multer.diskStorage({
    destination: uploadFolders,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const fileName = `${fileHash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
