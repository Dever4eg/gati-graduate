<template>
    <v-container>
        <v-layout text-xs-center wrap>
            <v-flex mb-4 pr-3>
                <v-card>
                    <h1 class="title mb-3 pt-4">Активи</h1>
                    <v-list>
                        <v-list-tile
                                v-for="item in active"
                                :key="item.title"
                        >
                            <v-list-tile-content>
                                {{item.code}}
                                {{item.title}}
                                {{item.sum}}
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex mb-4 pl-3>
                <v-card>
                    <h1 class="title mb-3 pt-4">Пасиви</h1>
                    <v-list>
                        <v-list-tile
                                v-for="item in active"
                                :key="item.title"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            active: [],
            passive: []
        }),
        mounted: function () {
            this.active.push({
                code: 231,
                title: "Будиле авуткул",
                sum: 20000
            });
            this.active.push({
                code: 231,
                title: "Будиле авуткул",
                sum: 20000
            });
            this.passive.push({
                code: 231,
                title: "Будиле авуткул",
                sum: 20000
            });
            this.active.push({
                code: 231,
                title: "Будиле авуткул",
                sum: 20000
            });
        }
    }
</script>

<style>

</style>
