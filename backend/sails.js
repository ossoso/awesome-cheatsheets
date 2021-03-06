/********************************************************************************************
 * SAILS.JS CHEATSHEET
 * REFERENCE: https://sailsjs.com/documentation/reference
 * CONCEPTS: https://sailsjs.com/documentation/concepts
 * APP STRUCTURE: https://sailsjs.com/documentation/anatomy
 *
 * 1. APPLICATION
 * 2. BLUEPRINT API
 * 3. COMMAND-LINE INTERFACE
 * 4. CONFIGURATION
 * 5. REQUEST
 * 6. RESPONSE
 * 7. WATERLINE ORM
 * 8. WEBSOCKETS
 ********************************************************************************************/

/********************************************************************************************
 * 1. APPLICATION
 * https://sailsjs.com/documentation/reference/application
 ********************************************************************************************/

// A dictionary of all loaded Sails models, indexed by their identity.
sails.models;

// A dictionary of all accessible helpers, including organics.
sails.helpers;

// A dictionary of all loaded Sails hooks, indexed by their identity.
sails.hooks;

// The full set of configuration options for the Sails instance
sails.config;

// The runtime values of your app's custom configuration settings.
sails.config.custom;

// A set of convenience methods for low - level interaction with connected websockets.
sails.sockets;

// Talk to Socket.io directly.
sails.io;

// A regular expression designed for use in identifying URL paths that seem like they are probably
// for a static asset of some kind (e.g. image, stylesheet, favicon.ico, robots.txt, etc).
sails.LOOKS_LIKE_ASSET_RX;

// Return a dictionary of Sails actions.
sails.getActions();

// Look up the first route pointing at the specified target (e.g. MeController.login)
// and return a dictionary containing its method and URL.
sails.getRouteFor(target);

// Look up the first route pointing at the specified target (e.g. entrance/view-login)
// and return its URL.
sails.getUrlFor(target);

// Lift a Sails app programmatically.
// This does exactly what you might be used to seeing by now when you run sails lift.
sailsApp.lift(configOverrides, function(err) {});

// Load a Sails app into memory-- but without lifting an HTTP server.
// Useful for writing tests, command - line scripts, and scheduled jobs.
sailsApp.load(configOverrides, function(err) {});

// Shut down a lifted Sails app and have it cease listening for / responding to any future requests.
sails.lower(callback);

// Register a new Sails action that can then be bound to a route.
sails.registerAction(action, name);

// Register a new action middleware function that will be applied to actions
// with the specified identities.
sails.registerActionMiddleware(actionMiddlewareFns, actionIdentities);

// Flush and reload all Sails actions.
sails.reloadActions();

// Compile a view into an HTML template.
sails.renderView(pathToView, templateData);

// Make a virtual request to a running Sails instance.
sails.request(request);
sails.request(url, body);
sails.request(url, callback);
sails.request(url, body, callback);

// Access a particular datastore, or the default datastore.
sails.getDatastore(datastoreName);

// Log a message or some data at the "debug" log level using Sails' built-in logger.
sails.log(message);

/********************************************************************************************
 * 2. BLUEPRINT API
 * https://sailsjs.com/documentation/reference/blueprint-api
 ********************************************************************************************/

// Find a list of records that match the specified criteria
// and (if possible) subscribe to each of them.
("GET /:model");

// Look up the record with the specified id from the database
// and (if possible) subscribe to the record to hear about any future changes.
("GET /:model/:id");

// Populate and return foreign record(s) for the given association of this record.
("GET /:model/:id/:association");

// Create a new record in your database
// and notify subscribed sockets that a newly record is created
("POST /:model");

// Update an existing record in the database
// and notify subscribed sockets that it has changed.
("PATCH /:model/:id");

// Replace all of the foreign records in one of this record's collections
// and notify subscribed sockets to the parent record.
("PUT /:model/:id/:association");

// Add a foreign record to one of this record's collections
// and notify subscribed sockets to the parent record.
("PUT /:model/:id/:association/:fk");

// Delete the record specified by id from the database forever
// and notify subscribed sockets that a record has been deleted
("DELETE /:model/:id");

// Remove a foreign record from one of this record's collections
// and notify subscribed sockets about this removed child
("DELETE /:model/:id/:association/:fk");

/********************************************************************************************
 * 3. COMMAND-LINE INTERFACE
 * https://sailsjs.com/documentation/reference/command-line-interface
 ********************************************************************************************/

// Lift your Node.js/Sails.js app in interactive mode, and enter the REPL.
// Useful for trying out Waterline queries, quickly managing your data, and checking
// out your project's runtime configuration.
sails console [--dontLift]

// Generate api/models/Foo.js, including attributes with the specified types if provided.
sails generate model

// Generate a standalone action.
sails generate action

// Generate a helper at api/helpers/foo.js.
sails generate helper

// Generate api/controllers/FooController.js, including actions with the specified names if provided.
sails generate controller

// Generate a project hook in api/hooks/foo/.
sails generate hook

// Generate a foo folder containing the files necessary for building a new generator.
sails generate generator

// Generate a custom response at api/responses/foo.js
sails generate response

// Generate a api/adapters/foo/ folder containing the files necessary for building a new adapter.
sails generate adapter

// Generate a sails.io.js file at the specified location, overwriting the default sails.io.js if applicable.
sails generate sails.io.js

// Generate api/models/Foo.js and api/controllers/FooController.js.
sails generate api	

// Alias for sails new.
sails generate new

// Experimental. Adds the following files to your app:
// .gitignore, .jshintrc, .editorconfig, .npmignore, .travis.yml, .appveyor.yml
sails generate etc

// Attach the node debugger and lift the sails app; similar to running node--inspect app.js.
// You can then use a tool like the Chrome DevTools to interactively debug your apps.
sails inspect

// Run the Sails app in the current dir
// (if node_modules/sails exists, it will be used instead of the globally installed Sails)
sails lift [--prod] [--port <portNum>] [--verbose] [--silly]

// Create a new sails project.
sails new <yourAppName> [--no-frontend] [--minimal] [--without=package,package,package]

// Get the version of your computer's globally installed Sails command-line tool
// (i.e. the version you installed with npm install -g sails).
sails version

/********************************************************************************************
 * 4. CONFIGURATION
 * https://sailsjs.com/documentation/reference/configuration
 ********************************************************************************************/

/********************************************************************************************
 * 5. REQUEST
 * https://sailsjs.com/documentation/reference/request-req
 ********************************************************************************************/

/********************************************************************************************
 * 6. REPONSE
 * https://sailsjs.com/documentation/reference/response-res
 ********************************************************************************************/

/********************************************************************************************
 * 7. WATERLINE ORM
 * https://sailsjs.com/documentation/reference/waterline-orm
 ********************************************************************************************/

/********************************************************************************************
 * 8. WEB SOCKETS
 * https://sailsjs.com/documentation/reference/web-sockets
 ********************************************************************************************/
