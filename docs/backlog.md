### Product Backlog

    - Have entire website be extremely timeline driven with the grid system indexing into granular timeframes. folder <year><month><date>.
    - Create text component (3 pts)
    Upload markdown file in folder <year><month><date>.
    e.g. when a gallery grid item is clicked
    
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
    - Document a consistent way to do file imports (probably establishing how to import files with their absolute path)
    - Begin using a JS linter
    - Make a writeup about re-creating my personal website
    - Improve Google Lighthouse performance
        Enable text compression
        Defer non-critical CSS
        Ensure no errors are logged to console
    - Text compression
    - Enable text compression on website. Look into dynamic vs static compression
    - Create a recently added section on homepage so viewers can quickly checkout new content
    * Maybe we could pull changes from Git or Changelog and have link to newly changed content
    - Add linkedin section to professional page
    - Import a timeline react component
    - SPIKE: Unit testing
    - Add gallery page for personal website highlighting tech stack used
    - Background should have a gradient dark gray.  Light source with color fading both ways
    - Add travel video to each place
    
    
 

### Content Backlog
    
    - Create a 'My setup' blog post.
        Investigate affiliate links from Amazon 
 
 
##### Image Upload Service
    - Upload image to REST endpoint
    - Create thumbnail for image 
         - Automatically resize it in process (400 x 300
         - Convert to JPG and compress to <30 kb
    - Image file should be in location specified in API request
    - Authenticate + Authorization for endpont
    - Thumbnail and original image location should be automatically determined
    - Support POST, PUT, DELETE types
    - A super low res image should be loaded.  Lazy load in thumbnail after

##### Writing Upload Service
    - Upload blog in markdown to REST endpoint
    Block element layout (img and text never on same line)
    - Write journal entry in markdown.
        - Be able to reference images. 
    Upload markdown file in folder <year><month><date>.
    e.g. when a gallery grid item is clicked
    Investigate whether a writing service should be created.
    Create POC with public/static/text/prose/mypersonalwebsite.md
