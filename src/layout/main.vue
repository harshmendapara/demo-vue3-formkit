<template>
    <div>
        <HeaderPartial/>
        <router-view />
    </div>
</template>
<script>
import HeaderPartial from '../components/HeaderPartial.vue'
export default {
    components: { HeaderPartial },
    name:'MainLayout'
}
</script>