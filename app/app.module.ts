import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from "@angular/forms";
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { LoadingGifComponent } from './loading-gif/loading-gif.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoryGenComponent } from './story-gen/story-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    LoadingGifComponent,
    HomeComponent,
    NavBarComponent,
    StoryGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule ,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,    
    MatCardModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSnackBarModule,MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
