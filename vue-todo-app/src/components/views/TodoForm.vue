<template>
  <section class="todo_form">
    <h1>Todoリスト</h1>
    <DispTaskRadio />
    <section class="disp_task_lists">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, taskIndex) in todos" :key="taskIndex">
            <td>{{ task.id }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.state }}</td>
            <td>
              <button class="button is-danger">{{ task.delete }}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2>新規タスクの追加</h2>
    <InptTaskText
      class="input is-size-10"
      inptActGuide="新しいタスクを入力してください"
      :value="inptTask"
      @input="createTask"
    />
    <AddTaskBtn class="button is-primary" action="追加" @click="addNewTask" />
  </section>
</template>

<script>
import DispTaskRadio from "../elements/DispTaskRadio";
import InptTaskText from "../elements/InptTaskText";
import AddTaskBtn from "../elements/AddTaskBtn";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoForm",
  components: {
    DispTaskRadio,
    InptTaskText,
    AddTaskBtn,
  },
  computed: {
    ...mapGetters({
      todos: "todos",
      inptTask: "inptTask",
    }),
  },
  methods: {
    ...mapActions({
      addNewTask: "addNewTask",
      createTask: "createTask",
    }),
  },
};
</script>

<style scoped></style>
