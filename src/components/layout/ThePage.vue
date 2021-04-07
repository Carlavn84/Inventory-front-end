<template>
  <div class="page">
    <TheHeader />
    <TheMain class="main">
      <slot />
    </TheMain>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheMain from '@/components/layout/TheMain.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

export default {
  name: 'ThePage',

  components: { TheFooter, TheHeader, TheMain },
};
</script>

