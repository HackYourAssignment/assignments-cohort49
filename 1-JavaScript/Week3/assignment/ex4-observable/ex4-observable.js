'use strict';

function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      return subscribers.push(subscriber);
    },
    notify: function (message) {
      for (const subscriber of subscribers) {
        subscriber(message);
      }
    },
  };
}

module.exports = createObservable;
