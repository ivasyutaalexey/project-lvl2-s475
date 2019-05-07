import path from 'path';
import jsonParser from './parsers/json-parser';
import yamlParser from './parsers/yaml-parser';
import iniParser from './parsers/ini-parser';

const getParser = (firstFilepath, secondFilepath) => {
  let parser;
  const firstFileExtname = path.extname(firstFilepath);
  const secondFileExtname = path.extname(secondFilepath);

  if (firstFileExtname === '.json' && secondFileExtname === '.json') {
    parser = jsonParser;
  } else if (firstFileExtname === '.yml' && secondFileExtname === '.yml') {
    parser = yamlParser;
  } else if (firstFileExtname === '.ini' && secondFileExtname === '.ini') {
    parser = iniParser;
  }

  return parser;
};

export default (filePath1, filePath2) => {
  const parser = getParser(filePath1, filePath2);
  return parser(filePath1, filePath2);
};
