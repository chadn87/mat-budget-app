import { NgModule } from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {MatAutocompleteModule,
MatBadgeModule,
MatBottomSheetModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatChipsModule,
MatStepperModule,
MatDatepickerModule,
MatDialogModule,
MatDividerModule,
MatExpansionModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatNativeDateModule, 
MatRippleModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRadioModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
MatTreeModule,
MatTooltipModule} from '@angular/material';

const materialModules =[
  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  PortalModule,
  ScrollingModule
]


@NgModule({
  exports:[
    materialModules,
    A11yModule,
DragDropModule,
PortalModule,
ScrollingModule,
CdkStepperModule,
CdkTableModule,
CdkTreeModule
  ]
})
export class AppMaterialModule { }
