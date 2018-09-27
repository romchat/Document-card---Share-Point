import * as React from 'react';
import styles from './DocumentCardExample.module.scss';
import { IDocumentCardExampleProps } from './IDocumentCardExampleProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps,
} from 'office-ui-fabric-react/lib/DocumentCard';
import {
  TextField
} from 'office-ui-fabric-react/lib';

export default class DocumentCardExample extends React.Component<IDocumentCardExampleProps, {}> {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: String(require('./document-preview.png')),
          iconSrc: String(require('./icon-ppt.png')),
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };

    return (
      <div>
        <TextField />
        <DocumentCard onClickHref='http://bing.com'>
          <DocumentCardPreview {...previewProps} />
          <DocumentCardTitle title='Revenue....' />
          <DocumentCardActivity
          activity='Create Today'
          people={
            [
              { name: 'Pewww', profileImageSrc: String(require('./avatar-kat.png'))}
            ]
          }
          />
        </DocumentCard>
      </div>
    );
  }
}
