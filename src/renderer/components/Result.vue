<template>
    <v-container>
        <v-btn color="success" @click="$router.push('/start')">Повернутися</v-btn>
        <v-layout class="mx-2" wrap>
            <div>
                <h3>Баланс</h3>
                <p>Звіт про фінансовий стан, форма N 1</p>
            </div>
            <table style="width:100%">
                <tr>
                    <td>Актив</td>
                    <td width="14%">Код рядка</td>
                    <td width="14%">На кінець звітного періоду</td>
                </tr>
                <tr v-for="item in balanceActive" v-bind:class="{'font-weight-bold': item.summary}">
                    <td>
                        <h4 v-if="item.header" class="text-xs-center">{{item.header}}</h4>
                        <span>{{item.title}}</span>
                    </td>
                    <td>{{item.code}}</td>
                    <td>{{item.amount}} грн</td>
                </tr>
            </table>
            <table style="width:100%">
                <tr>
                    <td>Пасив</td>
                    <td width="14%">Код рядка</td>
                    <td width="14%">На кінець звітного періоду</td>
                </tr>
                <tr v-for="item in balancePassive" v-bind:class="{'font-weight-bold': item.summary}">
                    <td>
                        <h4 v-if="item.header" class="text-xs-center">{{item.header}}</h4>
                        <span>{{item.title}}</span>
                    </td>
                    <td>{{item.code}}</td>
                    <td>{{item.amount}} грн</td>
                </tr>
            </table>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data: () => ({
            balanceActive: [],
            balancePassive: []
        }),
        computed: {
            ...mapGetters(['active', 'passive'])
        },
        async mounted() {
            const activeItems = [
                { code: 1000, title: 'Нематеріальні активи', header: 'I. Необоротні активи' },
                { code: 1001, title: 'Сервісна вартість' },
                { code: 1002, title: 'Накопичена амортизація' },
                { code: 1005, title: 'Незавершені капітальні інвестиції' },
                { code: 1010, title: 'Основні засоби' },
                { code: 1011, title: 'Первісна вартість' },
                { code: 1012, title: 'Знос' },
                { code: 1015, title: 'Інвестиційна нерухомість' },
                { code: 1016, title: 'Первісна вартість інвестиційної нерухомості*' },
                { code: 1017, title: 'Знос інвестиційної нерухомості*' },
                { code: 1020, title: 'Довгострокові біологічні активи' },
                { code: 1021, title: 'Первісна вартість довгострокових біологічних активів*' },
                { code: 1022, title: 'Накопичена амортизація довгострокових біологічних активів*' },
                { code: 1030, title: 'Довгострокові фінансові інвестиції: які обліковуються за методом участі в капіталі інших підприємств' },
                { code: 1035, title: 'Інші фінансові інвестиції' },
                { code: 1040, title: 'Довгострокова дебіторська заборгованість' },
                { code: 1045, title: 'Відстрочені податкові активи' },
                { code: 1050, title: 'Гудвіл*' },
                { code: 1090, title: 'Інші необоротні активи' },
                { code: 1095, title: 'Усього за розділом I', summary: true },
                { code: 1100, title: 'Запаси', header: 'II. Оборотні активи' },
                { code: 1101, title: 'Виробничі запаси*' },
                { code: 1102, title: 'Незавершене виробництво*' },
                { code: 1103, title: 'Готова продукція*' },
                { code: 1104, title: 'Товари*' },
                { code: 1110, title: 'Поточні біологічні активи' },
                { code: 1120, title: 'Векселі одержані' },
                { code: 1125, title: 'Дебіторська заборгованість за продукцію, товари, роботи, послуги' },
                { code: 1130, title: 'Дебіторська заборгованість за розрахунками: за виданими авансами' },
                { code: 1135, title: 'з бюджетом' },
                { code: 1140, title: 'Дебіторська заборгованість за розрахунками з нарахованих доходів*' },
                { code: 1145, title: 'Дебіторська заборгованість за розрахунками із внутрішніх розрахунків*' },
                { code: 1155, title: 'Інша поточна дебіторська заборгованість' },
                { code: 1160, title: 'Поточні фінансові інвестиції' },
                { code: 1165, title: 'Гроші та їх еквіваленти' },
                { code: 1166, title: 'Готівка*' },
                { code: 1167, title: 'Рахунки в банках*' },
                { code: 1170, title: 'Витрати майбутніх періодів' },
                { code: 1190, title: 'Інші оборотні активи' },
                { code: 1195, title: 'Усього за розділом II', summary: true },
                { code: 1200, title: '', header: 'III. Необоротні активи, утримувані для продажу, та групи вибуття' },
                { code: 1300, title: 'Баланс', summary: true }
            ]

            const passiveItems = [
                { code: 1400, title: 'Зареєстрований (пайовий) капітал', header: 'I. Власний капітал'},
                { code: 1401, title: 'Внески до незареєстрованого статутного капіталу*'},
                { code: 1405, title: 'Капітал у дооцінках'},
                { code: 1410, title: 'Додатковий капітал'},
                { code: 1411, title: 'Емісійний дохід*'},
                { code: 1412, title: 'Накопичені курсові різниці*'},
                { code: 1415, title: 'Резервний капітал'},
                { code: 1420, title: 'Нерозподілений прибуток (непокритий збиток)'},
                { code: 1425, title: 'Неоплачений капітал'},
                { code: 1430, title: 'Вилучений капітал'},
                { code: 1495, title: 'Усього за розділом I', summary: true},
                { code: 1500, title: 'Відстрочені податкові зобов\'язання', header: 'II. Довгострокові зобов\'язання і забезпечення'},
                { code: 1510, title: 'Довгострокові кредити банків'},
                { code: 1515, title: 'Інші довгострокові зобов\'язання'},
                { code: 1520, title: 'Довгострокові забезпечення'},
                { code: 1525, title: 'Цільове фінансування'},
                { code: 1526, title: 'Благодійна допомога*'},
                { code: 1540, title: 'Призовий фонд*'},
                { code: 1545, title: 'Резерв на виплату джек-поту*'},
                { code: 1595, title: 'Усього за розділом II', summary: true},
                { code: 1600, title: 'Короткострокові кредити банків', header: 'III. Поточні зобов\'язання і забезпечення'},
                { code: 1605, title: 'Векселі видані*'},
                { code: 1610, title: 'Поточна кредиторська заборгованість за: довгостроковими зобов\'язаннями'},
                { code: 1615, title: 'Товари, роботи, послуги'},
                { code: 1620, title: 'Розрахунками з бюджетом'},
                { code: 1625, title: 'Розрахунками зі страхування'},
                { code: 1630, title: 'Розрахунками з оплати праці'},
                { code: 1635, title: 'Поточна кредиторська заборгованість за одержаними авансами*'},
                { code: 1640, title: 'Поточна кредиторська заборгованість за розрахунками з учасниками*'},
                { code: 1645, title: 'Поточна кредиторська заборгованість із внутрішніх розрахунків*'},
                { code: 1660, title: 'Поточні забезпечення'},
                { code: 1665, title: 'Доходи майбутніх періодів'},
                { code: 1690, title: 'Інші поточні зобов\'язання'},
                { code: 1695, title: 'Усього за розділом III', summary: true},
                { code: 1700, title: '', header: 'IV. Зобов\'язання, пов\'язані з необоротними активами, утримуваними для продажу, та групами вибуття'},
                { code: 1900, title: 'Баланс', summary: true }
            ]

            this.balanceActive = activeItems.map(item => {
                item.amount = this.calculateCode(item.code)
                return item
            })
            this.balancePassive = passiveItems.map(item => {
                item.amount = this.calculateCode(item.code)
                return item
            })
        },
        methods: {
            getActive(code) {
                const account = this.active.find(a => parseInt(a.code) === code)
                return account ? parseInt(account.sum) : 0
            },
            getPassive(code) {
                const account = this.passive.find(a => parseInt(a.code) === code)
                return account ? parseInt(account.sum) : 0
            },
            sumActive(codes) {
                return codes.reduce((sum, code) => sum + this.getActive(code), 0)
            },
            sumPassive(codes) {
                return codes.reduce((sum, code) => sum + this.getPassive(code), 0)
            },
            sumCodes(codes) {
                return codes.reduce((sum, code) => sum + this.calculateCode(code), 0)
            },
            calculateCode(code) {
                switch (code) {
                    case 1000: return this.calculateCode(1001) - this.calculateCode(1002)
                    case 1001: return this.sumActive([121, 122, 123, 124, 125, 127])
                    case 1002: return this.getPassive(133)
                    case 1005: return this.sumActive([151, 152, 153, 154, 155])
                    case 1010: return this.getActive(1011) - this.getActive(1012)
                    case 1011: return this.sumActive([101, 102, 103, 104, 105, 106, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117])
                    case 1012: return this.sumPassive([131, 132])
                    case 1015: return this.calculateCode(1017) !== 0 ? this.calculateCode(1016) - this.calculateCode(1017) : this.getActive(100)
                    case 1016: return this.getActive(100)
                    case 1017: return this.getPassive(135)
                    case 1020: return this.sumActive([161, 163, 165])
                    case 1021: return this.sumActive([162, 164, 166])
                    case 1022: return this.getPassive(134)
                    case 1030: return this.getActive(141)
                    case 1035: return this.sumActive([142, 143])
                    case 1040: return this.sumActive([181, 182, 183])
                    case 1045: return this.getActive(17)
                    case 1050: return this.getActive(19)
                    case 1090: return this.getActive(184)
                    case 1095: return this.sumCodes([1000, 1005, 1010, 1015, 1020, 1030, 1035, 1040, 1045, 1050, 1090])

                    case 1100: return this.sumActive([201, 202, 203, 204, 205, 206, 207, 208, 22, 23, 25, 26, 27, 281, 282, 283, 284, 285])
                    case 1101: return this.sumActive([201, 202, 203, 204, 205, 206, 207, 208, 22])
                    case 1102: return this.sumActive([23, 25])
                    case 1103: return this.sumActive([26, 27])
                    case 1104: return this.sumActive([281, 282, 283, 284, 285])
                    case 1110: return this.sumActive([211, 212, 213])
                    case 1120: return this.sumActive([341, 342])
                    case 1125: return this.sumActive([361, 362, 363, 364])
                    case 1130: return this.getActive(371)
                    case 1135: return this.sumActive([641, 642])
                    case 1140: return this.getActive(373)
                    case 1145: return this.sumActive([682, 683])
                    case 1155: return this.sumActive([372, 374, 375, 376, 377, 378, 379, 631, 632, 633, 68, 681, 682, 683, 684, 685, 651, 652, 654, 655, 661, 662, 663])
                    case 1160: return this.getActive(352)
                    case 1165: return this.sumActive([301, 302, 311, 312, 313, 314, 315, 316, 333, 334, 335, 351])
                    case 1166: return this.sumActive([301, 302])
                    case 1167: return this.sumActive([311, 312, 313, 314, 315, 316])
                    case 1170: return this.getActive(39)
                    case 1190: return this.sumActive([331, 332, 643, 644])
                    case 1195: return this.sumCodes([1100, 1110, 1115, 1125, 1130, 1135, 1140, 1145, 1155, 1160, 1165, 1170, 1190])

                    case 1200: return this.getActive(286)

                    case 1300: return this.sumCodes([1095, 1195, 1200])

                    case 1400: return this.sumPassive([401, 402, 403, 404])
                    case 1401: return this.getPassive(404)
                    case 1405: return this.sumPassive([411, 412, 413, 414])
                    case 1410: return this.sumPassive([421, 422, 423, 424, 425])
                    case 1411: return this.getPassive(421)
                    case 1412: return this.getPassive(423)
                    case 1415: return this.getPassive(43)
                    case 1420: return this.getPassive(441) || this.getActive(442)
                    case 1425: return this.getPassive(46)
                    case 1430: return this.sumPassive([451, 452, 453])
                    case 1495: return this.sumCodes([1400, 1405, 1410, 1415]) - this.calculateCode(1420) - this.sumCodes([1425, 1430])

                    case 1500: return this.getPassive(54)
                    case 1510: return this.sumPassive([501, 502, 503, 504])
                    case 1515: return this.sumPassive([505, 506, 511, 512, 521, 522, 523, 531, 532, 55])
                    case 1520: return this.sumPassive([471, 473, 474, 477, 478])
                    case 1525: return this.sumPassive([481, 482, 483, 484])
                    case 1526: return this.getPassive(483)
                    case 1540: return this.getPassive(475)
                    case 1545: return this.getPassive(476)
                    case 1595: return this.sumCodes([1500, 1510, 1515, 1520, 1525, 1540, 1545])

                    case 1600: return this.sumPassive([601, 602, 603, 604, 605, 606])
                    case 1605: return this.sumPassive([621, 622])
                    case 1610: return this.sumPassive([611, 612])
                    case 1615: return this.sumPassive([631, 632, 633])
                    case 1620: return this.sumPassive([641, 642])
                    case 1625: return this.sumPassive([651, 652, 654, 655])
                    case 1630: return this.sumPassive([661, 662, 663])
                    case 1635: return this.getPassive(681)
                    case 1640: return this.sumPassive([671, 671])
                    case 1645: return this.sumPassive([682, 683])
                    case 1660: return this.sumPassive([471, 472, 473, 474, 477, 478])
                    case 1665: return this.getPassive(69)
                    case 1690: return this.sumPassive([361, 362, 363, 364, 372, 643, 644, 684, 685])
                    case 1695: return this.sumCodes([1600, 1605, 1610, 1615, 1620, 1625, 1630, 1635, 1640, 1645, 1660, 1665, 1690])

                    case 1700: return this.getPassive(680)

                    case 1900: return this.sumCodes([1495, 1595, 1695, 1700])

                    default: {
                        console.log(`Error: undefined account code ${code}`)
                        return 0
                    }
                }
            }
        }
    }
</script>

<style>
    table {
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px solid #ddd;
        padding: 5px;
    }
</style>
