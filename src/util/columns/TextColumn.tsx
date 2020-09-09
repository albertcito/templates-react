import React from 'react';

import { ColumnTableProperties } from './ColumnTableProperties';
import TableColumnAbstract from './TableColumnAbstract';
import { TextFormat } from 'data/lang/text/TextType';
import TextTitle from 'ui/Title/TextTitle';
import TitleWapped from 'ui/Title/TitleWapped';

export type TGetLink = (data: any) => string;
export type TOnClick = (data: any) => void;
export interface TextColumnProperties {
  props?: ColumnTableProperties;
  getLink?: TGetLink;
  onClick?: TOnClick;
  getTitle?: (data: any) => TextFormat;
  getRender?: (data: any) => string | JSX.Element;
  getActions?: (data: any) => React.ReactNode[];
}
export default class TextColumn implements TableColumnAbstract {
  public readonly column: ColumnTableProperties;

  public constructor(properties?: TextColumnProperties) {
    const {
      getLink,
      onClick,
      props,
      getTitle = (data: any) => data.text,
      getRender,
      getActions = () => [],
    } = properties ?? {};

    let getRender2 = getRender;

    if (!getRender) {
      // eslint-disable-next-line no-param-reassign
      getRender2 = (data: any) => {
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
      render: getRender2,
      order: {
        column: 'lang.vtext.text',
        getValue: (data: any) => getTitle(data).text,
      },
      ...props,
    };
  }
}
