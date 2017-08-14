<template>
  <div id="app">
    <div class="navbar">
      <div class="container">
        <div class="row header">
          <div class="column col-md-6">
            <img class="center-block" src="./assets/logo.png">
          </div>
          <div class="column col-md-6">
            <pre v-highlightjs><code class="python hljs">>>> """Learn the performance impact of specific
... code structures, not to apply micro-optimisations
... to all your old programs, but to write fast
... Python code from now on. Sometimes alternatives
... make a difference, and other times they simply
... do not. Remeber, choosing the best solution
... you should also consider Zen of Python!"""

>>> import sys
>>> import platform
>>> platform.system()
{{ plat_sys }}
>>> platform.release()
{{ plat_rel }}
>>> sys.version
{{ sys_version }}
>>> import timeit
>>> from dis import dis
>>> </code></pre>
          </div>  
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import data from '../data.json'

export default {
  name: 'app',
  data () {
    return data
  }
}
</script>
