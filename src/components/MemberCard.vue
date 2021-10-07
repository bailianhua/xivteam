<template>
    <div
        class="animate-fade-in-up bg-center group hover:-translate-y-1 hover:scale-110 hover:filter-reset filter grayscale rounded-lg bg-cover bg-no-repeat w-40 shadow-xl border-2 border-yellow-700 bg-gradient-to-t from-grey-900 to-transparent"
        :style="cardStyle"
    >
        <div class="absolute inset-x-0 bottom-0 text-center">
            <div class="m-4 flex justify-around invisible group-hover:visible">
                <a v-if="hasTwitch" :href="twitchSrc" target="_blank">
                    <img
                        src="https://cdn.cdnlogo.com/logos/t/46/twitch-icon.svg"
                        class="rounded-full h-8 w-8"
                    />
                </a>
                <a v-if="hasTwitter" :href="twitterSrc" target="_blank">
                    <img
                        src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg"
                        class="rounded-full h-8 w-8"
                    />
                </a>

                <a v-if="hasYoutube" :href="youtubeSrc" target="_blank">
                    <img
                        src="https://cdn.cdnlogo.com/logos/y/57/youtube-icon.svg"
                        class="rounded-full h-8 w-8"
                    />
                </a>
            </div>
            <div class="h-16 w-16 rounded-full mx-auto mb-2">
                <img
                    :src="profilePic"
                    class="rounded-full ring-yellow-400 ring-2"
                    v-if="hasProfilePic"
                />
            </div>
            <SearchCircleIcon
                class="h-8 w-8 text-yellow-700 inline cursor-pointer group-hover:visible invisible"
                @click="$emit('detailClicked', lodeStone)"
            />
            <p
                class="text-yellow-700 italic font-black text-lg"
                :style="nameStyle"
            >{{ charData.name }}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted, defineComponent } from "vue";
import { SearchCircleIcon } from "@heroicons/vue/solid";
import axios from "axios";
import Person from "../interfaces/Person";

export default defineComponent({
    name: "MemberCard",
    components: { SearchCircleIcon },
    props: {
        cardName: { Type: String, default: "" },
        profilePic: { Type: String, default: "" },
        twitterSrc: { Type: String, default: "" },
        twitchSrc: { Type: String, default: "" },
        youtubeSrc: { Type: String, default: "" },
        animationDelay: { Type: Number, default: "" },
        lodeStone: { Type: String, default: "" },
    },
    computed: {
        hasProfilePic: function () {
            return this.profilePic != "";
        },
        hasTwitch: function () {
            return this.twitchSrc != "";
        },
        hasTwitter: function () {
            return this.twitterSrc != "";
        },
        hasYoutube: function () {
            return this.youtubeSrc != "";
        },
    },
    async setup(props) {
        const randomNumber = function (min: number, max: number): number {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const charData = ref<Person>([]);
        const res: any = await axios.get(
            "https://xivapi.com/character/" + props.lodeStone
        );
        charData.value = {
            name: res.data.Character.Name,
            picture: res.data.Character.Portrait,
        };
        const cardStyle = {
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.47) 33%, rgba(0,0,0,0) 100%),url('${charData.value.picture}')`,
            height: "500px",
            animationDelay: `${props.animationDelay}s`,
            opacity: "0",
            animationFillMode: "forwards",
        };
        const nameStyle = {
            wordSpacing: "9999px",
        };
        return {
            cardStyle,
            nameStyle,
            charData,
        };
    },
});
</script>
<style>
</style>
