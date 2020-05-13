<template>
  <div class="container">
    <br />
    <div class="jumbotron">
      <h1>Welcome, Admin</h1>
    </div>
    <div class="row">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-6 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >QUẢN LÝ NGƯỜI DÙNG</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
              </div>
              <div class="col-auto">
                <i class="fas fa-users fa-2x text-gray-300"></i>
              </div>
              <router-link to="admin/users" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-6 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">QUẢN LÝ VIDEO</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
              </div>
              <div class="col-auto">
                <i class="fas fa-video fa-2x text-gray-300"></i>
              </div>
              <router-link to="/admin/videos" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
      </div>
            <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-6 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">QUẢN LÝ CATEGORY</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
              </div>
              <div class="col-auto">
                <i class="fas fa-video fa-2x text-gray-300"></i>
              </div>
              <router-link to="/admin/categories" class="stretched-link"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>