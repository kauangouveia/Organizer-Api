import knex from 'knex';
import {DATABASE} from "../../utils/constants"


const organizerConfig = {
  client: DATABASE.DIALECT,
  connection: {
    host: DATABASE.HOST,
    port: DATABASE.PORT,
    user: DATABASE.USER,
    password: DATABASE.PASSWORD,
    database: DATABASE.NAME,
    options: {
      encrypt: false,
      enableArithAbort: false,
    },
  },
};

export const organizer = knex(organizerConfig);
