FROM node:lts-iron
 
WORKDIR /diaz_gabby_ui_garden/
 
COPY public/ /diaz_gabby_ui_garden/public
COPY src/ /diaz_gabby_ui_garden/src
COPY package.json /diaz_gabby_ui_garden/
COPY . /diaz_gabby_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]