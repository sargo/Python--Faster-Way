<template>
  <div id="cases" class="container">
    <div class="row panel" v-for="c, index in cases">
      <div class="panel-heading">Case #{{ index }}</div>
      <div class="panel-body">
        <div v-bind:class="'col-md-' + 12 / c.tests.length" class="column" v-for="t in c.tests">
          <pre v-highlightjs><code class="python hljs">{{ t.file_content }}

>>> min(timeit.repeat(a, number={{ t.number }}))
... {{ t.timeit_min }}

>>> dis(a)
{{ t.dis }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data.json'

export default {
  name: 'MainPage',
  data () {
    return data
  }
}
</script>
