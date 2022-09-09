# blue-sky-demo

demo website made for blue sky bakery, Lexington VA.

Uses express backend, react frontend, basic CSS, and a service called GloriaFood to make online ordering and payment easy to configure. This app was created without using Create React App, all webpack configuration was done manually.

The site itself is a simple one-page react app with CSS styles. It includes an HTML snippet found in the "buttons" div
(src/index.html) which links to the GloriaFood API, retrieving the menu/reservation options associated with the restaurant profile. Because this is just a demo, the buttons lead to "demo restaurant" with limited options, but changing things such as adding a new item to the menu is as simple as logging in to the GloriaFood dashboard and updating the details/configuration.

It is also integrated with google maps. The live demo @ - https://blue-sky-demo.herokuapp.com - does not have the map active, it says "for development purposes only". This is because the Google Maps Api key is not visible to the app. Heroku supports environemnt variables, but Ive tried to add the Api key many times and it still fails to work. I've looked around for a fix for this problem, but was unable to find anything. 

# use

to start the app: run npm start, or npm run serve.
(you will have to add GOOGLE_MAPS_API_KEY=<your-api-key> to .env for the map to work)

Start will serve the app from the /dist folder using Express on localhost:3030. you will need to rebuild the app with npm run build and restart to see changes you make to the site. 

Serve will serve the app using the webpack live reload server. This means you don't have to rebuild the app every time, it will reload automatically when changes are saved. 