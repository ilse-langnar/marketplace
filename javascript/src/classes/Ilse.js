const printf                        = console.log

// Classes
    import KeyboardShortcut             from "@/classes/KeyboardShortcut.js"
    import Utils                        from "@/classes/Utils.js"
    import Commands                     from "@/classes/Commands.js"
    import Cache                        from "@/classes/Cache.js"
    import Clipboard                    from "@/classes/Clipboard.js"

    // UI Elements
        import Modals                       from "@/classes/Modals.js"
        import Notification                 from "@/classes/Notification.js"
        import Dialog                       from "@/classes/Dialog.js"

// Utilities
    import Messager                     from "@/classes/Messager.js"

// Entry point for our app, there is only one ilse in the entire app, this is the glue for everything else + components
export default class Ilse {

    constructor() {

        this.components             = []
        this.selected               = "home"
        this.name                   = "Ilse Langnar's Notebook"

        // Init
            this.setup()
    }

    setup() {

        // Utils
            this.utils                  = new Utils()
            this.cache                  = new Cache()

        // Clipboard
            this.clipboard              = new Clipboard()

        // UI Elements
            this.modals                 = new Modals()
            this.notification           = new Notification()
            this.dialog                 = new Dialog()


        this.commands               = new Commands()
        this.keyboard               = new KeyboardShortcut(this)
    }

    reload() {
        this.key = Math.random()
    }

    update_key( key ) {
        this.keys[key] = Math.random().toString()
    }

}
