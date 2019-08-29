const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/sleepRepository.js');
const Activity = require('../src/activity.js');
const activityData = require('../data/activity.js');

describe('Activity', function() {
	const activityRepository = new ActivityRepository(activityData)
	const activity = new Activity(activityRepository.currentUser)
	it('should have a length of 100', function() {
		activityRepository.findUserID(5);
		expect(activity.data.length).to.equal(100)
	})
	it('should find number of steps for each user per day', function() {
		activityRepository.findUserID(5)
		activity.findNumSteps('2019/06/15')
	expect(activity.numSteps).to.equal(11374)
	});
	it('should find minutes active for each user per day', function() {
		activityRepository.findUserID(5)
		activity.findMinActive('2019/06/15')
		expect(activity.minutesActive).to.equal(213)
	})
	it('should be able to calculate miles walked by a user per day', function() {
		activityRepository.findUserID(5)
		expect(activity.findDistanceMiles(  {
    "id": 5,
    "name": "Erick Schaden",
    "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
    "email": "Vanessa_Gerhold@gmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 8000,
    "friends": [
      13,
      44,
      49,
      33,
      10
    ]
  }, activity)).to.equal('6.68')
	});
	it('should be able to find all dates for each user', function() {
		activityRepository.findUserID(5)
		expect(activity.findActivityDates().length).to.equal(500)
	});
	it('should be able to display a message based on a users step goal', function() {
	activityRepository.findUserID(5)
	expect(activity.checkStepGoal({
    "id": 5,
    "name": "Erick Schaden",
    "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
    "email": "Vanessa_Gerhold@gmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 8000,
    "friends": [
      13,
      44,
      49,
      33,
      10
    ]
  }, activity)).to.equal("Step Goal not met. Keep working!")
	});
	it('should display number of steps over the course of a week', function() {
	activityRepository.findUserID(5)
	expect(activity.findWeeklySteps(0)).to.eql([11374, 9350, 13120, 4765, 8914, 4760, 2177])
	});
	it('should display flights of stairs climbed over the course of a week', function() {
	activityRepository.findUserID(5)
	expect(activity.findWeeklyStairs(0)).to.eql([13, 38, 25, 25, 6, 46, 21])
	});
	it('should display minutes active over the course of a week', function() {
	activityRepository.findUserID(5)
	expect(activity.findWeeklyMins(0)).to.eql([213, 167,151, 35, 191, 219, 142])
	});
})