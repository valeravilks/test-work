# Dreamers of Day WordPress Boilerplate

> Make WordPress theme development great again.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Developing Locally](#developing-locally)
- [Building for Production](#building-for-production)
- [Changing ports](#changing-ports)
- [Project Structure](#project-structure)
- [Local Database Backup](#local-database-backup)
- [Local Database Restore](#local-database-restore)
- [Author](#author)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- Modern JavaScript (ES6) through Webpack
- Live reload via BrowserSync
- SCSS support
- Easy dev environments with Docker Compose
- Stateless, immutable plugin management via Composer
- Helpful HTML5 Router for firing JS based on WordPress page slug.
- Nothing else
- "Atomic design" component structure
- Large number of default components (from buttons to sections)

## Requirements

- Node.js
- Yarn
- PHP and Composer
- Docker for Mac / Windows
- Docker Compose

## Getting Started Part 1

```bash
$ git clone the project
$ yarn install
$ docker-compose up

Optional: Enable debug mode in Docker:
$ apt-get update
$ apt-get install vim
$ cd /var/www/html/
$ vim wp-config.php

When open click “i” to run insert mode, then navigate to WP_DEBUG option and make it true. When finish click ESC and :wq to save and exit.

$ exit;
```

## Getting Started Part 2

- On the Wordpress installing page. Click "install WordPress" and fill in the required information. 
- Open the wp-admin dashboard and go into permalinks and update it with one of options and save. Then update it back to the right option.
- go to "Plugins" section and uninstall "Timber" plugin and install then activate it again. Activate the another "Timber Debug Bar" plugin then activate "Advanced Custom Fields PRO" and "Advanced Custom Fields: Options Page".
- Activate the "WP Migrate DB" plugin.
- Go to "Appearance->Themes" and activate the correct theme.
- Go to "Tools->Migrate DB". In "Settings" tab filled the information from staging website, click on "Accept Push" and "Accept Pull" checkbox, then fill the "Connection Info" field. Then go to "Migrate" tab and choose "Pull" option.
- After that you'll choose or it will do automatically and connect to staging server. Then click on "Media Files" and "Save Migration Profile" checkbox and click on "Migrate DB & Save" button.
- go again into "Appearance->Themes" section and choose again project name based theme.
- visit the site and you are done.

## Other things to do (not in any particular order)
- Ensuring PERMALINKS are set to "custom"
- Ensuring the homepage is set (reading settings)
- Setting the default editor
- Ensuring ALL post types are allowed to re-order (plugin settings)
- Ensuring ALL post types are allowed to be duplicated (plugin settings)
- Ensuring important post types use Admin Columns Pro features

## Other things to do IF you are the first one to setup this project
- In docker-compose, change "dodwpstarterkit" to something else for the container, DB and PHPmyadmin name
- In this README.md, change "dodwpstarterkit" to something else (whatever you decided in the step above)  
- Set client abbrevation in "config/default.json". Plop will use this

## Developing Locally

To work on the theme locally, open another window/tab in terminal and run:

```bash
yarn start
```

This will open a browser, watch all files (php, scss, js, etc) and reload the
browser when you press save.

## Building for Production

To create an optimized production build, run:

```bash
yarn build
```

This will minify assets, bundle and uglify javascript, and compile scss to css.
It will also add cachebusting names to then ends of the compiled files, so you
do not need to bump any enqueued asset versions in `functions.php`.

## Changing ports

There are two ports involved, the port of the dockerized WordPress instance,
and the port the Browser Sync runs on. To change the port of the dockerized
WordPress instance go into [`docker-compose.yml`](docker-compose.yml#L25) and
modify `ports`.

```yml
# docker-compose.yml
 ...
  ports:
    - "9009:80" # only need to change `9009:80` --> localhost:9009
 ...
```

If you want to change the port you develop on (the default is 4000), then open
[`scripts/webpack.config.js`](scripts/webpack.config.js#L119) and modify
`BrowserSyncPlugin`'s `port` option. If you changed the WordPress port above,
be sure to also change `proxy` accordingly. Don't forget the trailing slash.

```js
// scripts/webpack.config.js
...
new BrowserSyncPlugin({
  notify: false,
  host: 'localhost',
  port: 4000, // this is the port you develop on. Can be anything.
  logLevel: 'silent',
  files: ['./*.php'],
  proxy: 'http://localhost:9009/', // This port must match docker-compose.yml
}),
...
```

## Project Structure

```bash
.
├── composer.json                # Compose dependencies (plugins)
├── composer.lock                # Composer lock file
├── docker-compose.yml           # Docker Compose configuration
├── footer.php
├── functions.php
├── header.php
├── index.php
├── package.json                 # Node.js dependencies
├── page.php
├── scripts                      # Build / Dev Scripts
│   ├── build.js                 # Build task
│   ├── start.js                 # Start task
│   └── webpack.config.js        # Webpack configuration
└──src
    ├── scripts.js               # JavaScript entry point
    ├── routes                   # Routes
    │   ├── common.js            # JS that will run on EVERY page
    │   └── <xxx>.js             # JS that will run on pages with <xxx> slug
    ├── style.tokens               # SCSS style entry point
    ├── styles                   # SCSS
    │   ├── _global-vars.tokens
    │   ├── _base.tokens
    │   └── ...
    └── util
        ├── Router.js            # HTML5 Router, DO NOT TOUCH
        └── camelCase.js         # Helper function for Router, DO NOT TOUCH
```

## Local Database Backup

Here's how to dump your local database with Docker into a `.sql` file

```
docker exec db_i360 /usr/bin/mysqldump -u wordpress --no-tablespaces --password=wordpress wordpress > backup.sql
```

## Local Database Restore

Restore a previous database backup

```
cat backup.sql | docker exec -i db_i360 /usr/bin/mysql -u wordpress --password=wordpress wordpress
```

## Author

- Dreamers of Day development team


### Docker Compose

```
# To start/restart your containers
$ docker-compose up

# To start/restart your containers in background
$ docker-compose up -d

# To stop all containers
$ docker-compose stop

# To stop and remove all containers
$ sudo docker-compose down

# To remove all stoped containers
$ docker-compose rm --all

# To connect you into wordpress container
$ docker-compose exec wordpress_i360 /bin/bash

# To connect you into mysql container
$ docker-compose exec mydb.mysql.db /bin/bash

#kill all running containers
$ docker kill $(docker ps -q)

# To make a backup of the database
docker exec db_i360 /usr/bin/mysqldump --no-tablespaces  -u wordpress --password=wordpress wordpress > backup.sql

# To restore the database
cat backup.sql | docker exec -i db_i360 /usr/bin/mysql -u wordpress --password=wordpress wordpress


Before starting the installation install these softwares:
Docker, Node.js, Yarn, Composer
```
