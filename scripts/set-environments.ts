require('dotenv/config');
const { writeFile } = require('fs');

type EnvConfig = {
  environments: any;
  targetPath: string;
};

const setEnvironments = () => {
  const environments = ['PORT'];
  const envConfig = {
    environments: {
      production: false,
    },
    targetPath: './src/environments/environment.ts',
  } as EnvConfig;

  if (process.env['PROD']) {
    envConfig.environments.production = true;
    envConfig.targetPath = './src/environments/environment.prod.ts';
  }

  environments.forEach((environment) => {
    if (!process.env[environment]) {
      console.error('All the required environment variables were not provided!');
      process.exit(-1);
    } else {
      envConfig.environments[environment] = process.env[environment] as string;
    }
  });

  const configFile = `export const environment = ${JSON.stringify(
    envConfig.environments,
    null,
    2,
  )}`;

  writeFile(envConfig.targetPath, configFile, function (err: Error) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(`Angular environment.ts file generated correctly at ${envConfig.targetPath} \n`);
    }
  });
};

setEnvironments();
