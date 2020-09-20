import { deepClone } from './deep-clone.js';


window.onerror = function (message, url, lineNumber, columnNumber, error) {

  logger.push({
    message,
    error,
  });

  return false;
};

export const logger = {
  _logs: [],
  get logs() {
    return deepClone(this._logs);
  },
  push: function (logEntry) {
    const entryCopy = deepClone(logEntry);
    this._logs.push(entryCopy);
  }
};
