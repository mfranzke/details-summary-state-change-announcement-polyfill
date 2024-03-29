# details/summary HTML tags state change announcement polyfill

(Discontinued):
As the main reason preventing an accessible usage of `details` and `summary` elements as analyzed and described in https://www.hassellinclusion.com/blog/accessible-accordions-part-2-using-details-summary/ has been fixed (compare to https://github.com/nvaccess/nvda/issues/8631), this polyfill is most likely not necessary any more (especially as it didn't came to a fully working product so far anyhow).

_Work in progress_

As the issue has been solved mainly by mozilla fixing a missing event in Firefox, this polyfill doesn't seem to be necessary any more: https://github.com/nvaccess/nvda/issues/8631

[![MIT license](https://img.shields.io/npm/l/details-summary-state-change-announcement-polyfill.svg "license badge")](https://opensource.org/licenses/mit-license.php)
[![details-summary-state-change-announcement-polyfill on Npmjs](https://img.shields.io/npm/v/details-summary-state-change-announcement-polyfill.svg "npm version")][npm]
[![dependencies Status](https://david-dm.org/mfranzke/details-summary-state-change-announcement-polyfill/status.svg "Count of dependencies")](https://david-dm.org/mfranzke/details-summary-state-change-announcement-polyfill "details summary state change announcement polyfill – on david-dm")
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![Greenkeeper badge](https://badges.greenkeeper.io/mfranzke/details-summary-state-change-announcement-polyfill.svg)](https://greenkeeper.io/)

Lightweight and dependency-free vanilla JavaScript polyfill for the (currently) missing state change announcement for details/summary HTML tags in NVDA.

-  Released under the MIT license
-  Made in Germany

## Features

-  Enriches the standard `details` and `summary` HTML tags to be accessible even when using NVDA

## More information on the NVDA issues

Motivated by the latter article on hassellinclusion.com's blog, I've developed this polyfill to clear out the last remaining blocking aspect of using details/summary HTML elements even also accessibly.

-  https://github.com/nvaccess/nvda/issues/8631
-  https://www.hassellinclusion.com/blog/accessible-accordions-part-2-using-details-summary/

## Core concepts

The polyfill was designed with the following concepts kept in mind:

-  dependency-free
-  Using JavaScript as progressive enhancement

## Installation

Just integrate the JavaScript file into your code - et voilà.

You may optionally load via NPM or Bower:

    $ npm install details-summary-state-change-announcement-polyfill
    $ bower install details-summary-state-change-announcement-polyfill

[//]: # (You could even load the polyfill asynchronously: <https://jsbin.com/yitarajawe/edit?html,css>)

## API

Nothing really, just plug it in, it ~~will~~ should work out of the box.

The plugin sets the `aria-expanded`-attribute on the `summary` HTML tag according to the open state of the `details` HTML tag indicated by its `open`-attribute on user interaction with the `details` HTML tag.

### Changing the open-state via JavaScript

So if you're doing some fancy stuff like changing this attribute programatically via JavaScript, you'll have to change the `aria-expanded`-attribute accordingly yourself. Integrating something like a MutationObserver for this special case doesn't convince me at the moment.

## Demo

See the polyfill in action either by downloading / forking this repo and have a look at `demo/index.html`, or at the hosted demo: <https://mfranzke.github.io/details-summary-state-change-announcement-polyfill/demo/>

## things to keep in mind

- The demo HTML code is meant to be simple

## Outro

If you're trying out and using my work, feel free to contact me and give me any feedback. I'm curious about how it's gonna be used.

[npm]: https://npmjs.com/package/details-summary-state-change-announcement-polyfill 'details/summary state change announcement polyfill – on NPM'
