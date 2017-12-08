import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';
import { Cp3Component } from './cp3/cp3.component';
import { Cp4Component } from './cp4/cp4.component';
import { Cp5Component } from './cp5/cp5.component';

const appRoutes = [
  { path: '',
    redirectTo: 'spa1',
    pathMatch: 'full'
  },
  { path: 'spa1',
    component: Cp1Component
  },
  { path: 'spa2',
  component: Cp2Component
  },
  { path: 'spa3',
  component: Cp3Component
  },
  { path: 'spa4',
  component: Cp4Component
  },
  { path: 'spa5',
  component: Cp5Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Cp1Component,
    Cp2Component,
    Cp3Component,
    Cp4Component,
    Cp5Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
