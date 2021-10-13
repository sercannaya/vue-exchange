<template>
    <div>
    <hero />
    <section class="posts">
        <div class="container">
            <div class="posts-type">Latest Posts</div>
                <exchange-list 
                    :exchanges = "exchanges" 
                />
                <!-- provides exchanges -->
        </div>
    </section>
    <button 
        @click="$store.dispatch('test')"
        class="button is-primary">Test Vuex</button>
    <Pagination />
  </div>
</template>

<script>


    import Hero from '@/components/Hero.vue'
    import Pagination from '@/components/Pagination.vue'
    import ExchangeList from '@/components/exchange/ExchangeList.vue'

    


    export default {
        components: {
            Hero,
            Pagination,
            ExchangeList
        },
        created() {
            this.$store.dispatch('exchange/getExchanges')
        },
        computed: {
            exchanges() {
                return this.$store.state.exchange.items
            }
        }
    }
</script>
