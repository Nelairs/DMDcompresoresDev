<script setup>
defineProps({
    msg:{
        type: String,
        required:true
    }
})
</script>

<template>
        <div class="flex flex-row items-center   ">
                <div class="bg-gray-700 rounded text-white p-1 z-10">{{msg}} </div>
                <div class="rotate-45 bg-gray-700  w-4 h-4 absolute"></div>
            </div>
</template>