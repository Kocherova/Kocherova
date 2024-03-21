const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
