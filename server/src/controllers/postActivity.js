const { Country, Activity } = require("../db");

const postActivity = async (name, hard, duration, season, countryId) => {
  if (name && hard && duration && season) {
    const [activityNew, created] = await Activity.findOrCreate({
      where: { name },
      defaults: { hard, duration, season},
    });
    if (created) {
      await activityNew.addCountries(countryId);
      return activityNew;
    } else {
      return "The activity already exists";
    }
  } else {
    return "Missing data for creating activity";
  }
};

module.exports = postActivity;
