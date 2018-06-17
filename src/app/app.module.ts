import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {TopicServiceClient} from './services/topic.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';
import {FormsModule} from '@angular/forms';
import {UserServiceClient} from './services/user.service.client';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [CourseServiceClient,
              ModuleServiceClient,LessonServiceClient,TopicServiceClient,WidgetServiceClient,UserServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
