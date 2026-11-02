const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const letters = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
       const cleanName = members[i].trim();
      if (cleanName.length > 0) {
        letters.push(cleanName[0].toUpperCase());
      }
    }
  }

  return letters.sort().join('');
}

module.exports = {
  createDreamTeam
};
