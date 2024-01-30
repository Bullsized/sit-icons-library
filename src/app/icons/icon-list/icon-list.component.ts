import { Component, Input } from '@angular/core';
import { Icon, IconDialogData } from '../../core/models/Icon';
import { Category } from '../../core/models/Category';
import { MatDialog } from '@angular/material/dialog';
import { IconDialogComponent } from '../icon-dialog/icon-dialog.component';

@Component({
  selector: 'sit-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrl: './icon-list.component.scss',
})
export class IconListComponent {
  @Input() icons: Icon[] = [];
  @Input() iconCategory: Category | undefined;

  constructor(private dialog: MatDialog) {}

  onIconClick(icon: Icon): void {
    this.dialog.open(IconDialogComponent, {
      autoFocus: false,
      width: '600px',
      data: { icon: icon } as IconDialogData,
    });
  }
}
