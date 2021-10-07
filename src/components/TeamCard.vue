<template lang="">
  <div
    class="
      transition
      group
      relative
      items-stretch
      mx-8
      mb-6
      bg-gray-200
      rounded-lg
      break-inside
      border-2
      hover:border-red-400
      cursor-pointer
    "
  >
    <router-link  :to="{ name: 'Party', params: { teamid: teamid } }">
      <img
        class="filter grayscale group-hover:filter-reset "
        :src="teamPictureSrc"
        alt=""
        srcset="" />
      <div class="top-1/2 absolute bottom-0 w-full text-center">
        <p
          class="
            transition
            text-4xl
            font-black
            transform
            group-hover:translate-y-1/2 group-hover:opacity-0
            bg-gray-100 bg-opacity-70
            text-black
          "
        >
          {{ teamName }}
        </p>
      </div>
      <div class="absolute bottom-0 w-full text-center">
        <p
          class="
            transition
            text-4xl
            font-black
            transform
            opacity-0
            group-hover:opacity-100
            bg-gray-100 bg-opacity-70
            text-black
          "
        ></p></div
    ></router-link>
  </div>
</template>
<script lang="ts">
import { computed } from "@vue/reactivity";
export default {
  name: "TeamCard",
  props: {
    teamName: String,
    teamPicture: String,
    teamid: Number,
  },
  setup(props: any) {
    const teamPictureSrc = computed(() => {
      if (props.teamPicture == "") return "https://gh.cdn.sewest.net/assets/ident/news/8-ways-celebrate-friendships-final-fantasy-xiv-online/en_US/ff14-shadowbringers.jpg";
      return props.teamPicture;
    })

    return {
      teamPictureSrc
    }
  }
};
</script>
<style lang=""></style>
