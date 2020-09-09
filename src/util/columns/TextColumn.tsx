import React from 'react';

import { ColumnTableProperties } from './base/ColumnTableProperties';
import TableColumnAbstract from './base/TableColumnAbstract';
import { TextFormat } from 'data/lang/text/TextType';
import TextTitle from 'ui/Title/TextTitle';
import TitleWapped from 'ui/Title/TitleWapped';

export interface TextColumnProperties<T> {
  props?: ColumnTableProperties;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getLink?: (data: T) => string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick?: (data: T) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTitle: (data: T) => TextFormat;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getRender?: (data: T) => string | JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getActions?: (data: T) => React.ReactNode[];
}
export default class TextColumn<T> implements TableColumnAbstract {
  public readonly column: ColumnTableProperties;

  public constructor(properties: TextColumnProperties<T>) {
    const {
      getLink,
      onClick,
      props,
      getTitle,
      getRender,
      getActions = () => [],
    } = properties;

    let render = getRender;

    if (!getRender) {
      // eslint-disable-next-line no-param-reassign
      render = (data: T) => {
        const title = <TextTitle text={getTitle(data)} />;
        const url = getLink ? getLink(data) : undefined;
        const actions = getActions(data);
        const click = onClick ? () => onClick(data) : undefined;
        return (
          <TitleWapped
            title={title}
            actions={actions}
            url={url}
            onClick={click}
          />
        );
      };
    }

    this.column = {
      key: 'text',
      sorter: true,
      title: 'Text',
      render,
      order: {
        column: 'lang.vtext.text',
        getValue: (data: T) => getTitle(data).text,
      },
      ...props,
    };
  }
}
