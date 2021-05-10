import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuModule, ProgressSpinnerModule } from 'primeng/primeng';

// palmyra-needle-angular-library-import Palmyra will add import angular library module here
import {
  InputTextModule,
  ButtonModule,
  CalendarModule,
  KeyFilterModule,
  CheckboxModule,
  RadioButtonModule,
  SliderModule,
  PasswordModule,
  FileUploadModule,
  ToggleButtonModule,
  PanelModule,
  TabViewModule,
  DropdownModule,
  DialogModule,
  PaginatorModule,
  MultiSelectModule,
  AutoCompleteModule,
  ConfirmDialogModule,
  FieldsetModule,
  SidebarModule,
  SelectButtonModule,
  InputSwitchModule,
  SplitButtonModule,
  InputTextareaModule,
  MessageModule,
  MenubarModule,
  MenuItem,
  PanelMenuModule,
  ContextMenuModule,
  OverlayPanelModule,
  AccordionModule,
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { ChartModule } from 'primeng/chart';
import { LoadingComponent } from './loading/loading.component';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  imports: [
    CommonModule, ProgressSpinnerModule
  ], exports: [InputTextModule, ButtonModule, CalendarModule, KeyFilterModule,
    CheckboxModule, RadioButtonModule, SliderModule, PasswordModule, FileUploadModule,
    ToggleButtonModule, PanelModule, TabViewModule, DropdownModule, DialogModule, PaginatorModule,
    MultiSelectModule, TableModule, SidebarModule, AutoCompleteModule, FieldsetModule, SplitButtonModule,
    ConfirmDialogModule, GrowlModule, SelectButtonModule, InputSwitchModule, InputTextareaModule,
    MessageModule, MenubarModule, PanelMenuModule, ChartModule, ContextMenuModule,
    OverlayPanelModule, AccordionModule, ProgressSpinnerModule, LoadingComponent, ToastModule, ToolbarModule],
  declarations: [LoadingComponent]
})
export class SharedModule { }
