node-red-pareto-anywhere
========================

Prototype event-driven applications with [Pareto Anywhere](https://www.reelyactive.com/pareto/anywhere/) open source IoT middleware in [Node-RED](https://nodered.org/).

![Pareto Anywhere screenshot in Node-RED](https://reelyactive.github.io/node-red-pareto-anywhere/images/socketio-screenshot.png)


Installation
------------

Install __@reelyactive/node-red-pareto-anywhere__ from the [Palette Manager](https://nodered.org/docs/user-guide/editor/palette/manager) in Node-RED.  A __pareto-anywhere-socketio__ node will become available.


Configuration
-------------

In the case where Node-RED and Pareto Anywhere are running locally on the same machine, zero configuration is required: the __pareto-anywhere-socketio__ node will attempt to connect via Socket.IO to a Pareto Anywhere instance running at the default [localhost:3001](http://localhost:3001).

In the case where Pareto Anywhere is running remotely, edit the _URI_ in the __pareto-anywhere-socketio__ node properties (ex: http://192.168.0.123:3001).

![Pareto Anywhere Node-RED configuration](https://reelyactive.github.io/node-red-pareto-anywhere/images/configure-all-devices.png)

Leaving the __id__ field blank will disable filtering, and data from _all_ devices will be available as output.

### Filter on specific device

To filter on a specific device, enter the __id__ of the device as a hexadecimal string and select the __idType__ from the pull-down.

![Pareto Anywhere Node-RED filter on specific device](https://reelyactive.github.io/node-red-pareto-anywhere/images/configure-specific-device.png)

The identifier of a device can often be found printed on the device itself.  Otherwise, lookup the __id__/__idType__ from the [Pareto Anywhere Apps](https://reelyactive.github.io/pareto-anywhere-apps/) and/or APIs.


Data Manipulation
-----------------

The __pareto-anywhere-socketio__ node provides three real-time outputs:
- raddec (RADio DECoding)
- dynamb (DYNamic AMBient data)
- spatem (SPAtial-TEMporal data)

The [raddec](https://github.com/reelyactive/raddec/) and/or spatem stream is typically used for real-time location applications (i.e. who/what is _where?_)

The dynamb stream observes [these standard properties](https://github.com/reelyactive/advlib/#standard-properties) is typically used for timeseries and event-driven applications (i.e. who/what is _how?_)

See the [reelyActive Developer's Cheatsheet](https://reelyactive.github.io/diy/cheatsheet/) to learn "owl" about the __raddec__, __dynamb__ and __spatem__ JSON data structures.


Examples
--------

__node-red-pareto-anywhere__ includes examples which facilitate getting up and running quickly.  Import (<kbd>Ctrl</kbd> + <kbd>i</kbd>) and select Examples, then expand the __@reelyactive/node-red-pareto-anywhere__ folder to choose from the following examples:

![Import Pareto Anywhere examples in Node-RED](https://reelyactive.github.io/node-red-pareto-anywhere/images/import-examples.png)

### Socket.IO Examples

| Example                    | Tutorial | 
|:---------------------------|:---------|
| SocketIO-Hello             | n/a      |
| SocketIO-Espruino-PuckJS   | [Puck.js Development Guide](https://reelyactive.github.io/diy/puckjs-dev/) |
| SocketIO-Minew-MSP01       | [Configure a Minew MSP01 PIR Sensor](https://reelyactive.github.io/diy/minew-msp01-config/) |
| SocketIO-Minew-B10         | [Configure a Minew B10 Wristband](https://reelyactive.github.io/diy/minew-b10-config/) |


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


Security
--------

Consult our [security policy](SECURITY.md) for best practices using this open source software and to report vulnerabilities.


License
-------

MIT License

Copyright (c) 2022-2024 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.