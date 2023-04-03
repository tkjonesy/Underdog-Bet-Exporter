import configuration from './configure';
import queryBuilder from './queryBuilder';

var configure = function configure(_ref) {
  var apiKey = _ref.apiKey;
  configuration.apiKey = apiKey;
};

export default {
  configure: configure,
  card: queryBuilder('cards'),
  set: queryBuilder('sets'),
  type: queryBuilder('types'),
  subtype: queryBuilder('subtypes'),
  rarity: queryBuilder('rarities'),
  supertype: queryBuilder('supertypes')
};