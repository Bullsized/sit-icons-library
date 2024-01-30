import { Component, Input } from '@angular/core';
import { Icon, IconDialogData } from '../../core/models/Icon';
import { getRandomIndex } from '../../core/helpers/helpers';
import { MatDialog } from '@angular/material/dialog';
import { IconDialogComponent } from '../icon-dialog/icon-dialog.component';

@Component({
  selector: 'sit-icon-random',
  templateUrl: './icon-random.component.html',
  styleUrl: './icon-random.component.scss',
})
export class IconRandomComponent {
  @Input() allIcons: Icon[] = [];

  constructor(private dialog: MatDialog) {}

  onFeelingLucky(): void {
    const randomIconIndex: number | undefined = getRandomIndex(this.allIcons);

    if (randomIconIndex) {
      this.dialog.open(IconDialogComponent, {
        autoFocus: false,
        width: '600px',
        data: { icon: this.allIcons[randomIconIndex] } as IconDialogData,
      });
    }
  }
}
