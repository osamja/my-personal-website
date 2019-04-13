# Deployment
 - To deploy, rather than running the deploy script, we should just run 
    `npm run build`
 - Find out which processes are listening on which ports
    `sudo netstat -tulpn`

# Development
 - Use nodemon to detect changes to server and hot reload page
    `node_modules/nodemon/bin/nodemon.js server.js`
 
### Sprint Backlog (4-15 - 4/29)
    - Create a 'Professional' section to homepage (3 pts)
        * Add Telesense, Juniper projects. Include Adobe Stock Logo
    - Update static assets images on homepage (2 pts) 
        * They should not be blurry
    - [SPIKE] Create text component  (2 pts)
        Write journal entry in markdown. Be able to upload images. 
        Block element layout (img and text never on same line)  
        Upload markdown file in folder <year><month><date>.
        e.g. when a gallery grid item is clicked
    - Get basic site analytics setup to monitor traffic (2 pts)
        Google analytics
 
### Product Backlog
 - Have entire website be extremely timeline driven with the grid system indexing into granular timeframes. folder <year><month><date>.
 - Create text component (3 pts)
    Upload markdown file in folder <year><month><date>.
    e.g. when a gallery grid item is clicked
 - Have a home icon or back button on Sammy Javed header
 - Spike how SASS works with create-react-app build setup
 - Create script that uploads one image a day from a DB that I have.
 - Create a Calendar Gallery component.  Should allow user to index by year, then month, then day
 - Highlight picture of the day on the homepage.
 - Setup secure FTP. Set a max storage limit in case of breach.d
 - Add 3D photos to website (similar to AR presenter at mini summit). he also used a ML model to
 - Encrypt SSL keys in server. chmod the individual files
 - Add write up for CS 189 ML and link to Give Em the Axe project
 - All pics should be low res unless leaf node. e.g. clicking on image from /photography should download full res img 
 - Grid items that are leafs (don't point to another URL should not be displayed as URLs, no hand icon should be displayed) 
 - Create an upload service with image magic behind the scenes to crop the img to 500x500 and ensure it's compressed
 - Document a consistent way to do file imports (probably establishing how to import files with their absolute path)
 - Begin using a JS linter
 - Make a writeup about re-creating my personal website
 - Improve Google Lighthouse performance
    - Text compression
