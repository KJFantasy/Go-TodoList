<template>
  <header class="main-header">
    <h1>Go TodoList</h1>
  </header>
</template>

<script>
  export default {
    name: 'MianHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .main-header
    text-align: center

    h1
      margin: 20px
      font-size: 70px
      font-weight: 500
      font-style: italic
      color: $bgColor
      text-shadow: 5px 5px 5px $fontColor
</style>