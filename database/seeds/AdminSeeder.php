<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' => 'HoangPhi',
            'email' => 'hoangcaophi@gmail.com',
            'password' => bcrypt('hoangphi'),
            'role' => 'administractor'

        ]);
    }
}
