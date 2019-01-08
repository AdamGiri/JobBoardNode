const JobPostings = require('../../models/JobPosting.js');

const HOME_PAGE_VIEW_URL = 'home/homePage.ejs';

const PAGE_TITLE = 'Home';

exports.getHomePage = (req, res, next) => {
   JobPostings.findAll()
    .then((jobPostings) => {
        onJobPostingsQueried(res, jobPostings);
    })
    .catch((error) => {
        onError('Error rendering home page', JSON.stringify(error));
    }); 
};

const onJobPostingsQueried = (res, jobPostings) => {
    if (!jobPostings){
        jobPostings = [];
    }
    renderHomePage(res,  {
        pageTitle: PAGE_TITLE,
        jobPostings: jobPostings,
        isEmployer: true
    });
};

const renderHomePage = (res, renderData) => {
    res.render(HOME_PAGE_VIEW_URL, renderData);
};

const onError = (message, error) => {
    console.log(message, JSON.stringify(error));
};



