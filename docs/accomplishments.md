Sprint 19 4/27/20 - 5/11/20


Sprint 18 3/21/20 - 4/4/20
  - [IMAGE_MORPHING]:[BACKLOG]: Debug why it's not working on iphone (add exception logging if necessary)
    - Answer: Morpher works on iphone but we're getting 413 erors claiming the request payload is too large
  - [IMAGE_MORPHING]: Add ability to return the morph sequence as a GIF
    - GREAT WORK! (note productivity boosts may be correlated with coravirus pandemic)
  - [IMAGE_MORPHING]: Save images namespaced by date (to make future deletion easier)
    - Note: Sprint scope increase
  - [IMAGE_MORPHING]:[FRONTEND]: Include instructions with face morpher explaining best practices for getting optimal results
    - Note: Sprint scope increase
  - [IMAGE_MORPHING]: Improve UI for morph app

Sprint 17 3/6/20 - 3/20/20
 - Added better logging; performance is essentially resolved now
 - Refactored morpher and cleaned it up.  Solved a bug, now both images warp towards the midpoint, then cross dissolve
 - Made morpher more robust - scale invariant so that it will resize imgs rather than failing
 - Optimized getTriDict and getMorphedImg functions by vectorizing them 
 - SPIKE on how others got morphing to be quick
 - Document performance improvement plan for image morpher
 - imagemorpher/docs/performance.md

Sprint 16 12/16/19 - 12/30/19
 - dockerrized my-personal-website, ImageMorpher applications
 - Setup Nginx to handle all routing to the site
 - Setup docker-compose to manage multiple services

10/28/19 - 12/16/19
 - Things kind of slow it the holidays
 - busy with work (Dunamis for Web Platform)

Sprint 15 MPW Accomplishments 10/14/19 - 10/28/19
- [IMAGE_MORPHING]:[FRONTEND]: Show morphed img URL (1 pts - midsprintscope)
- [IMAGE_MORPHING]:[FRONTEND]: Show morphed img under morph button (2 pts - midsprintscope)
- [IMAGE_MORPHING]:[FRONTEND]: Display uploaded image in dropzone container (2 pts - midsprintscope)
- [IMAGE_MORPHING]:[FRONTEND]: Refactor dropzone component, display informative upload text (2 pts)
- [IMAGE_MORPHING]:[FRONTEND]: Show the final morphed image beneath morph button (2 pts)
- [IMAGE_MORPHING]:[FRONTEND]: Morph button sends uploaded image files to /morph (2 pts)
- [IMAGE_MORPHING]:[FRONTEND]: Add loading spinner state for Morph button (2 pts)

9/30/19 - 10/14/19
- PTO (Austin City Limits, Conference)
- Work (Library Dropdown component time consuming)

Sprint 14 MPW Accomplishments 9/16/19 - 9/30/19
 - [IMAGE_MORPHING]:[BACKEND]: Implement how to setup nginx to serve static files from a docker volume 3 pts
    Acceptance Criteria:
    * The docker volume should store the morphed jpeg images
    * Any morphed jpeg image must be served through a URL
    * If an image is dynamically added to the docker volume, it should be available through a URL without any manual intervention - 5pts
- Add api-key authorization check to morph endpoint (2 pts)

Sprint 13 MPW Accomplishments 9/2/19 - 9/16/19
 - [IMAGE_MORPHING]:[BACKEND]: Create a NodeJS Express REST endpoint that can initiate a morph. POST /morph (im1, im2) => morphedImg

8/5/19 - 9/2/19
- PTO

Sprint 12 MPW Accomplishments (7/22/19 - 8/5/19)
- [IMAGE_MORPHING]:[FRONTEND]: Create a UI that allows the user to upload two images (2pts)

Sprint 11 MPW Accomplishments (7/22/19 - 8/5/19)
- [IMAGE_MORPHING]:[BACKEND]: Get basic MVP of refactor working (3 pts)
 * Calculate midway face for two images of same resolution and corresponding points provided by the user.
- [WEBSITE]: Fix https security warning when users visit osamjaved.com (2 pts)
- [WEBSITE] Cloudinary Image Upload Service (3 pts)
- [WEBSITE] Add cover images on travel page (1 pt)
- [WEBSITE] Create a Guitar section on homepage

