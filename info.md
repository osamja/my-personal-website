# Deployment
 - To deploy, rather than running the deploy script, we should just run 
    `npm run build`
 - Find out which processes are listening on which ports
    `sudo netstat -tulpn`

# Development
 - Use nodemon to detect changes to server and hot reload page
    `node_modules/nodemon/bin/nodemon.js server.js`
 
### Sprint Backlog
    - Introduce a file for constant variables. (3 pts) 
        - Ideally static files can be more easily hosted on a dedicated server in the future.
    - Upload CS 184 Project writeups to Academic page (2 pts)
 
### Product Backlog
 - Have entire website be extremely timeline driven with the grid system indexing into granular timeframes. folder <year><month><date>.
 - Create text component.  Upload markdown file in folder <year><month><date>.
 - Get basic site analytics setup to monitor traffic
 - Create a text component, when a gallery grid item is clicked
 - Spike how SASS works with create-react-app build setup
 - Create script that uploads one image a day from a DB that I have.
 - Create a Calendar Gallery component.  Should allow user to index by year, then month, then day
 - Highlight picture of the day on the homepage.
 - Setup secure FTP. Set a max storage limit in case of breach.d
 - Add 3D photos to website (similar to AR presenter at mini summit). he also used a ML model to
 - Create a 'Moonbeam' like CI/CD, that pushes changes through each environment automaticaly, asking dev at each stage to validate changes
 - Encrypt SSL keys in server. chmod the individual files
 - Backup Berkeley project writeups locally
 - Update static asset images on homepage
 - All pics should be low res unless leaf node. e.g. clicking on image from /photography should download full res img
 - Find better way to point to static assets, create JS variable for path
    `'src': 'static/images/general/colors/black.jpg',` 
 - Grid items that are leafs (don't point to another URL should not be displayed as URLs, no hand icon should be displayed)
 - Move static scripts into public folder which can one day be delivered via a CDN. 
 - Create an upload service with image magic behind the scenes to crop the img to 500x500 and ensure it's compressed
 - Document a consistent way to do file imports (probably establishing how to import files with their absolute path)
