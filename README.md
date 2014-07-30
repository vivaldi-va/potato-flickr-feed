# Setting up
Requires npm and bower for installing the pre-requisite scripts,
run `npm install && bower install` in the root directory.

# Building
Build the application using grunt (`grunt build`) in the root directory.
Production code will appear under dist/ directory.

# Testing
Testing was intended be implemented with Protractor, but I haven't had the time
to properly read up on the web-drivers and the selenium server.

# Running
Run the application through Grunt, with `grunt serve`
alternatively set the target to 'dist' to run the production version (`grunt serve:dist`)
