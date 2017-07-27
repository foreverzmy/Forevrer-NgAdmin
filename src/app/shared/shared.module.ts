import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';

import { LoginComponent } from './login/login.component';

// import { AuthService } from '../../service/auth.service';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    // AuthService,
  ],
  exports: []
})

export class SharedModule { }
