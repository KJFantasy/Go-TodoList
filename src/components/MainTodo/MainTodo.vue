<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="创建待办事项"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <input class="addButton" type="button" value="创建" @click="addTodo" />
    <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearCompleted="handleClear"
    ></todo-info>
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  let id = 0;

  export default {
    name: 'MainTodo',
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: '所有'
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return

        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false
        })
        this.content = ''
      },
      handleDeleteItem(id) {
        this.todoData.splice(this.todoData.findIndex(item => item.id === id), 1)
      },
      handleToggleState(state) {
        this.filter = state
      },
      handleClear() {
        this.todoData = this.todoData.filter(item => item.completed == false)
      }
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            item => item.completed == false
          ).length
        }
      }
    },
    computed: {
      filterData() {
        switch (this.filter) {
          case '所有':
            return this.todoData
            break
          case '未完成':
            return this.todoData.filter(item => item.completed == false)
            break
          case '已完成':
            return this.todoData.filter(item => item.completed == true)
            break
        }
      }
    },
    components: {
      TodoItem,
      TodoInfo
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    border-radius: 10px
    box-shadow: 0 0 5px #666

  .add-todo
    padding: 16px 16px 16px 36px
    width: 82%
    font-size: 24px
    font-weight: inherit
    font-family: inherit
    color: $fontColor
    border: none
    outline: none
    box-sizing: border-box
    border-top-left-radius: 10px

  .addButton
    border-radius: 6px
    color: #fff
    font-size: 16px
    background-color: $buttonColor
    padding: 8px 30px 8px 30px
    outline: none
    font-weight: 600
    cursor: pointer
</style>