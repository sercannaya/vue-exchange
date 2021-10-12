<template>
        <header class="header">
            <nav 
            class="navbar"
            :class="$route.path === '/' ? '' : 'with-background' ">
                <div class="container">

                    <div class="navbar-brand">
                        <a 
                            @click="alertMessage()"
                            class="navbar-item has-text-white is-size-2 has-text-weight-bold" 
                            href="#">
                            {{ brandName }}
                        </a>
                        <span role="button" tabindex="0" class="navbar-burger burger has-text-white" data-target="navbar-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <div id="navbar-menu" class="navbar-menu">
                        <div class="navbar-end">
                            <router-link 
                                v-for="menu_item in menu_items"
                                :key="menu_item.text"
                                :to="menu_item.link"

                                class="navbar-item nav-home">{{ menu_item.text }}</router-link>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
</template>

<script>

    export default {
        //props: ['brandName', 'menu_items']
        props: {
            brandName: {
                type: String,
                default: 'Sercan NAYA'
            },
            menu_items: {
                type: Array,
                required: true
            }
        },

        methods: {
            alertMessage(){
                alert(this.$route.path)
            }
        }
    }


</script>







