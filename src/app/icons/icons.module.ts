import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDialogComponent } from './icon-dialog/icon-dialog.component';
import { IconWrapperComponent } from './icon-wrapper/icon-wrapper.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconRandomComponent } from './icon-random/icon-random.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [IconDialogComponent, IconWrapperComponent, IconListComponent, IconRandomComponent],
  exports: [IconWrapperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
})
export class IconsModule {}