Time off (6/10/19 - 7/22/19)
- Went to DC
- Began prototyping image morphing project

Sprint 10 MPW Accomplishments (5/27/19 - 6/10/19)
- [PHOTOGRAPHY] 50: Finish LA trip video with aneeb + katie (3 pts)
- [GUITAR] 52: Begin learning "Crash Into Me" by DMB (3 pts)
- [WEBSITE] 51: Refresh homepage hero images (2 pts)

Sprint 9 MPW Accomplishments (5/13/19 - 5/27/19)
  - [WEBSITE] Make a writeup about re-creating my personal website
  - [PHOTOGRAPHY] Publish New Orleans trip video (5 pts)
  - [PHOTOGRAPHY] Add Peru video as link to it's travel page (1 pt)
  - [SPIKE] Google Lighthouse: Ensure no errors are logged to console (2 pt)
  - [GUITAR] Record Why Georgia (2 pts) 

Sprint 8 MPW Accomplishments (4/29/19 - 5/13/19)
  - MPW 7.1: Title should not bulge on hover (1 pt)
  - MPW 7.2: Fix image size of computational photography (2 pts)
  - MPW 7.3: Add animation project to Academic section (1 pt)
  - MPW 7.4: Add home icon/back button on Sammy Javed header (2 pts)
  - MPW 7.5: Background should have a gradient dark gray (2 pts)
    - Light source with color fading both ways
  - MPW 7.6 Add text to pages to give user context (2 pts)
    - One/two line description of what page is about
    - Add description for each item on homepage
  - Add self-paced courses section to Academic ( 2pts)    

Sprint 7 MPW Accomplishments (4/15/19 - 4/29/19)
  - Get basic site analytics setup to monitor traffic (2 pts)
        - Google analytics
  - [SPIKE] Create text component  (2 pts)
    - Will use Hexo as blogging service
  - Update static assets images on homepage (2 pts)
    - Size should be 400x300 
    - They should not be blurry    
  - Create a 'Professional' section to homepage (3 pts)

Sprint 6 MPW Accomplishments (4/1/19 - 4/15/19)
  - Create a movies watched in 2019 page similar to books (2 pts)
  - Populate the travel page (2 pts)
  - Change font for Gallery grid item image text (1 pt)
  - Introduce a file for static routes. (3 pts) 
      - Will allow static files to be more easily hosted on a dedicated server in the future.
      - Find better way to point to static assets, create JS variable for path
          `'src': 'static/images/general/colors/black.jpg',`
      - Move static scripts into public folder which can one day be delivered via a CDN.
  - Upload CS 184 Project writeups to Academic page (2 pts)
    

Sprint 5 MPW Accomplishments (3/18/19 - 4/1/19)
  - Create Academic section with link to work (2 pts)
  - Allow full url paths to fetch the appropriate route content (5 pts)
  - HTTPS URL redirect should occur server side (3 pts)

Sprint 4 MPW Accomplishments (3/4/19 - 3/18/19)

Sprint 3 MPW Accomplishments (2/18/19 - 3/4/19)

Sprint 2 MPW Accomplishments (2/4/19 - 2/18/19)
  - Populate the Bio page
  - Remove bootstrap dependency
  - Ensure google lighthouse rating is  > 90%

Sprint 1 MPW Accomplishments (1/21/19 - 2/4/19)
  - Create a /books page using React router
  - Create a header with link to home in every page
  - Create a /projects page using React router
  - Create font for 'Sammy Javed' header
  - Add the photography section
  - Added content to projects page
  - Edit the books page (Fix two headers)
  - Remove the '#' that is appearing in the URLs
  - Redirect osamjaved.com to sammyjaved.com
  - Have a separating line under header
  - Replace the fake 'black' color img on website today
  - Enable https:// via SSL certificate
  - Header should have some effect when hovered over
  - Gallery Grid items should have an effect when hovered over (change border color)
  - Add custom favicon
  - Clickable header should just be the text region
  - osamjaved.com should redirect to sammyjaved.com
  - Add Home icon in Header  
