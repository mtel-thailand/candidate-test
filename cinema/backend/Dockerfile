# Use the official Node.js 20 image (Debian-based)
FROM node:20

# Install necessary tools and dependencies for SQLite and Node.js native modules
RUN apt-get update && apt-get install -y sqlite3 python3 build-essential g++ make

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock (if available)
COPY package.json yarn.lock ./

# Copy the rest of the application code
COPY . .

# Ensure that the SQLite database directory exists
RUN mkdir -p /usr/src/app/tmp

# Expose the port on which your app runs
EXPOSE 3000

# Install dependencies
RUN yarn

# Command to run your application
CMD ["yarn", "dev"]
