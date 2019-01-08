const JobPostings = require('../../models/JobPosting.js');

const HOME_PAGE_VIEW_URL = 'home/homePage.ejs';

const PAGE_TITLE = 'Home';

exports.getHomePage = (req, res, next) => {
   JobPostings.findAll()
    .then((jobPostings) => {
        renderHomePage(res, jobPostings);
    })
    .catch((error) => {
        onError('Error rendering home page', error);
    }); 
};

const renderHomePage = (res, jobPostings) => {
    if (!jobPostings){
        const jobPostings = [];
    }
    res.render(HOME_PAGE_VIEW_URL, {
        pageTitle: PAGE_TITLE,
        jobPostings: jobPostings
    });
};

const onError = (message, error) => {
    console.log(message, JSON.stringify(error));
};