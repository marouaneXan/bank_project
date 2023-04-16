import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// disable access to devTools
// document.onkeydown = (e: any) => {
//   if (e.key == 123) {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key == 'I') {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key == 'C') {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.shiftKey && e.key == 'J') {
//     e.preventDefault();
//   }
//   if (e.ctrlKey && e.key == 'U') {
//     e.preventDefault();
//   }
// };
