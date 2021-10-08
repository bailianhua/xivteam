<template>
    <!-- <div class="fixed z-0 mx-auto h-2/5 overflow-hidden w-full">
        <img :src="teamPictureSrc" class="w-full" />
    </div>-->
    <div class="text-gray-100 text-4xl mt-4 z-10">
        <h1 class="text-center">{{ teamName }}</h1>
        <div class="fixed flex right-6 top-0 mt-4 space-x-4">
            <span class="cursor-pointer" @click="$router.go(-1)">
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
                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                </svg>
            </span>
            <span class="cursor-pointer" @click="showEditModal = !showEditModal">
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </span>
        </div>
    </div>
    <suspense>
        <template #default>
            <div
                class="flex flex-wrap justify-center w-screen pt-10 overflow-y-auto gap-x-12 gap-y-8 md:gap-x-10 mx-auto pb-96 md:pb-60"
                style="height: 100%"
            >
                <MemberList />
            </div>
        </template>
        <template #fallback>
            <div class="text-gray-100 text-4xl mt-10 text-center">Loading...</div>
        </template>
    </suspense>

    <TransitionRoot appear :show="showEditModal" as="template">
        <Dialog as="div" @close="showEditModal = !showEditModal">
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
                            >Edit Team information</DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">Please enter password</p>
                                <input type="text" />
                            </div>

                            <div class="mt-4">
                                <button
                                    type="button"
                                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    @click="showEditModal = !showEditModal"
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
import { ref } from "@vue/reactivity";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue'
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: "Party",
    props: {
        teamId: String,
        teamName: String,
        teamPictureSrc: String
    },
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        DialogTitle,
        MemberList: defineAsyncComponent(() => import('../components/MemberList.vue'))
    },
    setup(props: any) {
        const newmembercard = ref(false);
        const openNewCardModal = () => {
            newmembercard.value = true;
        }
        const showEditModal = ref(false)

        return {
            showEditModal,
            props, openNewCardModal

        }
    }
});
</script>
<style lang=""></style>
