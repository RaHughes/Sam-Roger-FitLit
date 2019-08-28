const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/activityRepository.js');
const Activity = require('../src/activity.js');
const activityData = require('../data/activity.js');

describe('ActivityRepository', function() {
	const activityRepository = new ActivityRepository(activityData)
	const activity = new Activity(activityRepository.currentUser)
	it('should return a userID', function() {
		activityRepository.findUserID(5);
		expect(activityRepository.currentUser.length).to.equal(100)
	})
})