### MVP
* As a user visiting the image morphing site, I should see
 - A box on the left and right side of the UI, with a browse button inside allowing me to upload my first image
 - A button underneath the left and right image upload boxes with the button text saying "Morph"
* When two images are uploaded, and the morph button is clicked, I should see
 - A loading state (grayed out morph button) indicating that the morph algorithm is in progress
 - The final halfway morphed image displayed underneath the morph button


### Enhancements
* Upload user images to cloud service (cloudinary). Upload service takes in image, returns resource to those image
* Morph endpoint is notified of resource from upload service, begins morphing the images at defined resource.  Morphed image is written to cloud service, a resource URL is returned and presented to the user.
