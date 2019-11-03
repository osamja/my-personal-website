### MVP
* Overview
    - Upload two pictures in web browser
    - Return the moprhed 'midway' image to the user

* Details
    * As a user visiting the image morphing site, I should see
    - A box on the left and right side of the UI, with a browse button inside allowing me to upload my first image
    - A button underneath the left and right image upload boxes with the button text saying "Morph"
    * When two images are uploaded, and the morph button is clicked, I should see
    - A loading state (grayed out morph button) indicating that the morph algorithm is in progress
    - The final halfway morphed image displayed underneath the morph button


### Enhancements
* Upload user images to cloud service (cloudinary). Upload service takes in image, returns resource to those image
* Morph endpoint is notified of resource from upload service, begins morphing the images at defined resource.  Morphed image is written to cloud service, a resource URL is returned and presented to the user.
* Progress bar is shown while image is being morphed
* Add paid version for morphed sequence

## Engineering development journal
Awesome to see getting the refactored morph working
Setup basic Django backend REST endpoint /morph
Build the frontend with React to allow for image uploads
Find out how to read the images in by Python/Django
Find out how to get auto-generated facial landmark corresponding points using dlib library
Find out how to use pixel cropping to detect and delete black parts of the image (morph is smaller than image base layer)
Find out how to save images, and have the /morph endpoint return the image source
Find out how to serve static content through Nginx
Find out how to setup a dockerrized nginx service that serves images through a volume
Learning about Docker and getting hands on experience building a distributed app
Getting redux store setup with image morpher application
    - Adding Redux provider, using connect with components
Project planning, especially the last mile where the project is in limbo and driving to finish it feels grindy :)

# Project Planning

## Must-have features and SWAGs
1. The /morph endpoint (30 pts)
    - should be hosted separately from the frontend app (20 pts)
    - be able to support 3+ requests at any given moment (2 pts)
    - should work via https (3 pts)
    - should have a staging and production environment (5 pts)
2. the frontend app (20 pts)
    - should work decently end-to-end on my iphone (5 pts)
    - should work decently end-to-end on my PC (10 pts)
    - if the server gets overloaded, it should be restarted in a running state (10 pts)

## Nice-to-have 
3. business
    - [IMAGE_MORPHING]:[BUSINESS]: Register domain name for application (3 pts)
    - [IMAGE_MORPHING]:[BUSINESS]: Host morph app on separate infrastructure from website
    - create and launch mobile app
    - example of morphing w/ cached images

## Timeline
* Target completion date is have the must-have features completed by Thanksgiving (11/27)
* Must have completion date is by Christmas eve (Dec 24)

3 sprints remaining (10/20/19 - 11/28/19)
10 * 3 = 30 pts available

## ACTION ITEMS
1. should be hosted separately from the frontend app (20 pts)
2. setup endpoint over https (3 pts)
3. frontend should work decently end-to-end on my PC (3 pts)4
4. frontend should work decently end-to-end on my iphone (3 pts)
5. sammy rocks (1 pts)

## Epic Iems
[INFRA-UPGRADE]: should be hosted separately from the frontend app (20 pts)
    2 pts - architecture drawing + planning
    5 pts - AWS familiarity
    3 pts - setup AWS gateway
    2 pts - be able to take in a http request and forward it to gateway
    3 pts - be able to pass images from app to AWS
    5 pts - setup aws lambda to return the morphed image
    5 pts - setup lambda to save morphed image to s3
    2 pts - s3 should return url for morphed image was saved
    3 pts - infra rocks  
