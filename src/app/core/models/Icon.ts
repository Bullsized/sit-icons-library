import { Category } from './Category';

export interface Icon {
  name: string;
  category: Category;
  path: string;
  keywords: string[];
}

export interface IconDialogData {
  icon: Icon;
}
