import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../core/services/icons.service';
import { Icon } from '../../core/models/Icon';
import { Category } from '../../core/models/Category';

@Component({
  selector: 'sit-icon-wrapper',
  templateUrl: './icon-wrapper.component.html',
  styleUrl: './icon-wrapper.component.scss',
})
export class IconWrapperComponent implements OnInit {
  allIcons: Icon[] = [];
  uniqueCategories: Category[] = [];

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.allIcons = this.iconsService.getAllIcons();
    this.uniqueCategories = [
      ...new Set(this.allIcons.map((icon) => icon.category)),
    ] as Category[];

    console.log(this.allIcons);
    console.log(this.uniqueCategories);
  }
}
