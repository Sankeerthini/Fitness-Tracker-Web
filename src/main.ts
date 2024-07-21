import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { appRoutes } from './app/app-routing.module';
import { RouterModule } from '@angular/router'; // Import RouterModule

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule, FormsModule, RouterModule) // Ensure RouterModule is imported here
  ]
}).catch(err => console.error(err));
