<template>
  <div class="container">
    <div class="card-header d-flex">
      <span>
        <i class="fas fa-chart-area"></i>
        Tất cả người dùng
      </span>

      <b-button class="btn btn-danger btn-sm ml-auto" @click="newUserModal">
        <span>
          <i class="fa fa-plus"></i>
        </span> Thêm người dùng
      </b-button>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table
          class="table table-bordered dataTable"
          id="dataTable"
          width="100%"
          cellspacing="0"
          role="grid"
          aria-describedby="dataTable_info"
          style="width: 100%;"
        >
          <thead>
            <tr role="row">
              <th
                class="sorting_asc"
                tabindex="0"
                aria-controls="dataTable"
                rowspan="1"
                colspan="1"
                aria-sort="ascending"
                aria-label="Name: activate to sort column descending"
                style="width: 58px;"
              >Tên</th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="dataTable"
                rowspan="1"
                colspan="1"
                aria-label="Position: activate to sort column ascending"
                style="width: 63px;"
              >Email</th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="dataTable"
                rowspan="1"
                colspan="1"
                aria-label="Office: activate to sort column ascending"
                style="width: 50px;"
              >Số video</th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="dataTable"
                rowspan="1"
                colspan="1"
                aria-label="Age: activate to sort column ascending"
                style="width: 31px;"
              >Quản lý video</th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="dataTable"
                rowspan="1"
                colspan="1"
                aria-label="Salary: activate to sort column ascending"
                style="width: 67px;"
              >Xóa người dùng</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" class="even" v-for="(user, index) in users" :key="index">
              <td class="sorting_1">{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.videos.length }}</td>
              <td>
                <button class="btn btn-primary">
                  <span>
                    <i class="fa fa-edit"></i>
                  </span>
                </button>
              </td>
              <td>
                <button class="btn btn-danger" v-on:click="deleteUser(user)">
                  <span>
                    <i class="fa fa-trash"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="newUser" title="Add New Video" hide-footer>
      <form v-on:submit.prevent="createUser">
        <div class="form-group">
          <label for="name">Enter Name</label>
          <input id="name" class="form-control" placeholder="Enter Name" />
        </div>
        <div class="text-right">
          <button type="button" class="btn btn-danger" v-on:click="hideNewVideoModal">Cancel</button>
          <button type="submit" class="btn btn-success">
            <span class="fa fa-check"></span>Save
          </button>
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
import * as userService from "../../services/user_service";
import * as store from "../../store";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    loadUser: async function() {
      try {
        const response = await userService.getUser();
        this.users = response.data;
        console.log(response);
      } catch (error) {}
    },
    hideNewVideoModal() {
      this.$refs["newUser"].hide();
    },
    newUserModal() {
      this.$refs["newUser"].show();
    }
  },
  mounted() {
    this.loadUser();
  }
};
</script>