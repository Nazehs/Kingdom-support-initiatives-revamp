import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostDetailComponent } from './single-post-detail/single-post-detail.component';
import { BlogComponent } from './blog/blog.component';
import { paginationService } from './providers/pagination.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    AllPostsComponent,
    SinglePostDetailComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatIconRegistry,
    // MatIconModule,
    ScrollToModule.forRoot(),
    // MatInputModule

    
  ],
  providers: [HttpClientModule,paginationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
