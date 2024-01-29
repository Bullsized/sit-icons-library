import { Component, Input } from '@angular/core';
import { Icon } from '../../core/models/Icon';
import { Category } from '../../core/models/Category';

@Component({
  selector: 'sit-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrl: './icon-list.component.scss',
})
export class IconListComponent {
  @Input() icons: Icon[] = [];
  @Input() iconCategory: Category | undefined;
}
