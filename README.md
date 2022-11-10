# Damascus Order App : Front End Single Page Application

## Deployed App

Please find App deployed version URL below:

### https://damascus-app.web.app/

---

## Goal Of The Application

This application allows the user to search all the dishes offered by Damascus Restaurant in 2022 sorted by sections which includes Cold Mezzah, Hot Mezzah, Grill, Salads and Desert.

The user is able to define how many of each dish to be ordered. The total number of items selected is displayed inside the cart buttom at the header (Nav Bar). After navigating through all the sections and finishing the order, the user can click on the cart button mentioned above which will open a cart screen. The cart screen displays all the dishes selected, the amount of each dish, the total cost per dish and the total cost of the order. The user can add or remove item clicking on the + or - button. If an item is clicked till 0 amount, it will disapperar from the list.

If the user wants to go back to the main screen, they can click on the Close button or anywhere out of the card component.

When the user is happy with the order, they can click the Order button which will display the receipt screen. Once the close button is clicked all the amount of dishes selected previously will be reset to the starting point.

---

## Tech

- React JS
- CSS

---

## Intention on Building This Application and Reflections

Personally, I wanted to improve my React skills, so while studying react I faced quite a few react hooks which I hadn't heard of. So this application comes as an outcome of the study of react hooks like useReducer which is syntathically increadibly similar to Redux however its usage comes as an alternative to useState in cases where the states relations are quite complex.

UseReducer is a hook which requires a reducer function which will manage the states and an initial state. UseReducer returns a state and a function which will allow actions to be dispatched in order to update states based on the reducer functions.

Another new hook used on this application was useContext. This one was actually replacing redux allowing me to use states in any component, no matter where it was managed at which having to pass props through multiple components making this way the code much more simple to read and manage.

Other topics I learned while working on this project was how to work with Modals, by having different components overlaying other components. And as a consequence, I had to study and learn quite a lot of CSS to make this application look this way.

And as part of this little journey, problem solving was hugely important as I had multiple bugs or unexpected results which I wisely used my planning, error message interpreting and logging skills to solve.

The deployment is always a painful process for me and this one wouldn't be any different. It required me to do quite a big research on possible ways to deploy a front end app, which is way easier than a full stack app which uses database. And I concluded that Firebase would be the best option for a single page app deployment. After I had a project finished I realised that the configuration my app had would not work to deploy my app because I would need to have a script on my package.json file to create a build folder. But after researching and reading quite a bit, I manage to solve my problem, install firebase on my repo and deploy it.
