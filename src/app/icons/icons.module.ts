import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDialogComponent } from './icon-dialog/icon-dialog.component';
import { IconWrapperComponent } from './icon-wrapper/icon-wrapper.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconRandomComponent } from './icon-random/icon-random.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    IconDialogComponent,
    IconWrapperComponent,
    IconListComponent,
    IconRandomComponent,
  ],
  exports: [IconWrapperComponent],
  imports: [CommonModule, MatFormField, MatInputModule, ReactiveFormsModule],
})
export class IconsModule {}
