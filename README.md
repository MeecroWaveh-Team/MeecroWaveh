# MeecroWaveh

A web-based program that displays a map for BYU-I students that locates microwaves, vending machines, and printers/copy machines. The student can filter between these categories. They can also use GPS to determine where these items are in relation to their location.

## Instructions for Build and Use

Steps to build and/or run the software:

1. Just go to the GitHub Pages website if you want to use it: https://meecrowaveh-team.github.io/MeecroWaveh/
2. If you want a copy of it on your desktop, first open Visual Studio Code in the folder where index.html is contained.
3. Open index.html from the browser on the left-hand side.
4. If you have the "Live Server" extension installed, move your cursor to the bottom-right hand corner of the window and click "Go live". The file will open in your preferred browser. If it isn't installed, you won't see this button. If not, perform the next steps.
5. Open the "Extensions" tab on the left-hand side of the window.
6. In the search bar, type "Live Server" and hit Enter.
7. The first result should simply say "Live Server". Click on it. A new tab should open with information on the extension.
8. In this tab, click "Install". When it is done installing, you should be ready to do step 4.

Instructions for using the software:

1. If this is your first time opening the web application, you will get a prompt to share your location. This is only to show you your GPS location on the map and will not be collected.
2. While looking at the map, if you have shared your location, you will be able to see your position marked by a blue dot surrounded by a blue circle.
3. While inspecting the map, you will be able to see the locations of various buildings found on the BYU-Idaho campus. If you click on the name of one of the buildings, the map will zoom to the center of the building and begin to show you the corresponding indoor view.
4. The map is meant to show you the locations of microwaves, vending machines, and printers within each building. Microwaves are indicated by orange dots, vending machines by blue dots, and printers by green dots. You can select what items you want to see by using a filter right above the map.
5. You can select the different floors in each building to check where an item can be found. Sometimes you may need to serach a specific floor in order to find what you're looking for. If the entire building doesn't have a certain item, it won't be on the map.
6. You can tap on a colored dot to see more information on the item. For example, by tapping on a blue dot, it will tell you that it is a vending machine. Often, it will tell you how to find it and what type of items it sells.
7. Refreshing the page wil reset the map and the filters.

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Visual Studio Code version 1.129.1
* Leaflet 1.9.4
* tailwindcss 4.3.0
* MySQL
* GitHub Desktop 3.6.3 (x64)

## Useful Websites to Learn More

We found these websites useful in developing this software:

* [Tailwind CSS](https://tailwindcss.com/)
* [Leaflet.js](https://leafletjs.com/)
* [MySQL](https://www.mysql.com/)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Allow users to upload pictures of microwaves and other items
* [ ] Allow users to rate and comment on a microwave, including its cleanliness
* [ ] Speak with school admin to make project more official
