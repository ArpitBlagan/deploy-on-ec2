This is for Pratice purpose where I follow the navie approch to deploy this backend app
on aws ec2 ubuntu instance.
steps

<ul>
<li>
    Create an instance, get the a screte pair file (.pem file) and allow http and https traffic on that instacn.
</li>
<li>
    ssh into that ec2 instance using below command.
</li>
<li>
    run command like sudo apt update then sudo apt install nginx, sudo apt install nodejs and sudo apt install npm.
</li>
<li>
    clone the repo, install nodejs, install dependencies and than start the server.
</li>
<li>
    By default all the request comming to your ec2 goes to 80 port for http and for https its redirect to port 443 so we can to redirect the req comming port 80 to some localhost where our app is running by sudo vi /etc/nginx/nignx.conf and then put this:
    <p>
        http {
            server {
                listen 80;
                server_name your_ec2_url
            }
            location / {
                proxy_pass http://localhost:8080;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }
        }
    </p>

</li>
</ul>

```bash
    chmod 700 file_name.pem
    ssh - file_name.pem @your_operating_system@your_ec2_public_IPv4
```
