<template>
  <base-page>
    <strong class="capitalize">{{ $route.fullPath }} -- {{ $route.meta.title }}</strong>
    <p>
      Explore
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
      >
        UI Components
      </a>
    </p>
  </base-page>
</template>

<script>
import BasePage from '@/views/BasePage.vue';

export default {
  name: 'HomePage',
  components: {
    BasePage,
  },
};
</script>
