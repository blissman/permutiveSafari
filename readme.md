# Permutive Safari

## Overview

With Safari ITP 2.3, attempting to maintain user segments after a 7-day period becomes significantly more difficult. By using an HTTPonly cookie we'll attempt to provide our DMP with the ability to continue this tracking.

## Pre-Requisites

### Homebrew

Install [Homebrew](https://brew.sh/) if you're on macOS (it'll make the following installs much easier).

### Node.js

You'll need to install [Node.js](https://nodejs.org/en/) (instructions on site). If you're on macOS and have Homebrew installed, you can do this by typing into your terminal:

```bash
$ brew install node
```

### Gulp.js

You'll also need to install [Gulp.js](https://gulpjs.com/).
```bash
$ npm install gulp-cli -g
```

## Install Instructions

1. clone this repo
2. at your terminal, type: `$ npm install`
3. run your default build process with: `$ gulp`

## How It Works

Put your source files in the ```src``` folder. Gulp is set up to run jest tests from the ```test``` folder, do some processing, and output your files to the ```dist``` folder.

### What can I do?

#### Lint

You can lint your js files to make sure there are any syntax errors. You can run just the linter by typing in ```$ gulp lint```, or it's included in the ```default, pretty``` and ```es6``` build processes.

#### Minify

The build process will minify your JavaScript, HTML, css, and images so that your site loads faster. This is included in the ```default, es6, build``` and  ```buildes6``` tasks.

#### Test

You can test your code using [jest](https://jestjs.io). This is inlcuded in the ```default, pretty``` and ```es6``` tasks.

You can also perform test-driven-development (tdd) with the ```$ jest --watch``` task.