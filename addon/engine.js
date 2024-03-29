import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;
const Eng = Engine.extend({
  modulePrefix,
  Resolver,
  dependencies: {
    externalRoutes: [
      'album'
    ]
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;
