import { Component, OnInit } from '@angular/core';
import { IconsService } from '../../core/services/icons.service';
import { Icon } from '../../core/models/Icon';
import { Category } from '../../core/models/Category';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'sit-icon-wrapper',
  templateUrl: './icon-wrapper.component.html',
  styleUrl: './icon-wrapper.component.scss',
})
export class IconWrapperComponent implements OnInit {
  allIcons: Icon[] = [];
  filteredIcons: Icon[] = [];
  uniqueCategories: Category[] = [];
  searchFC: FormControl<string | null> = new FormControl<string | null>(null);

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.allIcons = this.iconsService.getAllIcons();
    this.filteredIcons = this.allIcons;
    this.uniqueCategories = [...new Set(this.allIcons.map((icon) => icon.category))] as Category[];

    this.searchFC.valueChanges.pipe(debounceTime(500)).subscribe((searchValue) => {
      if (searchValue === null) return;

      this.filterIconsOnInput(searchValue);
    });
  }

  filterIconsOnInput(keyword: string): void {
    this.filteredIcons = this.allIcons.filter((icon) =>
      icon.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
    );
  }

  checkIfCategoryHasIcons(uniqueCategory: Category): boolean {
    return this.filteredIcons.some((icon) => icon.category === uniqueCategory);
  }
}
