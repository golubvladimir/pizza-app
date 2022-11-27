import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

console.log(process.cwd())

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  database: 'pizza_db',
  port: 8889,
  host: 'localhost',
  password: 'root',
  username: 'root',
  seeds: [`${ process.cwd() }/src/database/seeds/**/*{.js,.ts}`],
  factories: [`${ process.cwd() }/src/database/factories/**/*{.js,.ts}`]
};

export const dataSource = new DataSource(options);