# A "kitchen sink" demonstration of `local-compose`
This repository shows the experience that a new developer will have when starting work on a project.  This is a "kitchen sink" demonstration, meaning it will run all 6 supported frameworks at once:
* react
* express
* django
* flask
* rails
* sinatra

To see the demo:
1. Install `local-compose`, follow the directions for your platform at: https://local-compose.clerk.dev
2. `git clone https://github.com/clerkinc/kitchen-sink.git`
3. `cd kitchen-sink`
4. `local-compose start` (This will take a few minutes as it installs new, isolated versions of postgres, javascript, ruby, and python.)
5. Navigate to http://localhost:3000

If the demo works correctly, you should see a React intro page with 5 iframes below, one for each backend framework.  For Rails and Django you should see the Rails and Django start pages.  For express, flask, and sinatra you should see a short statement listing the postgres version, which serves as evidence you succesfully connected to postgres.

If the demo fails at any point, please submit an issue here or in the `local-compose` repository: https://github.com/clerkinc/local-compose

## Docker compatibility

`local-compose` provides an easy off-ramp to docker, in case we ever fail to meet your needs.  To see this demo:
1. `local-compose gen docker`
2. `docker-compose up` (This will take a few minutes as it creates fresh docker images)
3. Navigate to http://localhost:3000

If the demo works correctly, this page should look identical to when you ran it with `local-compose`, with the small exception that postgres may switch versions to the one for Docker's platform instead of your own platform.
