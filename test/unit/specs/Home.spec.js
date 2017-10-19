import Vue from 'vue';
import Home from '@/components/Home';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('div span').textContent)
      .to.equal('Willian Hiroshi Simabukuro');
  });
});
