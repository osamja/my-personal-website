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
 - Enable text compression on website. Look into dynamic vs static compression
 - Create a recently added section on homepage so viewers can quickly checkout new content
    * Maybe we could pull changes from Git or Changelog and have link to newly changed content
 - Add linkedin section to professional page
 - Add text to some of the pages explaining what the page is about
 - Import a timeline react component
 - SPIKE: Unit testing
 
 
##### Image Uplaod Service
    - Upload image to REST endpoint
    - Create thumbnail for image 
         - Automatically resize it in process (400 x 300
         - Convert to JPG and compress to <30 kb
    - Image file should be in location specified in API request
    - Authenticate + Authorization for endpont
    - Thumbnail and original image location should be automatically determined
    - Support POST, PUT, DELETE types
    - A super low res image should be loaded.  Lazy load in thumbnail after
