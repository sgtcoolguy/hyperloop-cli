# Hyperloop CLI ∞ [![Build Status](https://travis-ci.org/appcelerator/hyperloop-cli.svg)](https://travis-ci.org/appcelerator/hyperloop-cli)

Hyperloop is a next-generation compiler that converts JavaScript source code into native code for targeting different native OS platforms. 

> **EXPERIMENTAL: DO NOT USE IN PRODUCTION YET.**

This is the command line front-end tool for running Hyperloop.

Check out the other Hyperloop sub-projects:

- [Hyperloop Common](https://github.com/appcelerator/hyperloop-common) - Common library
- [Hyperloop iOS](https://github.com/appcelerator/hyperloop-ios) - iOS backend
- [Hyperloop Java](https://github.com/appcelerator/hyperloop-java) - Java backend
- [Hyperloop Android](https://github.com/appcelerator/hyperloop-android) - Android backend
- [Hyperloop Windows](https://github.com/appcelerator/hyperloop-windows) - Windows backend

To run from this directory, you could use something like to run an iOS app:

```bash
./bin/hyperloop --platform=ios --debug --src=../hyperloop-ios/tests/a library compile package launch --log-level="trace" --arch=i386
```

The above command assumes all 3 projects (hyperloop-cli, hyperloop-common and hyperloop-ios) are at the same directory level.


## Requirements

* [Node.js](http://nodejs.org/) >= 0.10.15

## Documentation & Community

- [Wiki](https://github.com/appcelerator/hyperloop/wiki)
- [Mailing List](https://groups.google.com/forum/#!forum/tinext)

## Reporting Bugs or submitting fixes

If you run into problems, and trust us, there are likely plenty of them at this point -- please create an [Issue](https://github.com/appcelerator/hyperloop-cli/issues) or, even better, send us a pull request. You should also check out the [Mailing List](https://groups.google.com/forum/#!forum/tinext).

## Contributing

Hyperloop is an open source project.  Hyperloop wouldn't be where it is now without contributions by the community. Please consider forking Hyperloop to improve, enhance or fix issues. If you feel like the community will benefit from your fork, please open a pull request.

To protect the interests of the Hyperloop contributors, Appcelerator, customers and end users we require contributors to sign a Contributors License Agreement (CLA) before we pull the changes into the main repository. Our CLA is simple and straightforward - it requires that the contributions you make to any Appcelerator open source project are properly licensed and that you have the legal authority to make those changes. This helps us significantly reduce future legal risk for everyone involved. It is easy, helps everyone, takes only a few minutes, and only needs to be completed once.

[You can digitally sign the CLA](http://bit.ly/app_cla) online. Please indicate your email address in your first pull request so that we can make sure that will locate your CLA.  Once you've submitted it, you no longer need to send one for subsequent submissions.


## Legal

Copyright (c) 2014 by [Appcelerator, Inc](http://www.appcelerator.com). All Rights Reserved.
This code contains patents and/or patents pending by Appcelerator, Inc.
Hyperloop is a trademark of Appcelerator, Inc.
This project is licensed under the Apache Public License, version 2.  Please see details in the LICENSE file.
