<template >
    <member-card
        v-for="member in members"
        :profilePic="member.profilePic"
        :twitterSrc="member.twitterSrc"
        :twitchSrc="member.twitchSrc"
        :youtubeSrc="member.youtubeSrc"
        :animationDelay="member.animationDelay"
        :lodeStone="member.lodeStone"
        @removeMember="removeMember"
    />
    <new-member-card @submitted="newCard"></new-member-card>
</template>
<script lang="ts">
import { PlusCircleIcon } from "@heroicons/vue/solid";
import { ref } from "@vue/reactivity";
import { defineAsyncComponent } from "@vue/runtime-core";
import MemberCard from "../interfaces/MemberCard";
import NewMemberCard from "../components/NewMemberModal.vue"
export default {
    name: 'MemberList',
    components: {
        MemberCard: defineAsyncComponent(() => import('../components/MemberCard.vue')),
        PlusCircleIcon,
        NewMemberCard,
    },
    setup() {
        const members = ref<MemberCard[]>([
            {
                profilePic: "https://pbs.twimg.com/profile_images/1297155239133544453/598cnZFD_400x400.jpg",
                twitterSrc: "https://twitter.com/PeasantXIV",
                animationDelay: "1",
                lodeStone: "6455202",
                memberId: "1",
                twitchSrc: "",
                youtubeSrc: "",
            },
            {
                profilePic: "https://pbs.twimg.com/profile_images/1188497791275847680/-DrQVbly_400x400.jpg",
                twitterSrc: "https://twitter.com/Sindalf",
                animationDelay: "1.5",
                memberId: "2",
                lodeStone: "1583960",
                twitchSrc: "",
                youtubeSrc: "",
            },
            {
                profilePic: "https://cdn.discordapp.com/avatars/49249729237745664/acf02ccf4304a8706e1dac4af5ce455e.webp?size:128",
                twitterSrc: "https://twitter.com/_Kionu_",
                youtubeSrc: "https://www.youtube.com/user/xkadinx",
                animationDelay: "2",
                lodeStone: "2500630",
                twitchSrc: "",
                memberId: ""
            },
            {
                profilePic: "https://pbs.twimg.com/profile_images/1349807474031939587/gn7WB6FM_400x400.jpg",
                twitterSrc: "https://twitter.com/Ara_Hoshizora",
                animationDelay: "2.5",
                lodeStone: "1826381",
                twitchSrc: "",
                youtubeSrc: "",
                memberId: ""
            },
            {
                profilePic: "https://pbs.twimg.com/profile_images/906667510971359232/vyy8dj7V_400x400.jpg",
                twitterSrc: "https://twitter.com/yomikadoneko",
                animationDelay: "3",
                lodeStone: "8856251",
                twitchSrc: "",
                youtubeSrc: "",
                memberId: ""
            },
            {
                profilePic: "https://pbs.twimg.com/profile_images/1277703728078950400/W5Oc5BIk_400x400.png",
                twitterSrc: "https://twitter.com/Phantom_xiv",
                animationDelay: "3.5",
                lodeStone: "8014568",
                twitchSrc: "",
                youtubeSrc: "",
                memberId: ""
            },
            {
                profilePic: "https://pbs.twimg.com/profile_images/1196157469178744832/6RDSD2-P_400x400.jpg",
                twitterSrc: "https://twitter.com/FFsfia",
                twitchSrc: "https://www.twitch.tv/sfia",
                youtubeSrc: "https://www.youtube.com/channel/UC5hfA-E66fLH9HVD5vuMdbQ",
                animationDelay: "4",
                lodeStone: "1549390",
                memberId: ""
            },
            {
                animationDelay: "4.5",
                lodeStone: "1569569",
                profilePic: "",
                twitterSrc: "",
                twitchSrc: "",
                youtubeSrc: "",
                memberId: ""
            },
            {
                profilePic: "https://cdn.discordapp.com/avatars/49356348332179456/aada38e9e61fa1b76cff5ecbfd29598f.webp?size:128",
                twitterSrc: "https://twitter.com/cleeeees",
                twitchSrc: "https://www.twitch.tv/clees",
                youtubeSrc: "https://www.youtube.com/c/Clees/",
                animationDelay: "5",
                lodeStone: "6623189",
                memberId: ""
            },
        ])
        return {
            members,
            removeMember: (value: any) => {
                alert("to be done with database");

            },
            newCard: (value: any) => {
                members.value.push(value);
            }

        }
    }
}
</script>
<style lang="">
    
</style>