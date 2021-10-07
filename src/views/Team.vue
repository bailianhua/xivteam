<template lang="">
  <h1 class="text-gray-100 text-4xl self-center mt-4">FFXIV FULL PARTY</h1>
  <div class="mx-auto my-4 flex">
    <span class="text-gray-100 self-center mr-2">Search:</span>
    <input
      class="
        form-input
        bg-transparent
        text-gray-100
        border-0 border-b-2 border-gray-200
        focus:border-yellow-500 focus:ring-0
      "
      type="text"
      name="teamSearch"
      v-model="search"
    />
  </div>
  <div class="min-h-screen p-20">
    <div
      class="
        box-border
        max-w-screen-2xl
        mx-auto
        md:masonry
        before:box-inherit
        after:box-inherit
      "
    >
      <team-card
        v-for="team in matchingTeams"
        :teamid="team.id"
        :team-name="team.name"
        :team-picture="team.picture"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ref } from "@vue/reactivity";
import TeamCard from "../components/TeamCard.vue";

export default {
  components: {
    TeamCard,
  },
  setup() {
    const search = ref("");
    let teamArray = [
      {
        id: 1,
        name: "Team A",
        picture:
          "https://www.destructoid.com/wp-content/uploads/2020/12/561138-FF14.jpg",
      },
      {
        id: 2,
        name: "TPS",
        picture:
          "https://www.mmogames.com/wp-content/uploads/2017/05/ffxiv_13052017_200039.jpg",
      },
      {
        id: 3,
        name: "RichCob",
        picture:
          "https://www.ff14coco.com/wp-content/uploads/2021/03/5.5_Equipment_1.jpg",
      },
      {
        id: 4,
        name: "BananaGod",
        picture:
          "https://dengekionline.com/elem/000/001/668/1668071/finalfantasyxiv_020_cs1w1_720x.jpg",
      },
      {
        id: 5,
        name: "BottomStem",
        picture: "",
      },
    ];

    const matchingTeams = computed(() => {
      return teamArray.filter((team) => { return team.name.toLowerCase().includes(search.value.toLowerCase()) })
    })

    return {
      teamArray,
      search,
      matchingTeams
    };
  },
};
</script>
<style lang=""></style>
