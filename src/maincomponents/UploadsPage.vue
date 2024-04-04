<template>
    <div>
        <div class="d-flex justify-content-between p-2">
            <p class="text-muted">Void Reports</p>
            <div>
                <v-menu transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn color="danger" class=" v-btn bg-danger text-white" v-bind="props"> Actions </v-btn>
                    </template>
                    <v-list>
                        <v-list-item prepend-icon="mdi-arrow-u-down-right" title="Reupload" value="Reupload">
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-trash-can-outline" title="Delete" value="Delete">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>

        <v-card>
            <div class="row mt-3 p-2">
                <div class="col-2">
                    <v-text-field type="date" density="compact" variant="solo"></v-text-field>
                </div>
                <div class="col-2">
                    <!-- <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> -->
                    <v-select label="Status"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="solo"
                        density="compact"></v-select>
                </div>
                <div class="col-2">
                    <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Search templates"
                        variant="solo" hide-details single-line></v-text-field>
                    <!-- <input type="search" class="form-control" /> -->
                    <!-- <v-toolbar class="px-2">
          <v-text-field v-model="search" density="comfortable" placeholder="Search" prepend-inner-icon="mdi-magnify"
            style="max-width: 300px" variant="solo" clearable hide-details></v-text-field>
        </v-toolbar> -->
                </div>
            </div>
            <v-data-table :headers="headers" :items="desserts" item-value="name" select-strategy="single"
                show-select></v-data-table>
        
        </v-card>
        <input type=" file"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            headers: [
                {
                    title: "Dessert (100g serving)",
                    align: "start",
                    key: "name",
                },
                { title: "Calories", align: "end", key: "calories" },
                { title: "Fat (g)", align: "end", key: "fat" },
                { title: "Carbs (g)", align: "end", key: "carbs" },
                { title: "Protein (g)", align: "end", key: "protein" },
                { title: "Iron (%)", align: "end", key: "iron" },
            ],
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: 1,
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: 1,
                },
                {
                    name: "Eclair",
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: 7,
                },
                {
                    name: "Cupcake",
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: 8,
                },
                {
                    name: "Gingerbread",
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: 16,
                },
                {
                    name: "Jelly bean",
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: 0,
                },
                {
                    name: "Lollipop",
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: 2,
                },
                {
                    name: "Honeycomb",
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: 45,
                },
                {
                    name: "Donut",
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: 22,
                },
                {
                    name: "KitKat",
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: 6,
                },
            ],
        };
    },
};
</script>
