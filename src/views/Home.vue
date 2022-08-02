<template>
  <div class="home">
    <div class="p-4">
      <div class="row">
        <div class="col-md-6">
            <ExampleOne/>
        </div>
        <div class="col-md-6">
            <ExampleTwo/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ExampleOne from './ExampleOne/index.vue';
import ExampleTwo from './ExampleTwo/index.vue';
export default {
    name: "HomePage",
    components: { ExampleOne, ExampleTwo }
};
</script>

