const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");

const lisitngController = require("../controllers/listings.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js") ;
const upload = multer({ storage });




router
 .route("/")
.get(wrapAsync(lisitngController.index))  // index
.post(isLoggedIn, 
    upload.single("listing[image]"),
    validateListing,
    wrapAsync (lisitngController.createListing));  // createRoute




 // New Route .. 
 router.get("/new",isLoggedIn,
    lisitngController.renderNewForm);


router
 .route("/:id")
 .get( wrapAsync( lisitngController.showListing))  //show
 .put( isLoggedIn,isOwner, 
    upload.single("listing[image]") ,
    validateListing ,
    wrapAsync(lisitngController.updateListing )) //update
 .delete( isLoggedIn,isOwner , 
    wrapAsync (lisitngController.destroyListing)); // delete



// Edit Route..
router.get("/:id/edit",isLoggedIn,isOwner , wrapAsync(lisitngController.renderEditForm));



module.exports = router;