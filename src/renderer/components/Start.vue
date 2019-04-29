<template>
    <v-container>
        <v-form v-model="validity" ref="form">
            <v-layout row px-2 mb-3>
            <v-flex mx-2>
                <v-text-field
                    label="Код"
                    v-model="form.code"
                    :rules="[rules.required, rules.number]"
                ></v-text-field>
            </v-flex>
            <v-flex mx-2>
                <v-text-field
                    label="Сума"
                    v-model="form.sum"
                    :rules="[rules.required, rules.number]"
                ></v-text-field>
            </v-flex>
            <v-flex mx-2>
                <v-text-field
                    label="Назва рахунку"
                    v-model="form.title"
                    :rules="[rules.required]"
                ></v-text-field>
            </v-flex>
            <v-flex mx-2>
                <v-select
                    :items="['актив', 'пасив']"
                    label="тип"
                    v-model="form.type"
                ></v-select>
            </v-flex>
                <v-btn color="success" @click="newItem">Додати</v-btn>
            </v-layout>
        </v-form>
        <v-layout text-xs-center wrap>
            <v-flex mb-4 px-3>
                <v-card>
                    <h1 class="title mb-3 pt-4">Активи</h1>
                    <v-list>
                        <v-list-tile v-for="item in active" :key="item.title">
                            <v-chip class="mr-4">{{item.code}}</v-chip>
                            <v-list-tile-content>{{item.title}}</v-list-tile-content>
                            <v-chip color="green" text-color="white" class="font-weight-bold">{{item.sum}} грн</v-chip>
                            <v-btn icon flat color="red" @click="removeAccount(item)">
                                <v-icon>delete</v-icon>
                            </v-btn>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex mb-4 px-3>
                <v-card>
                    <h1 class="title mb-3 pt-4">Пасиви</h1>
                    <v-list>
                        <v-list-tile v-for="item in passive" :key="item.title">
                            <v-chip class="mr-4">{{item.code}}</v-chip>
                            <v-list-tile-content>{{item.title}}</v-list-tile-content>
                            <v-chip color="green" text-color="white" class="font-weight-bold">{{item.sum}} грн</v-chip>
                            <v-btn icon flat color="red" @click="removeAccount(item)">
                                <v-icon>delete</v-icon>
                            </v-btn>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        data: () => ({
            rules: {
                required: value => !!value || 'Обов\'язкове поле',
                number: value => !isNaN(value) || 'Має бути числом'
            },
            validity: false,
            form: {
                code: null,
                sum: null,
                title: null,
                type: 'актив',
            }
        }),
        computed: {
            ...mapState({
                accounts: state => state.accounts.all,
            }),
            ...mapGetters(['active', 'passive'])
        },
        methods: {
            ...mapActions(['removeAccount', 'addAccount']),
            newItem() {
                this.$refs.form.validate()
                if (this.validity === false) return

                const item = {
                    code: this.form.code,
                    sum: this.form.sum,
                    title: this.form.title,
                    type: this.form.type
                }

                this.addAccount(item)
            }
        }
    }
</script>

<style>

</style>
