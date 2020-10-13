import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule, MatDialogModule,
    MatToolbarModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatExpansionModule, MatStepperModule,
    MatChipsModule, MatBadgeModule, MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatTabsModule,
    MatTreeModule, MatProgressBarModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule, MatDialogModule,
    MatToolbarModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatExpansionModule, MatStepperModule,
    MatChipsModule, MatBadgeModule, MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatTabsModule,
    MatTreeModule, MatProgressBarModule
  ],
  providers: [],
})
export class SharedModule {
}
