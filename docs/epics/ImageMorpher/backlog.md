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
