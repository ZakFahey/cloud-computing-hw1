# Is it down?

This website allows a user to input a URL, and the website returns whether or not that website is down. This is done by remotely pinging the URL and verifying that the website returns a successful 200 response.

## Running

To run the website locally, install npm and run `npm start`.

## Technical details

This website is written in Node.js. Requests are handled using Express, and the server-side URL pinging is done with Axios. The website is then hosted behind Nginx.

## Setting up hosting

1. First, start up an AWS EC2 t2.micro instance running Amazon Linux.
2. Go to the instance's security group and open up port 80 for inbound traffic.
3. Copy the source repository to the virtual machine using the `scp` command.
4. Install Node with `yum install`.
5. Run the application in the background using the command `setsid sudo node src/index.js` in the project's root directory.
6. Install Nginx with `yum install`.
7. Edit the Nginx config in `/etc/nginx/nginx.conf` and update this section in http > server > location:
```
location / {
  proxy_pass http://localhost:8000;
}
```
This code routes all requests to the application. The updated `nginx.conf` is stored in this repository in the `nginx` folder.

8. Start Nginx with the command `sudo service nginx start`.
9. The website is now available on the instance's public DNS shown on the EC2 dashboard on port 80.
