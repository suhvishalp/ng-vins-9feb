import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {

    }

    transform(value: string, length: number= 150) {
        console.log('length = ' + length);
        const link = this.sanitizer.bypassSecurityTrustHtml('<a href=\'#\'>...more</a>');
        if (value.length >= length) {
            return  this.stylize(link);
        }

        return value;
    }

    private stylize(text): string {
        let stylizedText = '';
        if (text && text.length > 0) {
          for (const t of text.split(' ')) {
            if (t.startsWith('@') && t.length > 1) {
              stylizedText += `<a href="#${t.substring(1)}">${t}</a> `;
            } else {
              stylizedText += t + ' ';
            }
          }
          return stylizedText;
        } else { return text; }
      }
}
