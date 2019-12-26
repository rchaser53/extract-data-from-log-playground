const path = require('path')
const shell = require('shelljs')
const fs = require('fs')

const input = fs.readFileSync('base.txt', { encoding: 'utf8' });
const inputArray = input.split("\n");

const getS3 = (input, name) => {
  return new Promise((resolve, reject) => {
    shell.exec(`s3cmd get ${input} ./${name}.gz`, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
      return
    });
  })
};