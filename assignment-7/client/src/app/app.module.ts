import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

// Task representing task in the Canvas component
import { TaskComponent } from './task/task.component';

// Home page
import { PageHomeComponent } from './page-home/page-home.component';

// Task Detail page
import { PageDetailsComponent } from './page-details/page-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Two routes present: home page found at / and tasks found at /tasks/[id]
const routes:Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'tasks/:id', component: PageDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CanvasComponent,
    SidebarComponent,
    TaskComponent,
    PageHomeComponent,
    PageDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
