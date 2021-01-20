<template>
  <section class="todo_form">
    <section>
      <RadioButton
        name="disp_state_radio"
        :value="radioVal"
        :options="options"
        @change="changeDispTodos"
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
            <tr v-for="(todo, todoIndex) in sortTodos" :key="todoIndex">
              <td>{{ todo.id }}</td>
              <td>{{ todo.name }}</td>
              <td>
                <button
                  class="button is-primary"
                  @click="changeTaskState(todo)"
                >
                  {{ todo.state }}
                </button>
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
      radioVal: "",
      radioInpt: "",
      sortTodos: [],
      options: [
        {
          label: "すべて",
          value: "all",
          checked: true,
        },
        {
          label: "作業中",
          value: "mainte",
          checked: false,
        },
        {
          label: "完了",
          value: "complete",
          checked: false,
        },
      ],
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
    changeDispTodos(e) {
      this.radioInpt = e.target.value;
      this.setDispTodos(this.todos);
    },
    setDispTodos(dispTodosVal) {
      let sortVal = [];
      if (this.radioInpt === "mainte" || this.radioInpt === "complete") {
        const chkVal = this.radioInpt !== "mainte" ? "実行中" : "完了";
        sortVal = dispTodosVal.filter((todos) => todos.state !== chkVal);
      } else if (this.radioInpt === "all") {
        sortVal = dispTodosVal;
      }
      this.sortTodos = sortVal;
    },
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
      if (!this.radioInpt) {
        this.sortTodos = this.todos;
      } else {
        this.setDispTodos(this.todos);
      }
    },
    changeTaskState(changeTodo) {
      const changeState = changeTodo.state === "実行中" ? "完了" : "実行中";
      changeTodo.state = changeState;
      this.setDispTodos(this.todos);
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
        this.setDispTodos(this.todos);
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
