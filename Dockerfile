FROM node:lts-iron
 
WORKDIR /diaz_gabby_ui_garden_build_checks/
 
COPY public/ /diaz_gabby_ui_garden_build_checks/public
COPY src/ /diaz_gabby_ui_garden_build_checks/src
COPY package.json /diaz_gabby_ui_garden_build_checks/
COPY . /diaz_gabby_ui_garden_build_checks
 
RUN npm install
 
CMD ["npm", "run", "storybook"]