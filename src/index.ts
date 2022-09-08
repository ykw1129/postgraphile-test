import express from 'express';
import postgraphile from 'postgraphile';
import chalk from 'chalk';
import packageJson from '../package.json';
import { postGraphileMiddleware } from './middleware/PostGraphile';

const app = express();
const log = console.log
const success = chalk.bold.underline.green
const HOST = process.env.SERVER_HOST || 'localhost';
const PORT = parseInt(process.env.SERVER_PORT || '', 10) || 3000;
/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */
app.use(postGraphileMiddleware);

app.listen(PORT,()=>{
  log(
      chalk.green(
        `${chalk.gray(packageJson.name)} listening on port ${chalk.bold(
          PORT,
        )}`,
      ),
    );
  log()
  log(`📡 GraphQL:\t${success(`http://${HOST}:${PORT}/graphql`)}`);
  log()
  log(`🛠️ GraphiQL:\t${success(`http://${HOST}:${PORT}/graphiql`)}`);
  log()
  log(`🚀 Server:\t${success(`http://${HOST}:${PORT}`)}`);
  log()
})