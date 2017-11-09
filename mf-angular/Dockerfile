# Create image based on the offical Node 6 image
FROM node:alpine

# Create app source code directory
RUN mkdir /app

# Change to the directory
WORKDIR /app

# Copy the dependency file
COPY ./src/package.json /app

# Hack fix for weird node issue
RUN cd $(npm root -g)/npm \
&& npm install fs-extra \
&& npm install -g nodemon

# Install dependency
RUN npm install -dd

# Get all the code
COPY ./src /app

# Expose port
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
