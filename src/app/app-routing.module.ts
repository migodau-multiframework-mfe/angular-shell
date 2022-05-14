import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular1',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      // remoteName: 'angular1',
      exposedModule: './web-components',
      elementName: 'angular1-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'react1',
    component: WebComponentWrapper,
    data: {
        remoteEntry: 'http://localhost:5001/remoteEntry.js',
        remoteName: 'react1',
        exposedModule: './web-components',

        elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
