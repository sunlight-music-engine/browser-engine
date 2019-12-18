import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  browser: service(),

  model() {
    return this.browser.getBrowser();
  }
});

