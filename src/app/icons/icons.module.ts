import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDialogComponent } from './icon-dialog/icon-dialog.component';
import { IconWrapperComponent } from './icon-wrapper/icon-wrapper.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconRandomComponent } from './icon-random/icon-random.component';

@NgModule({
  declarations: [
    IconDialogComponent,
    IconWrapperComponent,
    IconListComponent,
    IconRandomComponent,
  ],
  exports: [IconWrapperComponent],
  imports: [CommonModule],
})
export class IconsModule {}
