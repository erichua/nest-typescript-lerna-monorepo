import commonConfig from './config.common';
import developmentConfig from './config.development';
import productionConfig from './config.production';
import dotenv from 'dotenv';
import paths from './paths'


const  appPackage =require(`${paths.appPackageJson}`);

interface Map {
  [key: string]: object | undefined;
}

const allEnvConfig: Map = {
   'DEVELOPMENT': Object.assign(developmentConfig, commonConfig) ,
   'PRODUCTION': Object.assign(productionConfig, commonConfig) 
  };

const appName = appPackage.name;

const appEnv = (process.env.REACT_APP_CONFIG_ENV || process.env.NODE_ENV || 'DEVELOPMENT').toUpperCase();


const appConfig: any = allEnvConfig[appEnv] || {};

export { appConfig };





