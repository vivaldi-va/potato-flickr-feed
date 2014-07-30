/**
 * Created by Vivaldi on 30/07/14.
 */

describe('Test app', function() {
	beforeEach(function () {
		// Load up a view and wait for it to be done with its rendering and epicycles.
		browser.get('#/');
		browser.waitForAngular();
	});

	var firstResult = browser.findElement(by.css('.feed-item:first-of-type'));

	var firstResultLink = firstResult.findElement(by.css('.feed-item-body-title'));


});