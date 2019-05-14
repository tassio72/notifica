<template>
    <div class="cards">

        <h1>Lista de chamada</h1>
      
            
        <transition-group name="slide" tag="div" class="old-consumer-view" mode="out-in">
                    <b-list-group-item class="each-consumer-view m-2"  v-for='(consumer, chave) in consumers' :key="chave">
                        
                        <!--informações-->
                        <div class="data-consumer-view">
                            <h1> <strong> {{ consumer.id }}  </strong> </h1>
                            <h4 class="mt-5">  <strong> Andar: </strong> {{ consumer.andar }}  </h4> 
                            <h4><strong> Cabine: </strong> {{ consumer.cabine }} </h4>
                        </div>

                    
                    </b-list-group-item>

         </transition-group>  
           
       

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

    

    .old-consumer-view {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-grow: 1;
    }

    .old-consumer-view .each-consumer-view {
        height: 300px;
        width: 250px;
        background-color: coral;
        padding: 1%;
        border-radius: 8px;


        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .data-consumer-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;

    }

     .old-consumer-view .each-consumer-view .data-consumer-view h1 {
        width: 80%;
        height: 100px;
        flex-grow: 1;       
        background-color: white;
        border-radius: 50%;
        color: coral;
        font-family: 'Baloo Bhai', cursive;
        font-size: 5rem;
        margin: 0%;           


        display: flex;
        justify-content: center;
        align-items: center; 
    } 

    .old-consumer-view .each-consumer-view .data-consumer-view h4 {
        color: white;
        font-family: 'Arial Narrow Bold', sans-serif;
        font-size: 2.3rem;
        
    }
    

</style>
