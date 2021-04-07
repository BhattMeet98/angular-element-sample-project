import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'AngularElementSampleWebPartStrings';

import 'angular-element-sample/dist/AngularElementSample/bundle.js';

export interface IAngularElementSampleWebPartProps {
  description: string;
}

export default class AngularElementSampleWebPart extends BaseClientSideWebPart<IAngularElementSampleWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-angular-element-sample-web-part description="${ this.properties.description }"></app-angular-element-sample-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
