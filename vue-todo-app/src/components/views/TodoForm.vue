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
                <button class="button is-danger">{{ todo.delete }}</button>
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
      @input="createTask"
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
  components: {
    InptText,
    BaseButton,
    RadioButton,
  },
  computed: {
    ...mapGetters({
      todos: "todos",
      inptTask: "inptTask",
    }),
  },
  methods: {
    ...mapActions({
      setNewTask: "setNewTask",
      createTask: "createTask",
    }),
    addNewTask() {
      let length = this.todos.length;
      length = length === 0 ? 1 : this.todos.length + 1;
      const todo = {
        id: length,
        name: this.inptTask,
        state: "実行中",
        delete: "削除",
      };
      this.inptTask = "";
      this.setNewTask(todo);
    },
    IsValue() {
      const inptTaskChk = /\S/g;
      return !this.inptTask || !inptTaskChk.test(this.inptTask) ? true : false;
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
