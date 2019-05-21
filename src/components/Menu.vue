<template>
    <nav class="menu">
        <ul>
            <router-link to='/consumer' tag='li' >
                <a> <i class="fas fa-desktop icons"></i> </a>
            </router-link>
           
            <router-link to='/user' tag='li' active-class='active'>
                <a active-class='active'> <i class="fas fa-user icons"></i></a>    
            </router-link>
            
        </ul>
       
    </nav>
</template>
<script>
export default {

}
</script>

<style scoped>
  
   

    /* .menu ul {
        height: 65px;
        min-width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    } */
    /* .menu ul li {
        width: 50%;
        background-color: none;
        
    } */

    /* .icons {
       font-size: 30px;
    } */
/*     
    .menu a {
        text-decoration: none;
        margin: 0%;
        padding: 0%;
        
    } */

    /* a:hover {
        color: none;
    } */


</style>
