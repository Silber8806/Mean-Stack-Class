import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Main component...
import { AppComponent } from './app.component';

// Header for the page, typically a navbar
import { HeaderComponent } from './header/header.component';

// Footer for the page
import { FooterComponent } from './footer/footer.component';

// Main content of the page
import { CanvasComponent } from './canvas/canvas.component';

// Sidebar containing a disabled user form.
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CanvasComponent,
    SidebarComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
