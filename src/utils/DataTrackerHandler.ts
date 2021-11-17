import {
  appendToGlobalContextFunction,
  getGlobalContextFunction,
  setGlobalContextFunction,
  triggerCustomActionFunction,
  setUserFunction,
  unsetUserFunction
} from "../interfaces/DataTrackerHandlerInterfaces";

import { datadogRum } from "@datadog/browser-rum";

const {
  onReady,
  init,
  addAction,
  getRumGlobalContext,
  setRumGlobalContext,
  addRumGlobalContext,
  setUser,
  removeUser
} = datadogRum;

export const initDataTracker = ( ):void => {
  onReady(() => {
    init({
      applicationId: process.env.REACT_APP_DD_RUM_APPLICATION_ID,
      clientToken: process.env.REACT_APP_DD_RUM_CLIENT_TOKEN,
      site: 'datadoghq.com',
      service: 'frontend-app',
      env: process.env.NODE_ENV,
      version: '1.0.0',
      sampleRate: 100,
      trackInteractions: true
    });
  });
};

export const triggerCustomAction:triggerCustomActionFunction = (name, data) => addAction(name, data);

export const getGlobalContext:getGlobalContextFunction = () => getRumGlobalContext();

export const setGlobalContext:setGlobalContextFunction = data => setRumGlobalContext(data);

export const appendToGlobalContext:appendToGlobalContextFunction = (name, data) => addRumGlobalContext(name, data);

export const setUserData:setUserFunction = data => setUser(data);

export const unsetUserData:unsetUserFunction = () => removeUser();
