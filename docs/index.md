# FormBuilder

Add plugin to your project:

```javascript
// bundle.js

import Vue from 'vue'
import FormBuilderPlugin from '@awes/form-builder'

Vue.use(FormBuilderPlugin)
```

... or include single components

```javascript
// bundle.js

import Vue from 'vue'
import { FormBuilder, FbInput, FbCheckbox } from '@awes/form-builder'

Vue.component('FormBulder', FormBuilder)
Vue.component('FbInput', FbInput)
Vue.component('FbCheckbox', FbCheckbox)
```

To include styles, add them to your JS bundle

```javascript
// bundle.js

import '@awes/form-builder/dist/css/form-builder.min.css'
```

... or you may also process our PostCSS styles with your own TailwindCSS config

```css
/* main.css */

/* whole bundle */
@import '@awes/form-builder/src/style/main.css';

/* single components */
@import '@awes/form-builder/src/style/components/form-builder.css';
@import '@awes/form-builder/src/style/components/error.css';
@import '@awes/form-builder/src/style/components/text-field.css';
@import '@awes/form-builder/src/style/components/switch-field.css';
```
