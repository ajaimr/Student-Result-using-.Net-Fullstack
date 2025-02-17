import { Routes } from '@angular/router';
import { MainComponent } from './home-page/main/main.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';

export const routes: Routes = [
    {
        path:'', component:MainComponent
    },
    {
        path:'studenthome/:id', component:StudentHomeComponent
    },
    {
        path:'edit/:id', component:AddStudentComponent
    },
    {
        path:'student', component:StudentLoginComponent
    },
    {
        path:'admin', component:AdminLoginComponent
    },
    {
        path:'view', component:ViewStudentComponent
    },
    {
        path:'add', component:AddStudentComponent
    }
];
