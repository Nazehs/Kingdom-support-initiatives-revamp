import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { BlogComponent } from './blog/blog.component';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostDetailComponent } from './single-post-detail/single-post-detail.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
// import { AllPostComponent } from './all-post/all-post.component';
// import { AllPostsComponent } from './all-posts/all-posts.component';
// import { SinglePostDetailComponent } from './single-post-detail/single-post-detail.component';


const routes: Routes = [
  { path: "", redirectTo: '/', pathMatch:'full' },
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "", component:HomeComponent },
  { path: "single-post/:postid", component: SinglePostDetailComponent },
  { path: "list-of-all-posts", component: AllPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
