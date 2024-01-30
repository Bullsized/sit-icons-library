# IconsLibrary

## Prerequisites
- Node.JS [v18.18.0](https://nodejs.org/en/blog/release/v18.18.0);
- NPM [v9.6.7](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);
- Angular CLI version [17.1.0](https://github.com/angular/angular-cli).

## Run
Make sure you run `npm i` in the root directory first. Afterwards, run `ng serve --open` for a dev server, which will navigate to `http://localhost:4200/` (if you do not have any other Angular projects served at the time). The application will automatically reload if you change any of the source files.

## Project walk-through
All components are prefixed with `sit` (for Schwarz IT). The favicon is also the logo of the company.

There are two services:
- `IconsService`, which mocks the obtaining of the icons (the mocked file is called `all-icons.ts`);
- `DownloadService`, which is used to download a particular icon.

Additionally, there is a `helpers.ts` file that serves as helper functions for the project. In it, you can find a icon name transformation and a random index generator.

In the `models` folder you can find the interfaces, types, etc model types used in the project.

In the `assets` folder you can find all of the icons that the task came with. They are whitelisted in the `angular.json` file as well.

In the `styles` folder you can find the main colors used in the project under the `variables.scss` file.

The essential part of the project is the `icons` module. In it, you can find the following components:
- `IconWrapperComponent` - a component that is used as a general frame. It gets the icons, hosts the search input and delegates necessary icons to other components;
- `IconListComponent` - this component takes care of all the icons' listing. If any of the icons is clicked, it will open up a dialog;
- `IconDialogComponent` - the before mentioned dialog. This component shows the icon in a large dimensions and can either be used to copy the icon's name or download it. Upon any of the two actions, the dialog is then closed;
- `IconRandomComponent` - this one is on me. I've built up an extra button component that boots up the dialog with a random icon from the list. I just wanted to show the dedication I have when applying to your company.

## Contact
You can always reach me either on my [mail](mailto:ivanstefanovbg@gmail.com) or my [LinkedIn](https://www.linkedin.com/in/bullsized/).


> Written with [StackEdit](https://stackedit.io/).
