import React from 'react';
import { notification } from 'antd';

import { MessageFormat } from 'data/message/type';
import { ErrorCodeFormat } from 'util/dataFormat/globalStateFormat';
import Errors from 'ui/Alert/Errors';

export const notificationMessages = (messages: MessageFormat[]) => {
  messages.forEach((message) => {
    notification[message.type]({
      message: message.message,
      placement: 'bottomRight',
    });
  });
};

export const notificationErrors = (errors: ErrorCodeFormat) => {
  if (errors.errors) {
    notification.error({ message: <Errors errors={errors.errors} /> });
  }
};

export const notificationsRespone = (messages?: MessageFormat[], errors?: ErrorCodeFormat) => {
  if (messages) {
    notificationMessages(messages);
  }
  if (errors) {
    notificationErrors(errors);
  }
};

export const notificationRespone = (message?: MessageFormat, errors?: ErrorCodeFormat) => {
  const messageArray = message ? [message] : undefined;
  notificationsRespone(messageArray, errors);
};
