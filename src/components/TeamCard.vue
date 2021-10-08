<template lang="">
  <div
    class="
      transition
      group
      relative
      mx-8
      mb-6
      bg-gray-200
      rounded-lg
      break-inside
      border-2
      hover:border-red-400
      shadow-2xl
      flex
      items-center
      justify-center
    "
  >
    <div
      class="
        absolute
        flex
        items-center
        justify-center
        duration-500
        ease-in-out
        bottom-0
        left-0
        w-full
        h-10
        -inset-y-5
        opacity-0
        group-hover:opacity-100
        transition-all
      "
    >
      <router-link :to="{ name: 'Party', params: { teamId: teamId } }">
        <div
          class="
            bg-red-400
            ring-red-500
            text-white
            rounded-full
            h-8
            w-8
            flex
            mx-2
            items-center
            justify-center
            ring
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </router-link>
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton
          :class="open ? '' : 'text-opacity-90'"
          class="
            inline-flex
            items-center
            px-3
            py-2
            text-base
            font-medium
            text-white
            bg-orange-700
            rounded-md
            group
            hover:text-opacity-100
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-opacity-75
          "
        >
          <div
            class="
              bg-yellow-400
              ring-yellow-500
              text-white
              rounded-full
              h-8
              w-8
              flex
              mx-2
              items-center
              justify-center
              ring
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trophy"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"
              />
            </svg>
          </div>
        </PopoverButton>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel
            class="
              absolute
              z-10
              w-screen
              max-w-sm
              px-4
              mt-3
              transform
              -translate-x-1/2
              left-1/2
              sm:px-0
              lg:max-w-3xl
            "
          >
            <div
              class="
                overflow-hidden
                rounded-lg
                shadow-lg
                ring-1 ring-black ring-opacity-5
              "
            >
              <div class="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="
                    flex
                    items-center
                    p-2
                    -m-3
                    transition
                    duration-150
                    ease-in-out
                    rounded-lg
                    hover:bg-gray-50
                    focus:outline-none
                    focus-visible:ring
                    focus-visible:ring-orange-500
                    focus-visible:ring-opacity-50
                  "
                >
                  <div
                    class="
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      w-10
                      h-10
                      text-white
                      sm:h-12 sm:w-12
                    "
                  >
                    <div v-html="item.icon"></div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">
                      {{ item.name }}
                    </p>
                    <p class="text-sm text-gray-500">
                      {{ item.description }}
                    </p>
                  </div>
                </a>
              </div>
              <div class="p-4 bg-gray-50">
                <a
                  class="
                    flow-root
                    px-2
                    py-2
                    transition
                    duration-150
                    ease-in-out
                    rounded-md
                    hover:bg-gray-100
                    focus:outline-none
                    focus-visible:ring
                    focus-visible:ring-orange-500
                    focus-visible:ring-opacity-50
                  "
                >
                  <span class="flex items-center">
                    <div
                      class="
                        text-yellow-400
                        rounded-full
                        h-8
                        w-8
                        flex
                        mx-2
                        items-center
                        justify-center
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trophy-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"
                        />
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-900">
                      Achievement
                    </span>
                    <p class="block text-sm text-gray-500 ml-4">
                      This is what this team accomplish, assign by mod ??? maybe
                      ??? XIVAPI ??? maybe ??? I don't know yet.
                    </p>
                  </span>
                </a>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
    <img
      class="
        filter
        grayscale
        group-hover:filter-reset
        transition-all
        duration-500
        ease-in-out
      "
      :src="teamPictureSrc"
      alt=""
      srcset=""
    />
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
      ></p>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "@vue/reactivity";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "TeamCard",
  components: { Popover, PopoverButton, PopoverPanel },
  props: {
    teamName: { Type: String, default: "" },
    teamPic: { Type: String, default: "" },
    teamId: { Type: String, default: "" },
  },
  setup(props: any) {
    const teamPictureSrc = computed(() => {
      if (props.teamPic == "")
        return "https://gh.cdn.sewest.net/assets/ident/news/8-ways-celebrate-friendships-final-fantasy-xiv-online/en_US/ff14-shadowbringers.jpg";
      return props.teamPic;
    });

    return {
      teamPictureSrc,
      solutions: [
        {
          name: "The Epic of Alexander (Ultimate)",
          description: "1st January 2099",
          href: "##",
          icon: `
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden='true'
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#FFEDD5" />
              <path
                d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                stroke="#FB923C"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                stroke="#FDBA74"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                stroke="#FDBA74"
                stroke-width="2"
              />
            </svg>
          `,
        },
        {
          name: "Cape Westwind",
          description: "Since dawn of time",
          href: "##",
          icon: `
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#FFEDD5" />
              <path
                d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                stroke="#FB923C"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                stroke="#FDBA74"
                stroke-width="2"
              />
            </svg>
          `,
        },
        {
          name: "The Weapon's Refrain (Ultimate)",
          description: "next week I promise",
          href: "##",
          icon: `
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#FFEDD5" />
              <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
              <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
              <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
              <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
              <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
              <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
            </svg>
          `,
        },
      ],
    };
  },
});
</script>
<style lang=""></style>
