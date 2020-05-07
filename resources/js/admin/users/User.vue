<template>
  <div class="container">
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
                aria-label="Start date: activate to sort column ascending"
                style="width: 68px;"
              >Thêm người dùng</th>
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
          <tfoot>
            <tr>
              <th rowspan="1" colspan="1">Tên</th>
              <th rowspan="1" colspan="1">Tuổi</th>
              <th rowspan="1" colspan="1">Ngày đăng ký</th>
              <th rowspan="1" colspan="1">Số lượng video</th>
              <th rowspan="1" colspan="1">Thêm người dùng</th>
              <th rowspan="1" colspan="1">Xóa</th>
            </tr>
          </tfoot>
          <tbody>
            <tr role="row" class="even">
              <td class="sorting_1">Cedric Kelly</td>
              <td>Senior Javascript Developer</td>
              <td>Edinburgh</td>
              <td>22</td>
              <td>2012/03/29</td>
              <td>$433,060</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>