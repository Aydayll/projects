const fs = require('fs');
const File = require('../models/File');
const config = require('config');
const path = require('path');

class FileService {
  createDir(File) {
    const folderName = path.resolve(__dirname, '../files')
    const filePath = `${folderName}/${File.user}/${File.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: 'Этот файл был успешно создан' });
        } else {
          return reject({ message: 'Данный файл уже есть' });
        }
      } catch (err) {
        return reject(err);
      }
    });
  }
}

module.exports = new FileService();
