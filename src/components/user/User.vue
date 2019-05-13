<template>
    <div class="dashboard">
        <b-card class="new-consumer">

			<b-form-group label="ID:">
				<b-form-input type="text" size='lg'
					v-model="consumer.id"
					placeholder="Qual o ID?">
				</b-form-input>
			</b-form-group>

			<b-form-group label="Andar:">
				<b-form-input type="text" size='lg'
					v-model="consumer.andar"
					placeholder="Qual andar?">
			    </b-form-input>
            </b-form-group>
            
            <b-form-group label="Cabine:">
				<b-form-input type="text" size='lg'
					v-model="consumer.cabine"
					placeholder="Qual cabine?">
                </b-form-input>
            </b-form-group>
         

			<hr>

			<b-button @click="notificarConsumer" variant="primary" class="mt-3" > Notificar! </b-button>
			
		</b-card>

       <!--Dados dos notificados-->

        <b-list-group  class="old-consumer" horizontal> 

                <b-list-group-item class="each-consumer m-2"  v-for='(consumer, chave) in consumers' :key="chave">
                    
                    <!--informações-->
                    <div class="data-consumer">
                        <h2> <strong> {{ consumer.id }}  </strong> </h2>
                        <h6>  <strong> andar: </strong> {{ consumer.andar }}  </h6> 
                        <h6><strong> cabine: </strong> {{ consumer.cabine }} </h6>
                    </div>

                    <!--botões-->
                    <div>

                        <b-button @click="editar(id)" variant="warning"> editar </b-button>
                        <b-button class="ml-2" @click="excluir(id)" variant="success"> Retornou </b-button>

                    </div>
                </b-list-group-item>


		</b-list-group>
            

    </div>
</template>

<script>
export default {
    data() {
        return {
            consumers: [{id: 33, andar:12, cabine:2}, {id: 33, andar:12, cabine:2}, {id: 33, andar:12, cabine:2}, {id: 33, andar:12, cabine:2}],
            consumer: {
                id: 44,
                andar: 12,
                cabine: 2
            }
        }
    },
    methods: {
        // notificarConsumer() {
		// 	this.$http.get('usuarios.json').then(res => {
		// 			this.usuarios = res.data
				
		// 	})

		// }
    }
 
}
</script>

<style>
    .dashboard {
        width: 95%;
        height: 700px;
        margin: 0 auto;
        display: flex;
    }

    .new-consumer {
        height: 410px;
    }

    .old-consumer {
        display: flex;
        flex-wrap: wrap;
        background-color: black;
        flex-grow: 1;
    }

    .old-consumer .each-consumer {
        height: 250px;
        width: 200px;
  
    }
    .old-consumer .data-consumer {
        display: flex;
        flex-wrap: wrap;
        
    }

    .old-consumer .data-consumer h2 {
       width: 100%;
       
      
    } 
</style>
