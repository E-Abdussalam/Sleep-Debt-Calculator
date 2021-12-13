//setting the sleeping hours per weekday
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 15;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("Your're getting enough seeping hours");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } hour(s) more sleep than you needed this week. work harder!`
    );
  } else {
    console.log(
      `You got ${
        idealSleepHours - actualSleepHours
      }  hour(s) less sleep than you needed this week. Get some rest.`
    );
  }
};
calculateSleepDebt();
