'use strict';
const k8sApi = require('../kube/api');
const clipboardy = require('clipboardy');

const actions = [
  {
    key: 'd',
    description: 'Delete',
    needsConfirmation: true
  },
  {
    key: 'c',
    description: 'Copy'
  }
];

const executeAction = (key, name, namespace) => {
  if (key.name == 'd') {
    k8sApi
      .deleteNamespacedPod(name, namespace)
      //TODO: show the error somewhere
      .catch(() => {});
  } else if (key.name == 'c') {
    clipboardy.writeSync(name);
  }
};

module.exports = {
  actions,
  executeAction
};
