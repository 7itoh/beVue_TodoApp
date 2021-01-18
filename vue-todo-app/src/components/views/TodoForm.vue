<template>
  <section class="todo_form">
    <section>
      <RadioButton
        name="disp_state_radio"
        id="all"
        value="all"
        action="すべて"
        checked="checked"
      />
      <RadioButton
        name="disp_state_radio"
        id="mainte"
        value="mainte"
        action="作業中"
      />
      <RadioButton
        name="disp_state_radio"
        id="complete"
        value="complete"
        action="完了"
      />
    </section>
    <section class="field">
      <section class="disp_task_lists">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>コメント</th>
              <th>状態</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, todoIndex) in todos" :key="todoIndex">
              <td>{{ todo.id }}</td>
              <td>{{ todo.name }}</td>
              <td>
                <button class="button is-primary">{{ todo.state }}</button>
              </td>
              <td>
                <button class="button is-danger" @click="addDelTask(todo)">
                  削除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    <h2>新規タスクの追加</h2>
    <InptText
      class="input"
      placeholder="新しいタスクを入力してください"
      :value="inptTask"
      @change="inptTask = $event.target.value"
    />
    <BaseButton
      class="button is-primary"
      action="追加"
      @click="addNewTask"
      :disabled="IsValue()"
    />
  </section>
</template>

<script>
import InptText from "../elements/InptText";
import BaseButton from "../elements/BaseButton";
import RadioButton from "../elements/RadioButton";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoForm",
  data() {
    return {
      inptTask: "",
    };
  },
  components: {
    InptText,
    BaseButton,
    RadioButton,
  },
  computed: {
    ...mapGetters({
      todos: "todos",
    }),
  },
  methods: {
    ...mapActions({
      setNewTask: "setNewTask",
      delTask: "delTask",
    }),
    addNewTask() {
      let length = this.todos.length;
      length = length === 0 ? 1 : this.todos.length + 1;
      const todo = {
        id: length,
        name: this.inptTask,
        state: "実行中",
      };
      this.inptTask = "";
      this.setNewTask(todo);
    },
    addDelTask(delTodo) {
      const commitCheck = window.confirm(
        `Delete the Task id: ${delTodo.id} name: ${delTodo.name} Are You OK?`
      );
      if (commitCheck) {
        const taskFilter = this.todos.filter(
          (todos) => todos.id !== delTodo.id
        );
        const resetTodos = [];
        taskFilter.forEach((todo, id) => {
          id = id === 0 ? 1 : id + 1;
          const resetTodo = {
            id: id,
            name: todo.name,
            state: todo.state,
          };
          resetTodos.push(resetTodo);
        });
        this.delTask(resetTodos);
      }
    },
    IsValue() {
      const inptTaskChk = /\S/g;
      return !this.inptTask || !inptTaskChk.test(this.inptTask);
    },
  },
};
</script>

<style scoped>
th {
  padding-right: 10px;
}
td {
  padding-top: 10px;
  padding-right: 10px;
}
</style>
