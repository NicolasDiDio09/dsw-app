import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { ReservePackageComponent } from './reserve-package/reserve-package.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomReserveComponent } from './custom-reserve/custom-reserve.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastInterceptor } from '../shared/toast/toast.interceptor';

@NgModule({
  declarations: [
    ReservePackageComponent,
    CustomReserveComponent,
  ],
  imports: [
    CommonModule,
    PackageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ToastInterceptor, multi: true },
  ],
})
export class PackageModule {}
