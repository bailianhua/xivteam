<template lang="">
  <h1 class="text-gray-100 text-4xl self-center mt-4">
    FFXIV FULL PARTY
    <div class="fixed flex right-6 top-0 mt-4 space-x-4">
      <span
        class="cursor-pointer"
        @click="showAddTeamModal = !showAddTeamModal"
      >
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
    <div class="mx-auto flex flex-wrap items-center justify-center">
      <team-card
        class="max-w-xl"
        v-for="team in matchingTeams"
        :teamId="team.id"
        :teamName="team.name"
        :teamPic="team.pic"
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
              class="
                inline-block
                w-full
                max-w-md
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                rounded-2xl
              "
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
                >Create New Team</DialogTitle
              >
              <form @submit.prevent="addTeam">
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Name</p>
                  <input type="text" v-model.trim="newTeam.name" />
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Password</p>
                  <input type="text" v-model.trim="newTeam.pass" />
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Team Image</p>
                  <input type="text" v-model.trim="newTeam.pic" />
                </div>

                <div class="mt-4">
                  <button
                    class="
                      inline-flex
                      justify-center
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-blue-900
                      bg-blue-100
                      border border-transparent
                      rounded-md
                      hover:bg-blue-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-offset-2
                      focus-visible:ring-blue-500
                    "
                  >
                    Add!
                  </button>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script lang="ts">
import { computed, reactive, ref } from "@vue/reactivity";
import TeamCard from "../components/TeamCard.vue";
import { createTeam, loadTeams } from "../firebase";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    TeamCard,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  async setup() {
    const newTeam = reactive({
      name: "",
      pass: "",
      pic: "",
    });
    const search = ref("");
    const showAddTeamModal = ref(false);
    let teams = loadTeams();
    let matchingTeams = computed(() => {
      return teams.value.filter((team: any) => {
        return team?.name?.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    async function addTeam() {
      await createTeam({ ...newTeam });
      newTeam.name = "";
      newTeam.pic = "";
      newTeam.pass = "";
      showAddTeamModal.value = false;
    }

    return {
      teams,
      search,
      matchingTeams,
      showAddTeamModal,
      newTeam,
      addTeam,
    };
  },
};
</script>
<style lang=""></style>
