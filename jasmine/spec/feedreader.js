/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        
       // This is the RSS Feeds suite that tests the feeds 
    describe('RSS Feeds', function () {

        // Determines if allfeeds has been defined and they are not empty
        it('feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Determines if allFeeds have a url the url is not empty
        it('urls are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // Determines if allFeeds have a name the name is not empty 
        it('names are defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    });


    /* TODO: Write a new test suite named "The menu" */
         // New test suite that will test the menu
    describe('The Menu', function () {

        // Searches for the class of 'menu-hidden' in the body tag. If true, 
        // then the menu is hidden 
        it('menu element is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // Toggles on click event if the menu appears or disappears
        it('working toggle on click event', function () {
            // Calls the class of 'menu-icon-link' 
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // New test suite that will test initial entries
    describe('Initial Entries', function () {

        // Calls a function to do an asynchronous request 
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        // Tests if the loadFeed function has at least a single '.entry' within
        // the '.feed' container
        it('define if feed has at least a single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    // New test suite that looks for new feed selections
    describe('New Feed Selection', function() {
	    var firstFeed, secondFeed;
        
        // Ensures that the new feed is loaded via the loadFeed function
		beforeEach(function(done) {
            loadFeed(1, function() {

                // Tests if first feed is loaded
                console.log('First feed loaded!')

                // Loads first entry and checks
                firstFeed = $('.feed').html();
                loadFeed(2, function() {

                    // Tests if second feed is loaded
                    console.log('Second feed loaded!')
                    done();
                });
            });        
         });
		
		afterEach(function() {
            loadFeed(0);
        });

        // Tests to see if two entries are not equal
		it('checks if two feeds are different', function() {

            // Checks second feed
            secondFeed = $('.feed').html();
            expect(firstFeed).not.toEqual(secondFeed);
        }); 
	});
}());
