<template>
    <div class="instrucao">
        
        <img class="mt-4" src="https://img.icons8.com/color/96/000000/alarm.png">
        <div>
            <h1 class="mt-4 mb-4">Notificador</h1>
            <hr>
            <h4 class="mb-4"> Clique em Usuário [ <router-link to='/user' tag='span' > <a> <i class="fas fa-user icon"></i> </a> </router-link> ] para ter acesso ao dashboard, onde poderá gerenciar e notificar os consumidores que estão na sala de espera.</h4>
            <h4> Já na sala de espera, onde estão os consumidores, navegue para tela de notificações clicando no botão
                <router-link to='/consumer' tag='span' > <a> <i class="fas fa-desktop"></i> </a> </router-link>. <br>
            Nessa tela, os consumidores serão notificados quando tiverem que retornar as cabines.  </h4>
        </div>

    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
    h4 {
        color: white;
    }
    
    hr {
        background: white;
        width: 25%;
    }

    i {
        color: white;
    }
</style>
