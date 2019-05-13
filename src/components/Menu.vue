<template>
    <nav class="menu">
        <ul>
            <router-link to='/consumer' tag='li' active-class='active'>
                <a>Consumidor</a>
            </router-link>
            <router-link to='/user' tag='li' active-class='active'>
                <a> Usuário</a>    
            </router-link>

        </ul>
    </nav>
</template>
<script>
export default {

}
</script>

<style scoped>
    .menu {
        width: 30%;  
        margin: 10px auto;
        }


</style>
