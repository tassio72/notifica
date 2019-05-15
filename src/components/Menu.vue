<template>
    <nav class="menu">
        <ul>
            <router-link to='/consumer' tag='li' active-class='active'>
                <a> <h3> Consumidor </h3> </a>
            </router-link>
            <router-link to='/user' tag='li' active-class='active'>
                <a> <h3> Usuário </h3></a>    
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
        width: 25%;  
        margin: 10px auto;
        padding: 0%;
    }

    .menu ul {
        height: 65px;
    }
    .menu ul li {
        width: 50%;
    }
    
    .menu a {
        text-decoration: none;
        margin: 0%;
    }

    a:hover {
        color: none;
    }


</style>
