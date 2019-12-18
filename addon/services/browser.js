import Service from '@ember/service';

export default Service.extend({
  getBrowser() {
    return window.fetch("http://www.mocky.io/v2/5df9a1563600002b1abd6607").then((res) => res.json());
  }
});
