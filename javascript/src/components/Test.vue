<template lang="pug">
.home
    TopMenu
    Modals
    Dialogs
    // Notifications
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
        }
    },

    methods: {

        open_shortcuts() {
            ilse.modals.open( "keyboard-shortcut" )
        },

        get_data_theme() {
            let theme = ilse.config.dark ? 'dark' : 'light'
            return theme
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

</style>
