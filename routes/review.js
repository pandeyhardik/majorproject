const express = require("express");
const router = express.Router({mergeParams:true});
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const Listing = require("../models/listing.js");

const Review = require("../models/review.js");

const reviewController = require("../controllers/reviews.js");





// Review
// post route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.createReview));


// delete  review route ..  // show.ejs --> method override 
router.delete("/:reviewId" , isLoggedIn, isReviewAuthor ,wrapAsync( reviewController.destroyReview));


module.exports = router; 