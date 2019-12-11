import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material'
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from '../app/shared/user/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { from } from 'rxjs';
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
