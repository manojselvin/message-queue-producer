import nconf from 'nconf';

nconf.use('file', { file: './config/config.json' })

export const QUEUE_NAME =  nconf.get('QUEUE_NAME');
export const CONN_URL = nconf.get('CONN_URL');