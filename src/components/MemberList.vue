<template >
    <div
        class="flex flex-wrap justify-center w-screen pt-10 overflow-y-auto gap-x-12 gap-y-8 md:gap-x-10 mx-auto pb-96 md:pb-60"
        style="height: 100%"
    >
        <MemberCard
            profilePic="https://pbs.twimg.com/profile_images/1297155239133544453/598cnZFD_400x400.jpg"
            twitterSrc="https://twitter.com/PeasantXIV"
            animationDelay="1"
            lodeStone="6455202"
        ></MemberCard>
        <MemberCard
            profilePic="https://pbs.twimg.com/profile_images/1188497791275847680/-DrQVbly_400x400.jpg"
            twitterSrc="https://twitter.com/Sindalf"
            animationDelay="1.5"
            lodeStone="1583960"
        ></MemberCard>
        <MemberCard
            profilePic="https://cdn.discordapp.com/avatars/49249729237745664/acf02ccf4304a8706e1dac4af5ce455e.webp?size=128"
            twitterSrc="https://twitter.com/_Kionu_"
            youtubeSrc="https://www.youtube.com/user/xkadinx"
            animationDelay="2"
            lodeStone="2500630"
        ></MemberCard>
        <MemberCard
            profilePic="https://pbs.twimg.com/profile_images/1349807474031939587/gn7WB6FM_400x400.jpg"
            twitterSrc="https://twitter.com/Ara_Hoshizora"
            animationDelay="2.5"
            lodeStone="1826381"
        ></MemberCard>
        <MemberCard
            profilePic="https://pbs.twimg.com/profile_images/906667510971359232/vyy8dj7V_400x400.jpg"
            twitterSrc="https://twitter.com/yomikadoneko"
            animationDelay="3"
            lodeStone="8856251"
        ></MemberCard>
        <MemberCard
            profilePic="https://pbs.twimg.com/profile_images/1277703728078950400/W5Oc5BIk_400x400.png"
            twitterSrc="https://twitter.com/Phantom_xiv"
            animationDelay="3.5"
            lodeStone="8014568"
        ></MemberCard>
        <MemberCard
            profilePic="https://pbs.twimg.com/profile_images/1196157469178744832/6RDSD2-P_400x400.jpg"
            twitterSrc="https://twitter.com/FFsfia"
            twitchSrc="https://www.twitch.tv/sfia"
            youtubeSrc="https://www.youtube.com/channel/UC5hfA-E66fLH9HVD5vuMdbQ"
            animationDelay="4"
            lodeStone="1549390"
        ></MemberCard>
        <MemberCard animationDelay="4.5" lodeStone="1569569"></MemberCard>
        <MemberCard
            profilePic="https://cdn.discordapp.com/avatars/49356348332179456/aada38e9e61fa1b76cff5ecbfd29598f.webp?size=128"
            twitterSrc="https://twitter.com/cleeeees"
            twitchSrc="https://www.twitch.tv/clees"
            youtubeSrc="https://www.youtube.com/c/Clees/"
            animationDelay="5"
            lodeStone="6623189"
        ></MemberCard>
    </div>
</template>
<script lang="ts">
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
    name: 'MemberList',
    components: {
        MemberCard: defineAsyncComponent(() => import('../components/MemberCard.vue'))
    },
    async setup() {
    }
}
</script>
<style lang="">
    
</style>