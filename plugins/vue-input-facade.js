import Vue from 'vue';
import InputFacade from 'vue-input-facade';

if (!Vue.__input_facade__) {
  const options = {
    // rename the directive from: v-facade to: v-mask
    name: 'mask',

    // use these tokens instead of the default
    tokens: {
      '#': { pattern: /\d/ },
      A: { pattern: /[a-z]/i },
      N: { pattern: /[0-9a-z]/i },
      X: { pattern: /./ },
    },
  };

  Vue.use(InputFacade, options);

  Vue.__input_facade__ = true;
}
