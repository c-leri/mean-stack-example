# MEAN Stack Example

This application was made following [this tutorial](https://www.mongodb.com/languages/mean-stack-tutorial) about the MEAN stack.

## Running the application

### Database

You first need to create a `.env` file in the `server/` directory containing an `ATLAS_URI` field set to the uri of a mongodb server.

### Server

After having setting up the `.env` file, run `npx ts-node src/server.ts` in the `server/` directory to startup the server.

### Client

After having started the server, run `ng serve -o` to open the client.
