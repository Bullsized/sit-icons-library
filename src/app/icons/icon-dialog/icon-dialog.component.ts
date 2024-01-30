import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconDialogData } from '../../core/models/Icon';
import { transformIconName } from '../../core/helpers/helpers';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadService } from '../../core/services/download.service';

@Component({
  selector: 'sit-icon-dialog',
  templateUrl: './icon-dialog.component.html',
  styleUrl: './icon-dialog.component.scss',
})
export class IconDialogComponent implements OnInit {
  transformedIconName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IconDialogData,
    private dialogRef: MatDialogRef<IconDialogComponent>,
    private snackBar: MatSnackBar,
    private clipboard: Clipboard,
    private downloadService: DownloadService
  ) {}

  ngOnInit(): void {
    this.transformedIconName = transformIconName(this.data.icon.name);
  }

  copyToClipboard(): void {
    this.clipboard.copy(this.transformedIconName);
    this.dialogRef.close();
    this.snackBar.open('Icon name copied to clipboard!', undefined, { duration: 3000 });
  }

  downloadIcon(): void {
    this.downloadService.downloadIcon(this.data.icon);
    this.dialogRef.close();
    this.snackBar.open('Icon download initiated!', undefined, { duration: 3000 });
  }
}
