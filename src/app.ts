import * as express from "express";

/**
 * Import Controllers (route handlers).
 */

/**
 * Create Express server.
 */
const app = express();

app.set("port", process.env.PORT || 8080);

/**
 * Start Express server.
 */

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen(app.get("port"), () => {
    console.log("server started at http://localhost:" + app.get("port"));
});

module.exports = app;