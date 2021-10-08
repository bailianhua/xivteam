<template>
  <video-background
    src="videos/endwalkerLogin.mp4"
    class="absolute z-0 w-auto min-w-full min-h-full"
    :loop="false"
  >
    <div
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-10 overflow-scroll bg-gray-800 opacity-90 flex flex-col transition-opacity"
    >
      <Suspense>
        <template #default>
          <router-view></router-view>
        </template>
        <template #fallback>
          <div class="text-gray-100 text-4xl mt-10 text-center">Loading...</div>
        </template>
      </Suspense>
    </div>
  </video-background>
</template>

<script lang="ts">
import VideoBackground from 'vue-responsive-video-background-player';

export default {
  components: {
    VideoBackground
  },
  setup() {
    return {
    }
  },
}
</script>