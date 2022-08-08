# vue2_solid
<!--[Home](/)--> <!-- Sends the user to the root README.md -->

[Getting Started](guide/getting_started) <!-- Or you can append .html -->
[Components](components/SolidLogin) <!-- Or you can append .html -->

a voir pour completer https://dev.to/siegerts/creating-a-vue-js-component-library-part-iv-documentation-with-vuepress-56h5


[[toc]]

-------------
<!-- [foo](/foo/) --><!-- Sends the user to index.html of directory foo -->
<!--[foo heading](./#heading) --> <!-- Anchors user to a heading in the foo README file -->
<!--[bar - three](/bar/three.md) --> <!-- You can append .md (recommended) -->
<!--[bar - four](./bar/four.html) --> <!-- Or you can append .html -->


::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::


``` js
export default {
  name: 'MyComponent',
  // ...
}
```


``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```


``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```


``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
