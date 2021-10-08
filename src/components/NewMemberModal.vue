<template lang="">
  <div
    class="
      flex
      animate-fade-in-up
      w-40
      shadow-xl
      border-4
      bg-transparent
      filter
      grayscale
      hover:filter-reset
      border-green-700
      cursor-pointer
    "
    style="height: 500px"
    @click="isOpen = true"
  >
    <PlusCircleIcon
      class="h-20 w-20 text-green-700 self-center mx-auto"
    ></PlusCircleIcon>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="isOpen = !isOpen">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-in"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-opacity-30 bg-black" />
          </TransitionChild>
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
            <form @submit.prevent="addCard">
              <div
                class="
                  border border-blue-300
                  shadow
                  rounded-md
                  p-4
                  max-w-sm
                  w-full
                  mx-auto
                "
              >
                <div class="my-2">
                  <p>Lodestone:</p>
                  <input
                    type="text"
                    class="rounded underline w-full font-sans"
                    v-model="lodestone"
                  />
                </div>
              </div>
              <div class="mt-4">
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-yellow-900
                    bg-yellow-100
                    border border-transparent
                    rounded-md
                    hover:bg-yellow-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                    focus-visible:ring-blue-500
                  "
                  @click="isOpen = false"
                >
                  Close window
                </button>
                <button
                  class="
                    inline-flex
                    justify-center
                    px-4
                    py-2
                    mx-2
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
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script lang="ts">
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { defineComponent, ref } from "@vue/runtime-core";
import { PlusCircleIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "newmembercard",
  props: {
    show: Boolean,
  },
  components: {
    TransitionChild,
    TransitionRoot,
    Dialog,
    DialogOverlay,
    PlusCircleIcon,
  },
  emits: ['submitted'],
  setup(props, context) {
    let isOpen = ref(props.show);
    let name = ref("");
    let profilepic = ref("");
    let lodestone = ref("");

    return {
      isOpen,
      name,
      profilepic,
      lodestone,
      addCard: () => {
        isOpen.value = false
        const newCard = {
          name: name.value,
          profilePic: profilepic.value,
          lodeStone: lodestone.value
        }
        context.emit('submitted', newCard)
      },
    };
  },
});
</script>
<style lang=""></style>
