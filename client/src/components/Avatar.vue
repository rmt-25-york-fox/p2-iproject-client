<template>
  <img style="width: 30px" class="avatar" :src="src" />
</template>

<script>
export default {
  props: { src: { type: String, default: '' } }
}
</script>
