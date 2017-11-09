# Create from offical Node 6 image
FROM node:alpine

# Create app directory for the code
#RUN mkdir /app

# Change directory
WORKDIR /app

# Copy dependency
COPY package.json /app

# Hack fix for weird node issue
RUN cd $(npm root -g)/npm \
&& npm install fs-extra

# Install dependency
RUN npm install -dd

# Copy dat code
COPY ./src /app

# Expose the needed port
EXPOSE 3000

# Run the server
CMD ["npm", "start"]
