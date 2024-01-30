import { Injectable } from '@angular/core';
import { Icon } from '../models/Icon';
import { allIcons } from './all-icons';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  getAllIcons(): Icon[] {
    return allIcons;
  }
}
