<template>
    <div class="columns is-multiline">
        
        <div 
            v-for="exchange in exchanges"
            :key="exchange.id"
        
            class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
                <div class="item post-card bottom-border">

                    <a class="item-link" href="#">

                        <figure class="image is-2by1 item-figure background-img" 

                        :style="{ 'background-image': `url(${exchange.image})` }"
                        alt="image">

                        </figure>

                        <div class="item-featured">
                        Icon
                        </div>

                    </a>
                
                    <!-- ToDo: Create custom key from tag -->
                    <div class="item-tags">
                        <a 
                            v-for="tag in exchange.tags"
                            :key="tag"
                            class="button is-rounded" 
                            href="#" 
                            title="Some Title">#{{tag}}
                        </a>
                    </div>
                    
                    <!-- 4. Display exchange title -->
                    <h2
                    class="title item-title is-size-4 has-text-weight-extra-bold">
                    <a class="item-link" href="#">{{exchange.title}}</a>
                    </h2>
                    
                    <div class="level">
                        <div class="level-left">
                            <!-- Dont worry about author, TODO: finish later -->
                            <div class="item-author">Filip Jerga</div>
                        </div>
                        <!-- Dont worry about date, TODO: finish later -->
                        <div class="level-right">
                            27th December 2019
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    exchanges: {
      type: Array,
      required: true
    }
  }
}
</script>






