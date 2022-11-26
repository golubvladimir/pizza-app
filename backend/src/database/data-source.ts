import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  database: 'pizza_db',
  seeds: [`${ __dirname }/seeds/**/*.js`],
  factories: [`${ __dirname }/factories/**/*.js`]
};

export const dataSource = new DataSource(options);