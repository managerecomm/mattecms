<?php

use Illuminate\Database\Seeder;

class ResourceCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [];

        $name = 'Сайт';

        $categories[] = [
            'parent'    => 0,
            'uri'       => 'site',
            'name'      => $name,
            'pagetitle' => 'Корневая категория ресурсов',
            'title'     => 'Корневая категория ресурсов',
            'published' => 1,
        ];

        for($i = 1; $i <= 10; $i++){
            $name = 'Категория ресурсов '.$i;
            $parent = ($i > 4) ? rand(1,4) : 1;
            $categories[] = [
                'parent'    => $parent,
                'uri'       => Str::slug($name),
                'name'      => $name,
                'pagetitle' => $name,
                'title'     => $name,
                'published' => 1,
            ];
        }

        DB::table('resource_categories')->insert($categories);
    }
}
