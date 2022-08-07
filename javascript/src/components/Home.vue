<template lang="pug">
.home
    // TopMenu
    // Modals
    // Dialogs

    .home
        h1.centered Ilse's Vault
        h2.centered This is where you find all resources related to
            a( href="https://github.com/ilse-langnar/notebook" )
                p Ilse Lananar's Notebook


    .menu( style="float: left; width: 4%; border: 1px solid #000; " )
        .flex( style="flex-direction: column;" )
            img( src="@/assets/images/home.svg"      style="cursor: pointer; width: 20px; margin-left: 15px;" title="Home Page"  @click="select('home')" )
            img( src="@/assets/images/palette.svg"      style="cursor: pointer; width: 20px; margin-left: 15px; "   title="Go to Daily Notes"  @click="select('themes')" )
            img( src="@/assets/images/brand-css3.svg"      style="cursor: pointer; width: 20px; margin-left: 15px; "   title="Go to Daily Notes"  @click="select('css-snippets')" )
            img( src="@/assets/images/keyboard.svg"      style="cursor: pointer; width: 20px; margin-left: 15px; "   title="Go to Daily Notes"  @click="select('shortcuts')" )
            img( src="@/assets/images/tech-box.svg"      style="cursor: pointer; width: 20px; margin-left: 15px; "   title="Go to Daily Notes"  @click="select('components')" )
            img( src="@/assets/images/home.svg"      style="cursor: pointer; width: 20px; margin-left: 15px; "   title="Go to Daily Notes"  @click="select('home-page')" )
            img( src="@/assets/images/play-card.svg"      style="cursor: pointer; width: 20px; margin-left: 15px; "   title="Go to Daily Notes"  @click="select('items')" )

    // Notifications
    .themes( v-if="ilse.selected === 'themes' " )
        h1.centered Themes

    .css-snippets( v-if="ilse.selected === 'css-snippets' " )
        h1.centered Snippets

    .shortcuts( v-if="ilse.selected === 'shortcuts' " )
        h1.centered Shortcuts

    .components( v-if="ilse.selected === 'components' " )
        h1.centered Components

    .home-page( v-if="ilse.selected === 'home-page' " )
        h1.centered Home Page

    .items( v-if="ilse.selected === 'items' " )
        h1.centered Items

</template>
<script>
// eslint-disable-next-line
const printf                                        = console.log;

// Ilse
    import ilse             from "@/ilse.js"

// Messager
    import Messager                     from "@/classes/Messager.js"

// Components
    import TopMenu          from "@/components/TopMenu.vue"
    import Modals           from "@/components/Modals.vue"
    import Dialogs          from "@/components/Dialogs.vue"
    import Notifications    from "@/components/Notifications.vue"

export default {

    name: "Home",

    components: {
        TopMenu,

        Modals,
        Dialogs,

        Notifications,
    },

    data() {
        return {
            ilse: ilse,
            key: Math.random(),
            selected: ilse.selected,
        }
    },

    methods: {

        select( id ) {
            printf( "before -> ilse.selected -> ", ilse.selected )
            ilse.selected = id
            printf( "after -> ilse.selected -> ", ilse.selected )
        },

        setup() {

        },
    },

    mounted() {
        this.setup();
    },

}
</script>
<style>

:root,
.ilse[data-theme='light'] {

    --background-color: #fff;
    --background-color: #E9E9E9;

    --text-color: #4a4a4a;
    --text-color: #BABABA;
    --text-color: #717171;


    --border: 1px solid #4a4a4a;
    --border-radius: 6px;
    --padding: 4px;
}

.ilse[data-theme="dark"] {

    --background-color: #000;
    --background-color: #212121;
    --background-color: #181C20;
    --background-color: #0E1011;

    --background-color: #252a2cff;

    --background-color: #131313ff;

    --text-color: #fff;
    --text-color: #F8F8F8;

    --border: 2px solid #777;
    --border-radius: 6px;
    --padding: 4px;
    --box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.ilse  {
    color: var( --text-color );
    background: var( --background-color ) !important;
    min-height: 100vh;
}


.flex img {
    margin-bottom: 30px;
}

</style>
