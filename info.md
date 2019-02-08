# Deployment
 - To deploy, rather than running the deploy script, we should just run 
    `npm run build`
 - Find out which processes are listening on which ports
    * sudo netstat -tulpn

 - In order to keep, osamjaved.com and sammyjaved.com workign properly, 
 - I have setup old-server.js which runs on port 80.
 - It does a redirect to the https version of the site https://sammyjaved.com

 
### Sprint Backlog 1/21/19 - 2/4/19
 - Ensure google lighthouse rating is  > 90%
 - Allow full url paths to fetch the appropriate route content
 - HTTPS URL redirect should occur server side
 - Create Academic section with link to work
 - Encrypt SSL keys in server. chmod the individual files
 
### Product Backlog
 - Populate the travel page
 - Create a text component, when a gallery grid item is clicked
 - Create an error 404 page
 - Introduce a file for constant variables. 
    Ideally static files can be more easily hosted on a dedicated server in
    the future. 
 - Spike how SASS works with create-react-app build setup
 - Create script that uploads one image a day from a DB that I have.
 - Create a Calendar Gallery component.  Should allow user to index by year, then month, then day
 - Highlight picture of the day on the homepage.
 - Setup secure FTP. Set a max storage limit in case of breach.d
 - Add 3D photos to website (similar to AR presenter at mini summit). he also used a ML model to 
