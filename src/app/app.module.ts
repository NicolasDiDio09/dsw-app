import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./modules/shared/shared.module";
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { SuperAdminModule } from './modules/super-admin/super-admin.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        UserModule,
        HttpClientModule,
        AdminModule,
        SuperAdminModule
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
export class AppModule {}
