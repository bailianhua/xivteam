<template lang="">
  <h1 class="text-gray-100 text-4xl self-center mt-4">
    FFXIV FULL PARTY
    <div class="fixed flex right-1 top-0 mt-4 space-x-4">
    <span class="cursor-pointer" @click="showAddTeamModal = !showAddTeamModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      </span>
    </div>
  </h1>

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
    <TransitionRoot appear :show="showAddTeamModal" as="template">
        <Dialog as="div" @close="showAddTeamModal = !showAddTeamModal">
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0" />
                    </TransitionChild>

                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <div
                            class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                        >
                            <DialogTitle
                                as="h3"
                                class="text-lg font-medium leading-6 text-gray-900"
                            >Create New Team</DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500" >Name</p>
                                <input type="text" v-model.trim="newTeamName"/>
                            </div>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500" >Password</p>
                                <input type="text" v-model.trim="newTeamPass"/>
                            </div>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500" >Team Image</p>
                                <input type="text" v-model.trim="newTeamPic"/>
                            </div>

                            <div class="mt-4">
                                <button
                                    type="button"
                                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    @click="addTeam"
                                >Go !</button>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script lang="ts">
import { computed, ref } from "@vue/reactivity";
import TeamCard from "../components/TeamCard.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

export default {
  components: {
    TeamCard,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  setup() {
    const newTeamName = ref("");
    const newTeamPass = ref("");
    const newTeamPic = ref("");
    const search = ref("");
    const showAddTeamModal = ref(false)
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
      return teamArray.filter((team) => {
        return team.name.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    function addTeam() {
      teamArray.push({
        id: 99,
        name: newTeamName.value,
        picture: newTeamPic.value
      });
      matchingTeams.value.push({
        id: 99,
        name: newTeamName.value,
        picture: newTeamPic.value
      });
      showAddTeamModal.value = false;
    };

    return {
      teamArray,
      search,
      matchingTeams,
      showAddTeamModal,
      newTeamName,
      newTeamPass,
      newTeamPic,
      addTeam
    };
  },
};
</script>
<style lang=""></style>
