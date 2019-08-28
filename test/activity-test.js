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
	// it('should calculate average number of hours slept per day', function() {
	// sleepRepository.findUserID(5)
	// expect(sleep.findAvg('hoursSlept').toFixed(2)).to.equal('7.68')
	// });
	// it('should calculate average quality of sleep per day', function() {
	// 	sleepRepository.findUserID(5)
	// 	expect(sleep.findAvg('sleepQuality').toFixed(2)).to.equal('3.13')
	// })
	// it('should be able to find the hours slept current date for each user', function() {
	// sleepRepository.findUserID(5)
	// sleep.findSleepDay('2019/06/15')
	// expect(sleep.day).to.eql(4.1)
	// });
	// it('should be able to find all dates for each user', function() {
	// sleepRepository.findUserID(5)
	// expect(sleep.findSleepDates().length).to.equal(500)
	// });
	// it('should be able to find the sleep quality current date for each user', function() {
	// sleepRepository.findUserID(5)
	// sleep.findSleepQuality('2019/06/15')
	// expect(sleep.quality).to.eql(3.6)
	// });
	// it('should display number of hours slept over the course of a week', function() {
	// sleepRepository.findUserID(5)
	// expect(sleep.findSleepWeek(0)).to.eql([4.1,7.4,10.5,5.2,4.8,10.1,9.6])
	// });
	// it('should display sleep quality over the course of a week', function() {
	// sleepRepository.findUserID(5)
	// expect(sleep.findSleepWeekQuality(0)).to.eql([ 3.6,2.4,3.7,4.1,3.4,3.5,4.1])
	// });
	// it('should be able to get an array of dates based on the current day', function() {
	// sleepRepository.findUserID(5)
	// expect(sleep.compareQualityAverage(0)).to.eql(["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"])
	// });
})