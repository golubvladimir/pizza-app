import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  database: 'pizza_db',
  port: 8889,
  host: 'localhost',
  password: 'root',
  username: 'root',
  seeds: [`${ __dirname }/seeds/**/*{.js,.ts}`],
  factories: [`${ __dirname }/factories/**/*{.js,.ts}`]
};

export const dataSource = new DataSource(options);