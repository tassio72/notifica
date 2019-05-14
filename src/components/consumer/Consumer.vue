<template>
    <div class="cards">

        <h2>Lista de chamada</h2>
        <b-article>
            
                <transition-group name="slide" tag="div" class="old-consumer" mode="out-in">
                    <b-list-group-item class="each-consumer m-2"  v-for='(consumer, chave) in consumers' :key="chave">
                        
                        <!--informações-->
                        <div class="data-consumer">
                            <h1> <strong> {{ consumer.id }}  </strong> </h1>
                            <h4 class="mt-2">  <strong> Andar: </strong> {{ consumer.andar }}  </h4> 
                            <h4><strong> Cabine: </strong> {{ consumer.cabine }} </h4>
                        </div>

                    
                    </b-list-group-item>

                 </transition-group>  
           
        </b-article>

    </div>
</template>

<script>
export default {
    data() {
        return {
            consumers: [],
            consumer: {
                id: '',
                andar: '',
                cabine: ''
            },
            chave: null

        }
    },
    methods: {
         obterConsumer() {
            this.$http.get('consumers.json').then(res => {
                    this.consumers = res.data
            })
        },
    },
    created() {
        this.obterConsumer()
    },
    mounted() {
        setInterval(() => {
            this.obterConsumer()
            
        }, 5000);
    }
}
</script>

<style>

    .cards {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        
    }

</style>
