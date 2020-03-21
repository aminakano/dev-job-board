<template>  
    <button>{{ msg }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
button {
    height: 3rem;
    border-radius: 3px;
    background: #6072e1;
    color: #fff;
    border: none;
    outline: none;
    font-size: 1.25rem;
    opacity: 1;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
}
</style>
