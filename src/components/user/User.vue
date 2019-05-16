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
				<b-form-input type="number" size='lg'
					v-model="consumer.andar"
					placeholder="Qual andar?">
			    </b-form-input>
            </b-form-group>
            
            <b-form-group label="Cabine:">
				<b-form-input type="number" size='lg'
					v-model="consumer.cabine"
					placeholder="Qual cabine?">
                </b-form-input>
            </b-form-group>


			<hr>

			<b-button @click="notificarConsumer" variant="primary" class="mt-3" > Notificar! </b-button>

            
            <b-alert show dismissible v-for="mensagem in mensagens"
                :key='mensagem.texto'
                :variant="mensagem.tipo">
		    {{ mensagem.texto }}</b-alert>
			
            
		</b-card>

       <!--Dados dos notificados-->
        

           
        <transition-group name="slide" tag="div" class="old-consumer" mode="out-in">
                    <b-list-group-item class="each-consumer m-2"  v-for='(consumer, chave) in consumers' :key="chave">
                        
                        <!--informações-->
                        <div class="data-consumer">
                            <h1> <strong> {{ consumer.id }}  </strong> </h1>
                            <h4 class="mt-2">  <strong> Andar: </strong> {{ consumer.andar }}  </h4> 
                            <h4><strong> Cabine: </strong> {{ consumer.cabine }} </h4>
                        </div>

                        <!--botões-->
                        <div class="botoes">

                            <b-button @click="editar(chave)" variant="warning"> Editar </b-button>
                            <b-button class="mt-2" @click="excluir(chave)" variant="success"> Retornou </b-button>

                        </div>
                    </b-list-group-item>

       
        </transition-group>  

            

         

    </div>
</template>

<script>
export default {
    data() {
        return {
            mensagens: [],
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
        notificarConsumer() {
            const metodo = this.chave ? 'patch' : 'post'
			const finalURL = this.chave ? `/${this.chave}.json` : '.json'

			let texto = this.chave ? 'Dados atualizados' : 'Consumidor notificado'
			
			this.$http[metodo](`/consumers${finalURL}`, this.consumer).
				then(() => {

                    this.obterConsumer()
                    this.limpar()

					this.mensagens.push({
							texto, tipo: 'success'
					})
    
				})
            
        },
        
        obterConsumer() {
            this.$http.get('consumers.json').then(res => {
                    this.consumers = res.data
            })
        },
        editar(chave) {
			//o fato de atribuirmos o id passado na função ao this.id, dará a possibildiade de identificarmos se a estamos salvando um novo user ou alterando um que já esta no banco
			this.chave  = chave
			this.consumer = {...this.consumers[chave]}
        },
        excluir(chave) {
          this.$http.delete(`consumers/${chave}.json`)
                .then(() => {
                    this.limpar()
                    this.obterConsumer()})
                .catch(err => this.mensagens.push({
                    	texto: 'Deu problema',
                    	tipo: 'danger'
                    })
            )


            
        },
        limpar() {
            this.consumer.id = '',
            this.consumer.andar = '',
            this.consumer.cabine = '',
            this.chave = null,
            this.mensagens = []
        },
        
    },
    created() {
        this.obterConsumer()
    }
    
 
}
</script>

<style>
    .dashboard {
        width: 98%;
        height: 700px;
        margin: 0 auto;
        display: flex;
    }

    .new-consumer {
        height: 410px;
        width: 220px;
        margin-top: 7px;
       
    }

    .old-consumer {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;

        width: 90%;
    }

    .old-consumer .each-consumer {
        height: 250px;
        width: 200px;
        background-color: coral;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .data-consumer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;

    }

    .old-consumer .each-consumer .data-consumer h1 {
        width: 80%;
        height: 60px;
        flex-grow: 1;       
        background-color: white;
        border-radius: 3px;
        color: coral;
        font-family: 'Baloo Bhai', cursive;
        margin: 0%;              
    } 

    .old-consumer .each-consumer .data-consumer h4 {
        color: white;
        font-family: 'Baloo Bhai', cursive;
        font-weight: 100;
    }

    .botoes {
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Baloo Bhai', cursive;
       
    }

    /*Transition*/

    @keyframes slide-in {
        from { transform: translateY(40px);}
        to { transform: translateY(0);}
    }

    @keyframes slide-out {
        from { transform: translateY(0);}
        to { transform: translateY(40px);}
    }

    .slide-enter-active {
        animation: slide-in 2s ease;
        transition: opacity 2s;
    }
    .slide-leave-active {
        animation: slide-out 2s ease;
        transition: opacity 2s; 
        position: absolute;
        width: 100%;
    }

    .slide-enter, .slide-leave-to {
        opacity: 0; /*O elemento começa e termina com opacidade 0*/
    }
    
    .slide-move {
	transition: transform 1s; 
    }

</style>
