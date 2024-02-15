import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icon } from '../models/Icon';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  downloadIcon(icon: Icon): void {
    const svgUrl: string = `/assets/${icon.path}`;

    this.http.get(svgUrl, { responseType: 'arraybuffer' }).subscribe((data: ArrayBuffer) => {
      const blob: Blob = new Blob([data]);
      const url: string = window.URL.createObjectURL(blob);

      // Create a link element and trigger the download
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = url;
      // Customizing the file name to the name of the icon
      link.download = `${icon.name}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  }
}
