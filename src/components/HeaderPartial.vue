<template>
  <nav class="navbar navbar-expand navbar-light bg-light sticky-top">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand"
      >
        # Home
      </router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            to="/example-one"
            class="nav-link"
          >
            <i class="fa fa-info-circle" />
            Example One
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/example-two"
            class="nav-link"
          >
            <i class="fa fa-info-circle" />
            Example Two 
          </router-link>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderPartial",
};
</script>

